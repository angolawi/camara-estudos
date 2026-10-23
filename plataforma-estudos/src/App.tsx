import React, { useState } from 'react';
import { Navbar, AbaNavegacao } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Ciclo20Horas } from './components/Ciclo20Horas';
import { TrilhaMes } from './components/TrilhaMes';
import { MateriaisAulas } from './components/MateriaisAulas';
import { LaboratorioP3 } from './components/LaboratorioP3';
import { CadernoErros } from './components/CadernoErros';
import { GuiaCoach } from './components/GuiaCoach';
import { useEstudoProgress } from './hooks/useEstudoProgress';
import { DISCIPLINAS } from './data/mapeamentoAulas';
import { 
  abrirPdfUniversal, 
  obterModoOrigemPdf, 
  salvarModoOrigemPdf, 
  obterUrlGoogleDriveConfigurada, 
  salvarUrlGoogleDriveConfigurada,
  ModoOrigemPdf 
} from './utils/pdfUrl';
import confetti from 'canvas-confetti';
import { Settings, Globe, ExternalLink, HardDrive } from 'lucide-react';

export function App() {
  const [abaAtiva, setAbaAtiva] = useState<AbaNavegacao>('dashboard');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<string | undefined>();
  const [modalConfigAberto, setModalConfigAberto] = useState(false);
  const [modoPdf, setModoPdf] = useState<ModoOrigemPdf>(() => obterModoOrigemPdf());
  const [driveUrlInput, setDriveUrlInput] = useState(() => obterUrlGoogleDriveConfigurada());

  const {
    estado,
    toggleAulaConcluida,
    toggleBlocoCiclo,
    resetarCicloManual,
    toggleSessaoMes,
    adicionarErro,
    removerErro,
    salvarRedacao,
    removerRedacao,
    exportarBackup,
    importarBackup,
  } = useEstudoProgress();

  const totalAulasGeral = DISCIPLINAS.reduce((acc, curr) => acc + curr.totalAulas, 0);
  const totalAulasConcluidas = Object.values(estado.aulasConcluidas).filter(Boolean).length;

  const handleConcluirBloco = (blocoId: string, proximoIndice: number) => {
    toggleBlocoCiclo(blocoId, proximoIndice);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#10b981', '#38bdf8']
    });
  };

  const handleAbrirMateriaAulas = (disciplinaNome: string) => {
    setDisciplinaSelecionada(disciplinaNome);
    setAbaAtiva('aulas');
  };

  const handleAbrirPdf = (caminho: string) => {
    abrirPdfUniversal(caminho);
  };

  const handleSalvarConfigUrl = (e: React.FormEvent) => {
    e.preventDefault();
    salvarModoOrigemPdf(modoPdf);
    salvarUrlGoogleDriveConfigurada(driveUrlInput);
    setModalConfigAberto(false);
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Navbar Superior */}
      <Navbar
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
        voltasCompletadas={estado.voltasCicloCompletadas}
        totalAulasConcluidas={totalAulasConcluidas}
        totalAulas={totalAulasGeral}
        onExportar={exportarBackup}
        onImportar={(json) => {
          if (importarBackup(json)) {
            alert('Progresso restaurado com sucesso!');
          } else {
            alert('Erro ao carregar o arquivo de backup.');
          }
        }}
      />

      {/* Conteúdo Principal com base na aba ativa */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {abaAtiva === 'dashboard' && (
          <Dashboard
            setAbaAtiva={setAbaAtiva}
            blocosConcluidos={estado.blocosConcluidosCiclo}
            voltasCompletadas={estado.voltasCicloCompletadas}
            totalAulasConcluidas={totalAulasConcluidas}
            totalAulas={totalAulasGeral}
            totalErros={estado.cadernoErros.length}
            onConcluirBloco={handleConcluirBloco}
            onAbrirPdf={handleAbrirPdf}
          />
        )}

        {abaAtiva === 'ciclo' && (
          <Ciclo20Horas
            blocosConcluidos={estado.blocosConcluidosCiclo}
            voltasCompletadas={estado.voltasCicloCompletadas}
            onToggleBloco={handleConcluirBloco}
            onResetarCiclo={resetarCicloManual}
            onAbrirMateriaAulas={handleAbrirMateriaAulas}
          />
        )}

        {abaAtiva === 'trilha' && (
          <TrilhaMes
            sessoesConcluidas={estado.sessoesMesConcluidas}
            onToggleSessao={toggleSessaoMes}
            onAbrirMateriaAulas={handleAbrirMateriaAulas}
          />
        )}

        {abaAtiva === 'aulas' && (
          <MateriaisAulas
            aulasConcluidas={estado.aulasConcluidas}
            onToggleAula={toggleAulaConcluida}
            disciplinaSelecionadaInicial={disciplinaSelecionada}
          />
        )}

        {abaAtiva === 'discursiva' && (
          <LaboratorioP3
            redacoesSalvas={estado.redacoesSalvas}
            onSalvarRedacao={salvarRedacao}
            onRemoverRedacao={removerRedacao}
          />
        )}

        {abaAtiva === 'erros' && (
          <CadernoErros
            erros={estado.cadernoErros}
            onAdicionarErro={adicionarErro}
            onRemoverErro={removerErro}
          />
        )}

        {abaAtiva === 'coach' && (
          <GuiaCoach />
        )}
      </main>

      {/* Rodapé com Atalho para Configuração de PDFs (Google Drive / Local) */}
      <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Plataforma de Estudos — Analista Legislativo (Registro e Redação) • Câmara dos Deputados</p>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setModalConfigAberto(true)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition text-[11px] cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Modo: {modoPdf === 'gdrive' ? '☁️ Google Drive' : '💻 Servidor Local'}</span>
            </button>

            <a
              href={driveUrlInput}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 transition text-[11px]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Pasta Google Drive</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Modal de Configuração Google Drive vs Local */}
      {modalConfigAberto && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-lg w-full p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Globe className="w-5 h-5 text-indigo-400" />
              <span>Origem dos PDFs (Google Drive vs Local)</span>
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Escolha como prefere abrir os arquivos ao clicar nos botões da plataforma:
            </p>

            <form onSubmit={handleSalvarConfigUrl} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModoPdf('gdrive')}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    modoPdf === 'gdrive'
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center space-x-2 font-bold text-xs mb-1">
                    <Globe className="w-4 h-4" />
                    <span>☁️ Google Drive</span>
                  </div>
                  <p className="text-[11px] opacity-80 leading-snug">
                    Ideal para GitHub Pages e acesso em qualquer lugar (celular/tablet).
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setModoPdf('local')}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    modoPdf === 'local'
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center space-x-2 font-bold text-xs mb-1">
                    <HardDrive className="w-4 h-4" />
                    <span>💻 Servidor Local</span>
                  </div>
                  <p className="text-[11px] opacity-80 leading-snug">
                    Usa os PDFs locais no computador via <code>/api/pdf</code>.
                  </p>
                </button>
              </div>

              <div>
                <label className="text-slate-300 font-semibold block text-xs mb-1">
                  Link da Pasta Raiz no Google Drive:
                </label>
                <input
                  type="text"
                  value={driveUrlInput}
                  onChange={(e) => setDriveUrlInput(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-100 font-mono"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-700">
                <button
                  type="button"
                  onClick={() => setModalConfigAberto(false)}
                  className="px-4 py-2 rounded-xl bg-slate-700 text-slate-300 hover:bg-slate-600 text-xs font-semibold cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 cursor-pointer"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
