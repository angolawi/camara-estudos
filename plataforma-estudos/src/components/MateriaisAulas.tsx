import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Circle, 
  ExternalLink,
  Filter
} from 'lucide-react';
import { DISCIPLINAS, AulaItem, ArquivoItem } from '../data/mapeamentoAulas';
import { abrirPdfUniversal } from '../utils/pdfUrl';

interface MateriaisAulasProps {
  aulasConcluidas: Record<string, boolean>;
  onToggleAula: (caminhoAula: string) => void;
  disciplinaSelecionadaInicial?: string;
  aulaSelecionadaInicial?: string;
}

export const MateriaisAulas: React.FC<MateriaisAulasProps> = ({
  aulasConcluidas,
  onToggleAula,
  disciplinaSelecionadaInicial,
}) => {
  const [busca, setBusca] = useState('');
  const [disciplinaAtivaId, setDisciplinaAtivaId] = useState<number>(() => {
    if (disciplinaSelecionadaInicial) {
      const encontrada = DISCIPLINAS.find(d => d.nome.includes(disciplinaSelecionadaInicial) || disciplinaSelecionadaInicial.includes(d.nome));
      if (encontrada) return encontrada.id;
    }
    return 1;
  });

  const [filtroTipo, setFiltroTipo] = useState<string>('todos');

  const disciplinaAtiva = DISCIPLINAS.find(d => d.id === disciplinaAtivaId) || DISCIPLINAS[0];

  const aulasFiltradas = disciplinaAtiva.aulas.filter(aula => {
    const matchBusca = 
      aula.aula.toLowerCase().includes(busca.toLowerCase()) ||
      aula.assuntos.toLowerCase().includes(busca.toLowerCase());
    
    if (!matchBusca) return false;

    if (filtroTipo === 'simplificada') {
      return aula.arquivos.some(a => a.tipo === 'simplificada');
    }
    if (filtroTipo === 'aprovados') {
      return aula.arquivos.some(a => a.tipo === 'aprovados');
    }
    if (filtroTipo === 'mapas') {
      return aula.arquivos.some(a => a.tipo === 'mapa' || a.tipo === 'resumo');
    }
    return true;
  });

  const getBadgeArquivo = (tipo: ArquivoItem['tipo']) => {
    switch (tipo) {
      case 'simplificada':
        return { label: '⚡ Versão Simplificada (Coach)', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold hover:bg-emerald-100' };
      case 'aprovados':
        return { label: '🎯 Marcação Aprovados', bg: 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100' };
      case 'mapa':
        return { label: '🗺️ Mapa Mental', bg: 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100' };
      case 'resumo':
        return { label: '📝 Resumo', bg: 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100' };
      case 'slides':
        return { label: '📽️ Slides', bg: 'bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100' };
      case 'texto':
        return { label: '📄 Assuntos', bg: 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200' };
      default:
        return { label: '📖 Versão Original', bg: 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100' };
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Cabeçalho da Central */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Acervo Completo de Estudos (140 Aulas)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Central de Materiais e Aulas
            </h1>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Navegue pelas 13 disciplinas e acesse os PDFs. Lembre-se da diretriz do coach: dê <strong>prioridade à Versão Simplificada e Marcação dos Aprovados</strong> para acelerar o ritmo de estudo!
            </p>
          </div>

          {/* Campo de Busca Rápida */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar assunto ou aula..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition"
            />
          </div>
        </div>
      </div>

      {/* Grid Principal: Sidebar de Disciplinas + Lista de Aulas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sidebar: 13 Disciplinas */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2 mb-2 flex items-center justify-between">
            <span>Disciplinas ({DISCIPLINAS.length})</span>
            <span className="text-[11px] text-indigo-700 font-semibold">140 aulas total</span>
          </div>

          <div className="space-y-1.5 max-h-[750px] overflow-y-auto pr-1">
            {DISCIPLINAS.map((d) => {
              const ativa = d.id === disciplinaAtivaId;
              const concluidasMateria = d.aulas.filter(a => aulasConcluidas[a.caminhoRelativo]).length;
              const pctMateria = Math.round((concluidasMateria / d.totalAulas) * 100);

              return (
                <button
                  key={d.id}
                  onClick={() => setDisciplinaAtivaId(d.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    ativa
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      ativa 
                        ? 'bg-indigo-700 border-indigo-500 text-white' 
                        : d.criticidade === 'Decisiva' ? 'bg-rose-50 text-rose-800 border-rose-200' :
                          d.criticidade === 'Novo Corte' ? 'bg-purple-50 text-purple-800 border-purple-200' :
                          d.criticidade === 'Vital' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                          'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {d.criticidade}
                    </span>
                    <span className={`text-xs font-medium ${ativa ? 'text-indigo-100' : 'text-slate-500'}`}>
                      {concluidasMateria}/{d.totalAulas} ({pctMateria}%)
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold mt-2 line-clamp-2">
                    {d.nome.replace(/_/g, ' ')}
                  </h4>

                  <div className={`w-full h-1.5 rounded-full mt-2.5 overflow-hidden ${ativa ? 'bg-indigo-700' : 'bg-slate-100'}`}>
                    <div 
                      className={`h-full rounded-full transition-all ${ativa ? 'bg-white' : 'bg-emerald-500'}`}
                      style={{ width: `${pctMateria}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Área Central: Aulas da Disciplina Selecionada */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Barra de Filtros por tipo de material */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center space-x-1.5">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-600 uppercase">Filtrar PDFs:</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'simplificada', label: '⚡ Simplificada' },
                { id: 'aprovados', label: '🎯 Aprovados' },
                { id: 'mapas', label: '🗺️ Mapas/Resumos' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFiltroTipo(f.id)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition cursor-pointer ${
                    filtroTipo === f.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cabeçalho da Disciplina Ativa */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="text-lg font-bold text-slate-900">
                {disciplinaAtiva.nome.replace(/_/g, ' ')}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-800 font-bold border border-indigo-200">
                  {disciplinaAtiva.totalAulas} Aulas Mapeadas
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                  Impacto P3: {disciplinaAtiva.impactoP3}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Caminho: <code className="text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">{disciplinaAtiva.caminhoRelativo}</code>
            </p>
          </div>

          {/* Lista de Aulas */}
          <div className="space-y-3">
            {aulasFiltradas.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500">
                Nenhuma aula encontrada para os filtros selecionados.
              </div>
            ) : (
              aulasFiltradas.map((aula: AulaItem) => {
                const concluida = !!aulasConcluidas[aula.caminhoRelativo];

                const arquivosOrdenados = [...aula.arquivos].sort((a, b) => {
                  const prioridade: any = { simplificada: 1, aprovados: 2, mapa: 3, resumo: 4, slides: 5, original: 6, texto: 7 };
                  return (prioridade[a.tipo] || 99) - (prioridade[b.tipo] || 99);
                });

                return (
                  <div
                    key={aula.caminhoRelativo}
                    className={`p-4 rounded-xl border transition-all ${
                      concluida
                        ? 'bg-slate-50 border-slate-200 opacity-75'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      
                      <button
                        onClick={() => onToggleAula(aula.caminhoRelativo)}
                        className="mt-1 text-slate-400 hover:text-emerald-600 transition shrink-0 cursor-pointer"
                      >
                        {concluida ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm font-bold ${concluida ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                            {aula.aula.replace(/_/g, ' ')}
                          </h3>
                        </div>

                        {aula.assuntos && (
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <strong className="text-slate-800">Assuntos:</strong> {aula.assuntos}
                          </p>
                        )}

                        {/* Botões dos PDFs da Aula */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {arquivosOrdenados.map((arq, idx) => {
                            const badge = getBadgeArquivo(arq.tipo);
                            return (
                              <button
                                key={idx}
                                onClick={() => abrirPdfUniversal(arq.caminho)}
                                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${badge.bg}`}
                              >
                                <span>{badge.label}</span>
                                <ExternalLink className="w-3 h-3 opacity-60" />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
