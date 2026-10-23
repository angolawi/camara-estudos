import React from 'react';
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  RotateCcw, 
  Award,
  Layers,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { BLOCOS_CICLO, NIVEIS_PARETO, BlocoCiclo, LinkPdfBloco } from '../data/cicloSemanal';
import { abrirPdfUniversal } from '../utils/pdfUrl';

interface Ciclo20HorasProps {
  blocosConcluidos: Record<string, boolean>;
  voltasCompletadas: number;
  onToggleBloco: (blocoId: string, proximoIndice: number) => void;
  onResetarCiclo: () => void;
  onAbrirMateriaAulas?: (pasta: string) => void;
}

export const Ciclo20Horas: React.FC<Ciclo20HorasProps> = ({
  blocosConcluidos,
  voltasCompletadas,
  onToggleBloco,
  onResetarCiclo,
  onAbrirMateriaAulas,
}) => {
  const totalConcluidos = Object.values(blocosConcluidos).filter(Boolean).length;
  const horasConcluidas = BLOCOS_CICLO.filter(b => blocosConcluidos[b.id])
    .reduce((acc, curr) => acc + curr.duracaoHoras, 0);

  const getCorNivel = (nivel: number) => {
    switch (nivel) {
      case 1: return { badge: 'bg-rose-50 text-rose-800 border-rose-200', border: 'border-l-rose-500' };
      case 2: return { badge: 'bg-amber-50 text-amber-800 border-amber-200', border: 'border-l-amber-500' };
      case 3: return { badge: 'bg-emerald-50 text-emerald-800 border-emerald-200', border: 'border-l-emerald-500' };
      case 4: return { badge: 'bg-sky-50 text-sky-800 border-sky-200', border: 'border-l-sky-500' };
      default: return { badge: 'bg-slate-50 text-slate-800 border-slate-200', border: 'border-l-slate-400' };
    }
  };

  const abrirPdf = (e: React.MouseEvent, caminhoArquivo: string) => {
    e.stopPropagation();
    abrirPdfUniversal(caminhoArquivo);
  };

  const abrirMateriaCompleta = (e: React.MouseEvent, pasta?: string) => {
    e.stopPropagation();
    if (pasta && onAbrirMateriaAulas) {
      onAbrirMateriaAulas(pasta);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Cabeçalho do Ciclo */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-1">
              <RotateCcw className="w-4 h-4" />
              <span>Ciclo Contínuo — Liberdade de Horários</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Ciclo Semanal de 20 Horas Líquidas
            </h1>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              O ciclo não fica preso aos dias da semana. Cada bloco possui <strong>links diretos aos PDFs recomendados do edital</strong> para você abrir e estudar com 1 clique.
            </p>
          </div>

          <div className="flex items-center space-x-4 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 shrink-0">
            <div>
              <span className="text-xs text-slate-500 font-medium">Progresso do Ciclo</span>
              <div className="text-xl font-black text-indigo-700">
                {horasConcluidas.toFixed(1)}h / 20h00
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="text-xs text-slate-500 font-medium">Voltas Concluídas</span>
              <div className="text-xl font-black text-emerald-700">
                {voltasCompletadas} <span className="text-xs text-slate-400 font-normal">de 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Progresso Global do Ciclo */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-slate-500 mb-2 font-medium">
            <span>{totalConcluidos} de 15 blocos concluídos</span>
            <span>{Math.round((horasConcluidas / 20) * 100)}% do ciclo completo</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-600 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(horasConcluidas / 20) * 100}%` }}
            />
          </div>
        </div>

        {totalConcluidos === 15 && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2 text-emerald-800 text-sm font-semibold">
              <Award className="w-5 h-5 text-emerald-600" />
              <span>Parabéns! Você completou uma volta de 20 horas no ciclo!</span>
            </div>
            <button
              onClick={onResetarCiclo}
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition cursor-pointer"
            >
              Iniciar Próxima Volta
            </button>
          </div>
        )}
      </div>

      {/* Visão Rápida dos 4 Níveis de Pareto */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {NIVEIS_PARETO.map((n) => (
          <div key={n.nivel} className={`p-4 rounded-xl border bg-white shadow-xs ${n.corBorda}`}>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="uppercase text-slate-700">Nível {n.nivel}</span>
              <span className={`px-2 py-0.5 rounded border ${n.corBg}`}>{n.percentualTempo}</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">{n.titulo}</h4>
            <p className="text-[11px] text-slate-600 mt-1 leading-snug">{n.descricao}</p>
          </div>
        ))}
      </div>

      {/* Lista dos 15 Blocos de Estudo com Links aos PDFs */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <span>Sequência Contínua dos 15 Blocos com PDFs Vinculados</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOCOS_CICLO.map((bloco: BlocoCiclo, idx: number) => {
            const concluido = !!blocosConcluidos[bloco.id];
            const cores = getCorNivel(bloco.nivelPareto);

            return (
              <div
                key={bloco.id}
                className={`rounded-xl p-4 border transition-all duration-200 border-l-4 ${cores.border} flex flex-col justify-between shadow-xs ${
                  concluido
                    ? 'bg-slate-50/80 border-slate-200 opacity-75'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Topo do Card com Checkbox e Tags */}
                  <div className="flex items-start justify-between">
                    <button
                      onClick={() => onToggleBloco(bloco.id, (idx + 1) % BLOCOS_CICLO.length)}
                      className="flex items-center space-x-2 text-left group cursor-pointer"
                    >
                      {concluido ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-indigo-600 transition" />
                      )}
                      <span className="text-xs font-black text-indigo-700 uppercase tracking-wider">
                        {bloco.id}
                      </span>
                    </button>

                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cores.badge}`}>
                        Nível {bloco.nivelPareto}
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{bloco.duracaoFormatada}</span>
                      </span>
                    </div>
                  </div>

                  {/* Nome da Disciplina e Eixo */}
                  <h4 className={`text-base font-bold mt-2 ${concluido ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                    {bloco.disciplina}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    Eixo: {bloco.eixo}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    <p className="line-clamp-2">
                      <strong className="text-slate-900">Material Base:</strong> {bloco.materialPrioritario}
                    </p>
                  </div>

                  {bloco.dicasCoach && (
                    <p className="mt-2 text-[11px] text-amber-800 bg-amber-50/60 p-2 rounded-lg border border-amber-200/60 italic line-clamp-2">
                      "{bloco.dicasCoach}"
                    </p>
                  )}
                </div>

                {/* Área de Links Diretos para os PDFs do Bloco */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    Abrir Material:
                  </span>

                  <div className="flex flex-col gap-1.5">
                    {bloco.pdfsSugeridos && bloco.pdfsSugeridos.length > 0 ? (
                      bloco.pdfsSugeridos.map((pdf: LinkPdfBloco, pIdx: number) => (
                        <button
                          key={pIdx}
                          onClick={(e) => abrirPdf(e, pdf.caminhoArquivo)}
                          className="w-full text-left inline-flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-200/80 text-indigo-900 text-xs font-semibold transition cursor-pointer"
                        >
                          <span className="line-clamp-1">{pdf.titulo}</span>
                          <ExternalLink className="w-3 h-3 text-indigo-600 shrink-0 ml-1.5" />
                        </button>
                      ))
                    ) : (
                      <span className="text-[11px] text-slate-400 italic">Caderno de questões/revisão</span>
                    )}

                    {bloco.pastaMapeada && (
                      <button
                        onClick={(e) => abrirMateriaCompleta(e, bloco.pastaMapeada)}
                        className="w-full text-left inline-flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-[11px] transition cursor-pointer"
                      >
                        <span className="flex items-center space-x-1">
                          <BookOpen className="w-3 h-3 text-slate-500" />
                          <span>Ver todas as aulas da matéria</span>
                        </span>
                        <span>→</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
