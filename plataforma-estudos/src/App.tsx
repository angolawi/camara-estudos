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
import { abrirPdfUniversal } from './utils/pdfUrl';
import confetti from 'canvas-confetti';
import { Globe, ExternalLink } from 'lucide-react';

export function App() {
  const [abaAtiva, setAbaAtiva] = useState<AbaNavegacao>('dashboard');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<string | undefined>();

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
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

      {/* Rodapé Limpo Tema Claro */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Plataforma de Estudos — Analista Legislativo (Registro e Redação) • Câmara dos Deputados</p>
          
          <a
            href="https://drive.google.com/drive/folders/1yYls7afF72poPVOeqViSSBZudM-62O3s?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition text-[11px]"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-600" />
            <span>Abrir Acervo Completo no Google Drive</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
