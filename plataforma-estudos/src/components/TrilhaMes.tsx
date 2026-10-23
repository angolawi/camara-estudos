import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  ExternalLink,
  Target
} from 'lucide-react';
import { PLANEJAMENTO_1_MES, SemanaPlanejamento, SessaoEstudo } from '../data/planejamentoMes';

interface TrilhaMesProps {
  sessoesConcluidas: Record<string, boolean>;
  onToggleSessao: (sessaoId: string) => void;
  onAbrirMateriaAulas: (disciplinaNome: string, aulaNome?: string) => void;
}

export const TrilhaMes: React.FC<TrilhaMesProps> = ({
  sessoesConcluidas,
  onToggleSessao,
  onAbrirMateriaAulas,
}) => {
  const [semanaAtiva, setSemanaAtiva] = useState<number>(1);

  const semanaAtual = PLANEJAMENTO_1_MES.find(s => s.numero === semanaAtiva) || PLANEJAMENTO_1_MES[0];

  const totalSessoesSemana = semanaAtual.sessoes.length;
  const concluidasSemana = semanaAtual.sessoes.filter(s => sessoesConcluidas[s.id]).length;
  const percentualSemana = Math.round((concluidasSemana / totalSessoesSemana) * 100);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Cabeçalho com Abas das 4 Semanas */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Cronograma Tático de 1 Mês (80 Horas)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Planejamento Passo a Passo Semana a Semana
            </h1>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Cada sessão foi arquitetada diretamente a partir da mentoria para cobrir todas as frentes críticas do edital, conectando teoria, discursiva e baterias de questões Cebraspe.
            </p>
          </div>

          <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 text-right shrink-0">
            <span className="text-xs text-slate-500 font-medium">Progresso da Semana {semanaAtiva}</span>
            <div className="text-xl font-black text-emerald-700">
              {concluidasSemana} / {totalSessoesSemana} <span className="text-xs text-slate-500 font-normal">sessões ({percentualSemana}%)</span>
            </div>
          </div>
        </div>

        {/* Abas das 4 Semanas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {PLANEJAMENTO_1_MES.map((s: SemanaPlanejamento) => {
            const ativa = semanaAtiva === s.numero;
            const concluidas = s.sessoes.filter(item => sessoesConcluidas[item.id]).length;
            const pct = Math.round((concluidas / s.sessoes.length) * 100);

            return (
              <button
                key={s.numero}
                onClick={() => setSemanaAtiva(s.numero)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  ativa
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold uppercase ${ativa ? 'text-indigo-100' : 'text-slate-500'}`}>
                    Semana {s.numero}
                  </span>
                  <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded ${ativa ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    {pct}%
                  </span>
                </div>
                <div className="text-xs font-semibold line-clamp-1">
                  {s.titulo.split(':')[1] || s.titulo}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detalhes da Semana Selecionada */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
            <span>{semanaAtual.titulo}</span>
          </h2>
          <div className="mt-2 flex items-center space-x-2 text-sm text-indigo-900 bg-indigo-50 p-3 rounded-xl border border-indigo-200">
            <Target className="w-4 h-4 shrink-0 text-indigo-600" />
            <p><strong>Foco da Semana:</strong> {semanaAtual.objetivoFoco}</p>
          </div>
        </div>

        {/* Lista de Sessões da Semana */}
        <div className="space-y-4">
          {semanaAtual.sessoes.map((sessao: SessaoEstudo) => {
            const concluida = !!sessoesConcluidas[sessao.id];

            return (
              <div
                key={sessao.id}
                className={`rounded-xl border transition-all ${
                  concluida
                    ? 'bg-slate-50 border-slate-200 opacity-75'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="p-4 flex items-start justify-between gap-4">
                  
                  {/* Botão Checkbox */}
                  <button
                    onClick={() => onToggleSessao(sessao.id)}
                    className="mt-0.5 text-slate-400 hover:text-emerald-600 transition shrink-0 cursor-pointer"
                  >
                    {concluida ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  {/* Conteúdo Principal */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-indigo-800 border border-slate-200">
                        {sessao.disciplina}
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{sessao.duracao}</span>
                      </span>
                    </div>

                    <p className={`text-sm ${concluida ? 'line-through text-slate-400' : 'text-slate-800 font-medium'}`}>
                      {sessao.descricao}
                    </p>

                    {/* Dica do Coach */}
                    <div className="mt-2 text-xs text-amber-900 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                      <strong>Diretriz do Coach:</strong> {sessao.metodologiaCoach}
                    </div>

                    {/* Aulas e Materiais Vinculados */}
                    {sessao.aulasSugeridas && sessao.aulasSugeridas.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {sessao.aulasSugeridas.map((sug, i) => (
                          <button
                            key={i}
                            onClick={() => onAbrirMateriaAulas(sug.disciplinaNome, sug.aulaNome)}
                            className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-semibold border border-indigo-200 transition cursor-pointer"
                          >
                            <BookOpen className="w-3 h-3 text-indigo-600" />
                            <span>Abrir: {sug.aulaNome.replace(/_/g, ' ')} ({sug.tipoPdfRecomendado})</span>
                            <ExternalLink className="w-3 h-3 text-indigo-600" />
                          </button>
                        ))}
                      </div>
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
