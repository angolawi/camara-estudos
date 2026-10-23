import React from 'react';
import { 
  LayoutDashboard, 
  RotateCw, 
  CalendarRange, 
  BookOpen, 
  PenTool, 
  AlertTriangle, 
  Compass,
  Download,
  Upload
} from 'lucide-react';

export type AbaNavegacao = 
  | 'dashboard' 
  | 'ciclo' 
  | 'trilha' 
  | 'aulas' 
  | 'discursiva' 
  | 'erros' 
  | 'coach';

interface NavbarProps {
  abaAtiva: AbaNavegacao;
  setAbaAtiva: (aba: AbaNavegacao) => void;
  voltasCompletadas: number;
  totalAulasConcluidas: number;
  totalAulas: number;
  onExportar: () => void;
  onImportar: (json: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  abaAtiva,
  setAbaAtiva,
  voltasCompletadas,
  totalAulasConcluidas,
  totalAulas,
  onExportar,
  onImportar,
}) => {
  const percentualAulas = Math.round((totalAulasConcluidas / totalAulas) * 100);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) onImportar(text);
      };
      reader.readAsText(file);
    }
  };

  const navItems = [
    { id: 'dashboard' as AbaNavegacao, label: 'Início & Foco', icon: LayoutDashboard },
    { id: 'ciclo' as AbaNavegacao, label: 'Ciclo 20h (15 Blocos)', icon: RotateCw },
    { id: 'trilha' as AbaNavegacao, label: 'Trilha 1 Mês (4 Semanas)', icon: CalendarRange },
    { id: 'aulas' as AbaNavegacao, label: 'Materiais & Aulas (140)', icon: BookOpen },
    { id: 'discursiva' as AbaNavegacao, label: 'Laboratório P3 (3h)', icon: PenTool },
    { id: 'erros' as AbaNavegacao, label: 'Caderno de Erros', icon: AlertTriangle },
    { id: 'coach' as AbaNavegacao, label: 'Tática do Coach & Pareto', icon: Compass },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo e Título */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setAbaAtiva('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center shadow-md shadow-indigo-600/20 text-white font-black text-lg">
              CD
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">Câmara dos Deputados</span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                  Registro e Redação
                </span>
              </div>
              <p className="text-xs text-slate-500">Hub Tático de Estudos Cebraspe</p>
            </div>
          </div>

          {/* Indicadores rápidos de progresso */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center space-x-2">
              <RotateCw className="w-4 h-4 text-indigo-600 animate-spin-slow" />
              <div className="text-xs">
                <span className="text-slate-500">Voltas no Ciclo:</span>{' '}
                <span className="font-bold text-indigo-700">{voltasCompletadas} / 4</span>
              </div>
            </div>

            <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <div className="text-xs">
                <span className="text-slate-500">Aulas Concluídas:</span>{' '}
                <span className="font-bold text-emerald-700">{totalAulasConcluidas} ({percentualAulas}%)</span>
              </div>
            </div>

            {/* Backup / Exportar */}
            <div className="flex items-center space-x-1 border-l border-slate-200 pl-3">
              <button
                onClick={onExportar}
                title="Exportar backup dos seus dados"
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
              </button>
              <label
                title="Importar backup salvo"
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer transition"
              >
                <Upload className="w-4 h-4" />
                <input type="file" accept=".json" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
          </div>

        </div>

        {/* Barra de Navegação Horizontal com Abas */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none sm:space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const ativa = abaAtiva === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setAbaAtiva(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  ativa
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${ativa ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
