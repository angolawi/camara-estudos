import React from 'react';
import { 
  Compass, 
  BookOpen, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Quote, 
  CheckCircle,
  AlertOctagon
} from 'lucide-react';
import { AUTORES_LINGUISTICA, REGRAS_OURO_CEBRASPE, PIPELINE_RETEXTUALIZACAO } from '../data/planoTaticoData';

export const GuiaCoach: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Cabeçalho */}
      <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700 shadow-lg">
        <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
          <Compass className="w-4 h-4" />
          <span>Diretrizes Estratégicas do Mentor & Coach Legislativo</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Tática Cebraspe, Autores de Linguística e Retextualização
        </h1>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
          Tudo o que você precisa dominar conceitualmente para a prova objetiva e para a discursiva de Analista Legislativo — Especialidade Registro e Redação (Cargo 11).
        </p>
      </div>

      {/* Regras de Ouro Cebraspe */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Regras de Ouro para a Prova do Cebraspe</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REGRAS_OURO_CEBRASPE.map((regra, idx) => (
            <div key={idx} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-indigo-400 uppercase tracking-wider">
                  Regra #{idx + 1}
                </span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">
                  {regra.titulo}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {regra.descricao}
                </p>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                <strong className="text-emerald-400 block mb-0.5">Exemplo Prático:</strong>
                {regra.exemploPratico}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline de Retextualização Parlamentar */}
      <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700 space-y-4">
        <div>
          <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Workflow className="w-4 h-4" />
            <span>O Fio Condutor do Cargo 11</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Pipeline de Retextualização Parlamentar (Áudio ao Texto Legislativo)
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">
            A prova de Registro e Redação gira inteiramente em torno das etapas de transformação do discurso falado dos deputados para os anais da Câmara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {PIPELINE_RETEXTUALIZACAO.map((etapa, idx) => (
            <div key={idx} className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 relative flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 mb-2 inline-block">
                  Etapa 0{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-white mb-1.5">{etapa.passo}</h4>
                <p className="text-[11px] text-slate-400 leading-snug">{etapa.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Matriz dos 4 Autores Mais Prováveis no Cebraspe */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-sky-400" />
            <span>Matriz de Linguística: Os 4 Autores Favoritos da Banca</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            O examinador tem perfil estrito nessas referências para a prova teórica e para os tópicos da discursiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AUTORES_LINGUISTICA.map((autor, idx) => (
            <div key={idx} className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">{autor.nome}</h3>
                  <span className="text-xs text-indigo-400 font-medium">{autor.corrente}</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                  {autor.obraBase}
                </span>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-300 block mb-1">Foco Cebraspe:</strong>
                {autor.focoCebraspe}
              </div>

              <div className="flex items-start space-x-2 text-[11px] text-slate-400 italic pt-1">
                <Quote className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>"{autor.citacaoChave}"</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
