import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Plus, 
  Trash2, 
  Search, 
  Calculator, 
  ShieldAlert, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { ItemCadernoErro } from '../hooks/useEstudoProgress';

interface CadernoErrosProps {
  erros: ItemCadernoErro[];
  onAdicionarErro: (erro: Omit<ItemCadernoErro, 'id' | 'data'>) => void;
  onRemoverErro: (id: string) => void;
}

export const CadernoErros: React.FC<CadernoErrosProps> = ({
  erros,
  onAdicionarErro,
  onRemoverErro,
}) => {
  const [busca, setBusca] = useState('');
  const [disciplinaFiltro, setDisciplinaFiltro] = useState('todas');

  // Formulário de novo erro
  const [modalAberto, setModalAberto] = useState(false);
  const [novaDisciplina, setNovaDisciplina] = useState('Regimento Interno (RICD)');
  const [novoAssunto, setNovoAssunto] = useState('');
  const [novaPegadinha, setNovaPegadinha] = useState('');
  const [novaRegraCerta, setNovaRegraCerta] = useState('');
  const [novaTag, setNovaTag] = useState('Pegadinha Clássica');

  // Calculadora Cebraspe
  const [itensCertos, setItensCertos] = useState(75);
  const [itensErrados, setItensErrados] = useState(12);
  const [itensEmBranco, setItensEmBranco] = useState(13); // Total 100 itens
  const notaLiquida = Math.max(0, itensCertos - itensErrados);
  const percentualBranco = Math.round((itensEmBranco / (itensCertos + itensErrados + itensEmBranco || 1)) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoAssunto || !novaPegadinha || !novaRegraCerta) {
      alert('Preencha os campos obrigatórios.');
      return;
    }
    onAdicionarErro({
      disciplina: novaDisciplina,
      assunto: novoAssunto,
      pegadinhaBanca: novaPegadinha,
      regraCerta: novaRegraCerta,
      tag: novaTag,
    });
    setNovoAssunto('');
    setNovaPegadinha('');
    setNovaRegraCerta('');
    setModalAberto(false);
  };

  const errosFiltrados = erros.filter((e) => {
    const matchBusca = 
      e.assunto.toLowerCase().includes(busca.toLowerCase()) ||
      e.pegadinhaBanca.toLowerCase().includes(busca.toLowerCase()) ||
      e.regraCerta.toLowerCase().includes(busca.toLowerCase());
    const matchDisc = disciplinaFiltro === 'todas' || e.disciplina === disciplinaFiltro;
    return matchBusca && matchDisc;
  });

  const disciplinasUnicas = Array.from(new Set(erros.map(e => e.disciplina)));

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Cabeçalho */}
      <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span>Fixação de Pegadinhas e Regras da Banca</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Caderno de Erros Ativo & Gestão de Risco
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Conforme o protocolo do coach (Etapa 3 diária): registre exclusivamente a "pegadinha" da banca em uma frase objetiva para revisar semanalmente e nunca mais errar o mesmo item.
            </p>
          </div>

          <button
            onClick={() => setModalAberto(true)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold shadow-md shadow-amber-600/30 transition shrink-0"
          >
            <Plus className="w-5 h-5" />
            <span>Registrar Novo Erro</span>
          </button>
        </div>
      </div>

      {/* Grid: Calculadora Cebraspe de Risco + Filtros do Caderno */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Calculadora Cebraspe de Gestão de Risco */}
        <div className="lg:col-span-4 bg-slate-800/60 rounded-2xl p-5 border border-slate-700">
          <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Simulador Certo / Errado</span>
          </div>
          <h3 className="text-base font-bold text-white mb-1">
            Fator Cebraspe (1 Errada anula 1 Certa)
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Simule o impacto de deixar questões em branco vs. chutar no escuro.
          </p>

          <div className="space-y-3 text-xs">
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Itens Certos (+1)</label>
              <input
                type="number"
                value={itensCertos}
                onChange={(e) => setItensCertos(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 font-mono"
              />
            </div>

            <div>
              <label className="text-rose-300 font-semibold block mb-1">Itens Errados (-1)</label>
              <input
                type="number"
                value={itensErrados}
                onChange={(e) => setItensErrados(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 font-mono"
              />
            </div>

            <div>
              <label className="text-amber-300 font-semibold block mb-1">Itens em Branco (0 pts)</label>
              <input
                type="number"
                value={itensEmBranco}
                onChange={(e) => setItensEmBranco(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 font-mono"
              />
            </div>
          </div>

          <div className="mt-4 p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Nota Líquida Estimada</span>
            <div className="text-3xl font-black text-emerald-400 font-mono my-1">
              {notaLiquida} <span className="text-sm font-normal text-slate-400">pts</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Taxa de omissão: <strong className={percentualBranco >= 8 && percentualBranco <= 15 ? 'text-emerald-400' : 'text-amber-400'}>{percentualBranco}%</strong>
              <span className="block mt-0.5 text-[10px] text-slate-500">Faixa ideal orientada pelo coach: 8% a 12%</span>
            </div>
          </div>
        </div>

        {/* Lista do Caderno de Erros */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Barra de Filtros */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por assunto, pegadinha ou palavra..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <select
              value={disciplinaFiltro}
              onChange={(e) => setDisciplinaFiltro(e.target.value)}
              className="bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="todas">Todas as Disciplinas</option>
              {disciplinasUnicas.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Cards de Erros */}
          <div className="space-y-3">
            {errosFiltrados.length === 0 ? (
              <div className="p-8 text-center bg-slate-800/30 rounded-xl border border-slate-700/50 text-slate-400">
                Nenhum erro registrado com os filtros aplicados. Clique no botão acima para adicionar!
              </div>
            ) : (
              errosFiltrados.map((erro) => (
                <div
                  key={erro.id}
                  className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/80 hover:border-slate-600 transition space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-700 text-amber-300">
                        {erro.disciplina}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {erro.assunto}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-slate-500">{erro.data}</span>
                      <button
                        onClick={() => onRemoverErro(erro.id)}
                        className="text-slate-500 hover:text-rose-400 transition"
                        title="Remover erro"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Pegadinha da Banca */}
                  <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 text-xs text-rose-300">
                    <strong className="block text-rose-400 font-bold mb-0.5 flex items-center space-x-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Como o Cebraspe tentou enganar:</span>
                    </strong>
                    {erro.pegadinhaBanca}
                  </div>

                  {/* Regra Certa / Artigo */}
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-xs text-emerald-300">
                    <strong className="block text-emerald-400 font-bold mb-0.5 flex items-center space-x-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Regra Certa & Fundamento:</span>
                    </strong>
                    {erro.regraCerta}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>

      {/* Modal para Adicionar Novo Erro */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-lg w-full p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Registrar Novo Item no Caderno de Erros</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-semibold block mb-1">Disciplina</label>
                <select
                  value={novaDisciplina}
                  onChange={(e) => setNovaDisciplina(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100"
                >
                  <option value="IA e Reconhecimento de Fala">IA e Reconhecimento de Fala</option>
                  <option value="Regimento Interno (RICD)">Regimento Interno (RICD)</option>
                  <option value="Regimento Comum (RCCN)">Regimento Comum (RCCN)</option>
                  <option value="Ciência Política">Ciência Política</option>
                  <option value="Direito Constitucional">Direito Constitucional</option>
                  <option value="Direito Administrativo">Direito Administrativo</option>
                  <option value="Língua Inglesa">Língua Inglesa</option>
                  <option value="Língua Portuguesa">Língua Portuguesa</option>
                  <option value="Fundamentos da Linguística">Fundamentos da Linguística</option>
                  <option value="TI e Informática">TI e Informática</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">Assunto Específico</label>
                <input
                  type="text"
                  placeholder="Ex: Quórum de aprovação de PEC / Métricas WER"
                  value={novoAssunto}
                  onChange={(e) => setNovoAssunto(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100"
                  required
                />
              </div>

              <div>
                <label className="text-rose-300 font-semibold block mb-1">Pegadinha / O que você errou</label>
                <textarea
                  rows={3}
                  placeholder="Ex: A banca trocou maioria absoluta por maioria simples..."
                  value={novaPegadinha}
                  onChange={(e) => setNovaPegadinha(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100"
                  required
                />
              </div>

              <div>
                <label className="text-emerald-300 font-semibold block mb-1">Regra Correta em 1 frase (Frase Curta do Coach)</label>
                <textarea
                  rows={2}
                  placeholder="Ex: PEC exige 3/5 dos votos em 2 turnos de votação em cada Casa."
                  value={novaRegraCerta}
                  onChange={(e) => setNovaRegraCerta(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100"
                  required
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-700">
                <button
                  type="button"
                  onClick={() => setModalAberto(false)}
                  className="px-4 py-2 rounded-xl bg-slate-700 text-slate-300 hover:bg-slate-600 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold shadow-md shadow-amber-600/30"
                >
                  Salvar no Caderno
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
