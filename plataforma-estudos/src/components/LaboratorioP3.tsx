import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  RotateCcw, 
  Save, 
  Trash2, 
  FileText, 
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { RedacaoP3Salva } from '../hooks/useEstudoProgress';

interface LaboratorioP3Props {
  redacoesSalvas: RedacaoP3Salva[];
  onSalvarRedacao: (redacao: Omit<RedacaoP3Salva, 'id' | 'data'>) => void;
  onRemoverRedacao: (id: string) => void;
}

export const LaboratorioP3: React.FC<LaboratorioP3Props> = ({
  redacoesSalvas,
  onSalvarRedacao,
  onRemoverRedacao,
}) => {
  const [tipoProva, setTipoProva] = useState<'peca_50l' | 'questao_20l_1' | 'questao_20l_2'>('peca_50l');
  const [texto, setTexto] = useState('');
  const [titulo, setTitulo] = useState('Peça Técnica Oficial: Revisão de Discurso Parlamentar');
  const [tempoSegundos, setTempoSegundos] = useState(3 * 60 * 60);
  const [timerAtivo, setTimerAtivo] = useState(false);

  const linhasTexto = texto ? texto.split('\n').length : 0;
  const limiteLinhas = tipoProva === 'peca_50l' ? 50 : 20;
  const totalPalavras = texto.trim() ? texto.trim().split(/\s+/).length : 0;
  const totalCaracteres = texto.length;

  useEffect(() => {
    let interval: any = null;
    if (timerAtivo && tempoSegundos > 0) {
      interval = setInterval(() => {
        setTempoSegundos((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerAtivo, tempoSegundos]);

  const toggleTimer = () => setTimerAtivo(!timerAtivo);
  const resetTimer = () => {
    setTimerAtivo(false);
    setTempoSegundos(3 * 60 * 60);
  };

  const formatarTempo = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSalvar = () => {
    if (!texto.trim()) {
      alert('Escreva seu texto antes de salvar.');
      return;
    }
    onSalvarRedacao({
      tipo: tipoProva,
      titulo: titulo || 'Sem título',
      texto,
      linhas: linhasTexto,
      tempoGastoSegundos: (3 * 60 * 60) - tempoSegundos,
    });
    alert('Redação salva com sucesso no histórico!');
  };

  const carregarTemaSugerido = (tipo: 'peca_50l' | 'questao_20l_1' | 'questao_20l_2') => {
    setTipoProva(tipo);
    if (tipo === 'peca_50l') {
      setTitulo('Peça Técnica Oficial (50 Linhas): Retextualização de Pronunciamento Parlamentar em Comissão');
    } else if (tipo === 'questao_20l_1') {
      setTitulo('Questão 1 (20 Linhas): Conceito e Aplicação de Diarização de Falantes e ASR no Plenário Ulysses Guimarães');
    } else {
      setTitulo('Questão 2 (20 Linhas): Marcuschi e a Transposição da Fala para a Escrita na Câmara dos Deputados');
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Cabeçalho */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
              <PenTool className="w-4 h-4" />
              <span>P3 — Discursiva Cebraspe (60 Pontos = 25% da Nota Total)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Laboratório de Redação e Peça Técnica
            </h1>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Simule o ambiente real com o cronômetro oficial de 3 horas para a Peça Técnica de 50 linhas e 2 Questões Discursivas de 20 linhas.
            </p>
          </div>

          {/* Cronômetro Oficial 3h */}
          <div className="bg-slate-50 px-6 py-3.5 rounded-2xl border border-slate-200 text-center shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tempo de Prova (3h00)</span>
            <div className="text-3xl font-black text-rose-600 font-mono my-1">
              {formatarTempo(tempoSegundos)}
            </div>
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={toggleTimer}
                className={`px-3 py-1 rounded-lg text-xs font-bold text-white transition cursor-pointer ${
                  timerAtivo ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                {timerAtivo ? 'Pausar' : 'Iniciar'}
              </button>
              <button
                onClick={resetTimer}
                className="p-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-600 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Seleção do Modo de Treino */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-200">
          <button
            onClick={() => carregarTemaSugerido('peca_50l')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              tipoProva === 'peca_50l'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Peça Técnica Oficial (Até 50 Linhas - 30 Pts)
          </button>

          <button
            onClick={() => carregarTemaSugerido('questao_20l_1')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              tipoProva === 'questao_20l_1'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Questão 1: IA e Diarização (Até 20 Linhas - 15 Pts)
          </button>

          <button
            onClick={() => carregarTemaSugerido('questao_20l_2')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              tipoProva === 'questao_20l_2'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Questão 2: Marcuschi / Retextualização (Até 20 Linhas - 15 Pts)
          </button>
        </div>
      </div>

      {/* Área do Editor de Redação + Diretrizes ao Lado */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Editor e Folha de Resposta */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título do texto ou tema..."
                className="flex-1 bg-transparent text-base font-bold text-slate-900 border-b border-transparent hover:border-slate-300 focus:border-indigo-600 focus:outline-none transition pb-1"
              />

              {/* Contadores */}
              <div className="flex items-center space-x-3 text-xs">
                <span className={`font-bold px-2.5 py-1 rounded-lg border ${
                  linhasTexto > limiteLinhas 
                    ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse' 
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  Linhas: {linhasTexto} / {limiteLinhas} máx
                </span>
                <span className="text-slate-500">{totalPalavras} palavras</span>
                <span className="text-slate-500">{totalCaracteres} chars</span>
              </div>
            </div>

            {/* Folha de Redação Estilizada */}
            <div className="relative">
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                rows={18}
                placeholder="Digite aqui sua redação simulada no formato Cebraspe..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-sm leading-relaxed text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition resize-y"
              />

              {linhasTexto > limiteLinhas && (
                <div className="mt-2 p-2.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center space-x-2 text-rose-800 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>Atenção: Seu texto excedeu o limite de {limiteLinhas} linhas da folha de resposta Cebraspe! O que passar dessa linha será desconsiderado pela banca.</span>
                </div>
              )}
            </div>

            {/* Ações do Editor */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSalvar}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar no Histórico</span>
                </button>

                <button
                  onClick={() => setTexto('')}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200 transition cursor-pointer"
                >
                  Limpar
                </button>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                Dica: Parágrafos objetivos sem introduções floreadas.
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Critérios Cebraspe e Checklist de Correção */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Checklist de Ouro do Coach</span>
            </h3>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">1. Fidelidade Semântica Absoluta</strong>
                Ao eliminar hesitações ("né", "veja bem", "então"), garanta que a intenção e o posicionamento do parlamentar permaneçam 100% intactos.
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">2. Adequação à Norma Padrão</strong>
                Concordância estrita, regência e pontuação impecável. No Cebraspe, cada erro gramatical subtrai fração da nota de conteúdo multiplicada pelo fator da banca!
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">3. Técnica Legislativa (LC 95/98)</strong>
                Se a peça envolver transcrição de proposições ou ata, observe o padrão de numeração, epígrafe e ementa.
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">4. Sem Introduções Poéticas</strong>
                Responda topicamente: quesito 'a' no parágrafo 1; quesito 'b' no parágrafo 2.
              </div>
            </div>
          </div>

          {/* Histórico de Redações Salvas */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>Redações Salvas ({redacoesSalvas.length})</span>
            </h3>

            {redacoesSalvas.length === 0 ? (
              <p className="text-xs text-slate-500 italic">Nenhuma redação salva ainda. Seus treinos aparecerão aqui.</p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {redacoesSalvas.map((red) => (
                  <div key={red.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{red.titulo}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {red.data} • {red.linhas} linhas • {red.tipo === 'peca_50l' ? 'Peça 50L' : 'Questão 20L'}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoverRedacao(red.id)}
                      className="text-slate-400 hover:text-rose-600 transition cursor-pointer"
                      title="Excluir do histórico"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
