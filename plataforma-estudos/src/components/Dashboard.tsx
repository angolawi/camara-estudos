import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Target, 
  AlertCircle,
  FileText,
  ExternalLink
} from 'lucide-react';
import { BLOCOS_CICLO, LinkPdfBloco } from '../data/cicloSemanal';
import { abrirPdfUniversal } from '../utils/pdfUrl';
import { AbaNavegacao } from './Navbar';

interface DashboardProps {
  setAbaAtiva: (aba: AbaNavegacao) => void;
  blocosConcluidos: Record<string, boolean>;
  voltasCompletadas: number;
  totalAulasConcluidas: number;
  totalAulas: number;
  totalErros: number;
  onConcluirBloco: (blocoId: string, proximoIndice: number) => void;
  onAbrirPdf: (caminho: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  setAbaAtiva,
  blocosConcluidos,
  voltasCompletadas,
  totalAulasConcluidas,
  totalAulas,
  totalErros,
  onConcluirBloco,
}) => {
  // Encontra o primeiro bloco não concluído no ciclo atual
  const blocoAtual = BLOCOS_CICLO.find(b => !blocosConcluidos[b.id]) || BLOCOS_CICLO[0];
  const blocoIndex = BLOCOS_CICLO.findIndex(b => b.id === blocoAtual.id);
  const horasConcluidasNoCiclo = BLOCOS_CICLO.filter(b => blocosConcluidos[b.id])
    .reduce((acc, curr) => acc + curr.duracaoHoras, 0);

  // Timer 60/30 (Modo Sessão de Alto Rendimento)
  const [faseTimer, setFaseTimer] = useState<'foco' | 'pausa' | 'questoes'>('foco');
  const [segundosRestantes, setSegundosRestantes] = useState(55 * 60);
  const [timerAtivo, setTimerAtivo] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerAtivo && segundosRestantes > 0) {
      interval = setInterval(() => {
        setSegundosRestantes((prev) => prev - 1);
      }, 1000);
    } else if (segundosRestantes === 0 && timerAtivo) {
      if (faseTimer === 'foco') {
        setFaseTimer('pausa');
        setSegundosRestantes(5 * 60);
      } else if (faseTimer === 'pausa') {
        setFaseTimer('questoes');
        setSegundosRestantes(30 * 60);
      } else {
        setTimerAtivo(false);
        setFaseTimer('foco');
        setSegundosRestantes(55 * 60);
      }
    }
    return () => clearInterval(interval);
  }, [timerAtivo, segundosRestantes, faseTimer]);

  const toggleTimer = () => setTimerAtivo(!timerAtivo);
  const resetTimer = () => {
    setTimerAtivo(false);
    setFaseTimer('foco');
    setSegundosRestantes(55 * 60);
  };

  const formatarTempo = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const abrirPdf = (caminho: string) => {
    abrirPdfUniversal(caminho);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Banner Motivacional */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 p-6 sm:p-8 border border-indigo-500/20 shadow-xl">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Alavancagem Tática: Bacharel em Letras / Cebraspe</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Seu Guia Rumo à Posse na Câmara dos Deputados
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sua formação em Letras é sua maior vantagem competitiva em Linguística e Português. Conforme o plano do coach, use o <strong className="text-indigo-300">estudo reverso ultra-veloz</strong> para blindar seus pontos cegos (<strong className="text-rose-400">IA/Degravação</strong>, <strong className="text-amber-400">Ciência Política</strong> e <strong className="text-sky-400">Inglês Instrumental</strong>) e dominar a <strong className="text-emerald-400">Discursiva P3 (60 pontos)</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setAbaAtiva('ciclo')}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md shadow-indigo-600/30 transition cursor-pointer"
            >
              <span>Ver Ciclo Completo (15 Blocos)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setAbaAtiva('coach')}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition cursor-pointer"
            >
              <span>Regras de Ouro & Autores</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Bloco Atual do Ciclo + Timer 60/30 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Bloco Atual (Card Principal de Ação) */}
        <div className="lg:col-span-7 bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
                  Sua Próxima Meta no Ciclo
                </span>
              </div>
              <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Bloco {blocoAtual.id} de 15 ({blocoAtual.duracaoFormatada})
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              {blocoAtual.disciplina}
            </h2>

            <div className="inline-block px-3 py-1 rounded-md bg-slate-700/60 text-slate-300 text-xs font-medium mb-4">
              Eixo: {blocoAtual.eixo}
            </div>

            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 mb-4">
              <div className="flex items-start space-x-2">
                <Target className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Material Recomendado:</strong> {blocoAtual.materialPrioritario}
                </p>
              </div>

              {blocoAtual.dicasCoach && (
                <div className="flex items-start space-x-2 pt-2 border-t border-slate-800">
                  <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-200/90 leading-relaxed">
                    <strong>Diretriz do Coach:</strong> {blocoAtual.dicasCoach}
                  </p>
                </div>
              )}
            </div>

            {/* PDFs Recomendados para o Bloco da Vez */}
            {blocoAtual.pdfsSugeridos && blocoAtual.pdfsSugeridos.length > 0 && (
              <div className="space-y-1.5 mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Material PDF Vinculado (Abrir Imediatamente):
                </span>
                <div className="flex flex-wrap gap-2">
                  {blocoAtual.pdfsSugeridos.map((pdf: LinkPdfBloco, pIdx: number) => (
                    <button
                      key={pIdx}
                      onClick={() => abrirPdf(pdf.caminhoArquivo)}
                      className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/35 border border-indigo-500/35 text-indigo-300 text-xs font-bold transition cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{pdf.titulo}</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => onConcluirBloco(blocoAtual.id, (blocoIndex + 1) % BLOCOS_CICLO.length)}
              className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/25 transition cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Concluir {blocoAtual.id} e Avançar</span>
            </button>

            <button
              onClick={() => setAbaAtiva('aulas')}
              className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-semibold transition cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Ver Todas as Aulas</span>
            </button>
          </div>
        </div>

        {/* Timer da Sessão de Estudo (Método 60/30) */}
        <div className="lg:col-span-5 bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Método 60/30 de Alto Rendimento
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                faseTimer === 'foco' 
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  : faseTimer === 'pausa'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }`}>
                {faseTimer === 'foco' ? 'Etapa 1: Leitura Ativa' : faseTimer === 'pausa' ? 'Etapa 2: Intervalo (Sem Celular)' : 'Etapa 3: Bateria de Questões C/E'}
              </span>
            </div>

            <div className="text-center py-4">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-widest font-mono">
                {formatarTempo(segundosRestantes)}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {faseTimer === 'foco' && '55 min: Leitura densa e rápida do PDF Simplificado ou Lei Seca'}
                {faseTimer === 'pausa' && '5 min: Pausa total para consolidar a memória'}
                {faseTimer === 'questoes' && '30 min: Resolução de 15 a 20 itens Cebraspe + Caderno de Erros'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 pt-4 border-t border-slate-700/60">
            <button
              onClick={toggleTimer}
              className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-white transition shadow-md cursor-pointer ${
                timerAtivo 
                  ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/30' 
                  : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30'
              }`}
            >
              {timerAtivo ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{timerAtivo ? 'Pausar' : 'Iniciar Foco'}</span>
            </button>

            <button
              onClick={resetTimer}
              title="Reiniciar Timer"
              className="p-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Cartões de Status Rápido */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
          <span className="text-xs text-slate-400 font-medium">Voltas Completas no Ciclo</span>
          <div className="mt-1 flex items-baseline space-x-2">
            <span className="text-2xl font-black text-indigo-400">{voltasCompletadas}</span>
            <span className="text-xs text-slate-400">/ 4 voltas (mês)</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-indigo-500 h-full rounded-full transition-all"
              style={{ width: `${Math.min(100, (voltasCompletadas / 4) * 100)}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
          <span className="text-xs text-slate-400 font-medium">Progresso Ciclo Atual</span>
          <div className="mt-1 flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-400">{horasConcluidasNoCiclo.toFixed(1)}h</span>
            <span className="text-xs text-slate-400">/ 20h00</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all"
              style={{ width: `${Math.min(100, (horasConcluidasNoCiclo / 20) * 100)}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
          <span className="text-xs text-slate-400 font-medium">Aulas Concluídas</span>
          <div className="mt-1 flex items-baseline space-x-2">
            <span className="text-2xl font-black text-sky-400">{totalAulasConcluidas}</span>
            <span className="text-xs text-slate-400">/ {totalAulas} aulas</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-sky-500 h-full rounded-full transition-all"
              style={{ width: `${Math.min(100, (totalAulasConcluidas / totalAulas) * 100)}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 cursor-pointer hover:border-amber-500/50 transition" onClick={() => setAbaAtiva('erros')}>
          <span className="text-xs text-slate-400 font-medium">Caderno de Erros Ativo</span>
          <div className="mt-1 flex items-baseline space-x-2">
            <span className="text-2xl font-black text-amber-400">{totalErros}</span>
            <span className="text-xs text-slate-400">pegadinhas catalogadas</span>
          </div>
          <p className="text-[11px] text-amber-300/80 mt-2">Clique para revisar antes das questões →</p>
        </div>

      </div>

    </div>
  );
};
