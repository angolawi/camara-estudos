import { useState, useEffect } from 'react';

export interface ItemCadernoErro {
  id: string;
  data: string;
  disciplina: string;
  assunto: string;
  pegadinhaBanca: string;
  regraCerta: string;
  tag?: string;
}

export interface RedacaoP3Salva {
  id: string;
  data: string;
  tipo: 'peca_50l' | 'questao_20l_1' | 'questao_20l_2';
  titulo: string;
  texto: string;
  linhas: number;
  tempoGastoSegundos: number;
}

export interface EstadoEstudos {
  // Aulas concluídas (caminhoRelativo como chave)
  aulasConcluidas: Record<string, boolean>;
  // Anotações por aula
  anotacoesAulas: Record<string, string>;
  // Blocos do ciclo semanal de 20h
  blocosConcluidosCiclo: Record<string, boolean>;
  voltasCicloCompletadas: number;
  blocoAtualIndex: number;
  // Sessões do planejamento de 1 mês
  sessoesMesConcluidas: Record<string, boolean>;
  // Caderno de Erros
  cadernoErros: ItemCadernoErro[];
  // Redações salvas no laboratório P3
  redacoesSalvas: RedacaoP3Salva[];
}

const STORAGE_KEY = 'camara_estudos_registro_redacao_v1';

const estadoInicial: EstadoEstudos = {
  aulasConcluidas: {},
  anotacoesAulas: {},
  blocosConcluidosCiclo: {},
  voltasCicloCompletadas: 0,
  blocoAtualIndex: 0,
  sessoesMesConcluidas: {},
  cadernoErros: [
    {
      id: 'exemplo_1',
      data: new Date().toISOString().split('T')[0],
      disciplina: 'Direito Administrativo',
      assunto: 'Administração Indireta',
      pegadinhaBanca: 'Cebraspe afirmou que a criação de subsidiária de sociedade de economia mista exige lei ordinária específica.',
      regraCerta: 'A alienação do controle acionário e criação de subsidiária exige apenas autorização legislativa genérica, dispensando lei específica (STF/Cebraspe).',
      tag: 'Pegadinha Clássica'
    },
    {
      id: 'exemplo_2',
      data: new Date().toISOString().split('T')[0],
      disciplina: 'RICD',
      assunto: 'Comissões Temporárias',
      pegadinhaBanca: 'Afirmou que CPI pode determinar indisponibilidade cautelar de bens de investigados.',
      regraCerta: 'CPI não tem reserva de jurisdição para indisponibilidade de bens ou busca e apreensão domiciliar (competência exclusiva do juiz).',
      tag: 'RICD / Jurisprudência'
    }
  ],
  redacoesSalvas: []
};

export function useEstudoProgress() {
  const [estado, setEstado] = useState<EstadoEstudos>(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      if (salvo) {
        return { ...estadoInicial, ...JSON.parse(salvo) };
      }
    } catch (e) {
      console.error('Erro ao ler estado do localStorage:', e);
    }
    return estadoInicial;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
    } catch (e) {
      console.error('Erro ao salvar estado:', e);
    }
  }, [estado]);

  // Ações de Aulas
  const toggleAulaConcluida = (caminhoAula: string) => {
    setEstado((prev) => ({
      ...prev,
      aulasConcluidas: {
        ...prev.aulasConcluidas,
        [caminhoAula]: !prev.aulasConcluidas[caminhoAula],
      },
    }));
  };

  const salvarAnotacaoAula = (caminhoAula: string, texto: string) => {
    setEstado((prev) => ({
      ...prev,
      anotacoesAulas: {
        ...prev.anotacoesAulas,
        [caminhoAula]: texto,
      },
    }));
  };

  // Ações do Ciclo de 20 Horas
  const toggleBlocoCiclo = (blocoId: string, proximoIndice: number) => {
    setEstado((prev) => {
      const novoStatus = !prev.blocosConcluidosCiclo[blocoId];
      const novosBlocos = {
        ...prev.blocosConcluidosCiclo,
        [blocoId]: novoStatus,
      };

      // Se todos os 15 blocos foram concluídos, incrementa volta completa e reseta blocos
      const totalConcluidos = Object.values(novosBlocos).filter(Boolean).length;
      if (totalConcluidos >= 15) {
        return {
          ...prev,
          blocosConcluidosCiclo: {},
          voltasCicloCompletadas: prev.voltasCicloCompletadas + 1,
          blocoAtualIndex: 0,
        };
      }

      return {
        ...prev,
        blocosConcluidosCiclo: novosBlocos,
        blocoAtualIndex: proximoIndice,
      };
    });
  };

  const resetarCicloManual = () => {
    setEstado((prev) => ({
      ...prev,
      blocosConcluidosCiclo: {},
      blocoAtualIndex: 0,
    }));
  };

  // Ações do Planejamento de 1 Mês
  const toggleSessaoMes = (sessaoId: string) => {
    setEstado((prev) => ({
      ...prev,
      sessoesMesConcluidas: {
        ...prev.sessoesMesConcluidas,
        [sessaoId]: !prev.sessoesMesConcluidas[sessaoId],
      },
    }));
  };

  // Ações do Caderno de Erros
  const adicionarErro = (novoErro: Omit<ItemCadernoErro, 'id' | 'data'>) => {
    const item: ItemCadernoErro = {
      ...novoErro,
      id: 'erro_' + Date.now(),
      data: new Date().toISOString().split('T')[0],
    };
    setEstado((prev) => ({
      ...prev,
      cadernoErros: [item, ...prev.cadernoErros],
    }));
  };

  const removerErro = (id: string) => {
    setEstado((prev) => ({
      ...prev,
      cadernoErros: prev.cadernoErros.filter((e) => e.id !== id),
    }));
  };

  // Ações de Discursiva P3
  const salvarRedacao = (redacao: Omit<RedacaoP3Salva, 'id' | 'data'>) => {
    const item: RedacaoP3Salva = {
      ...redacao,
      id: 'redacao_' + Date.now(),
      data: new Date().toLocaleString('pt-BR'),
    };
    setEstado((prev) => ({
      ...prev,
      redacoesSalvas: [item, ...prev.redacoesSalvas],
    }));
  };

  const removerRedacao = (id: string) => {
    setEstado((prev) => ({
      ...prev,
      redacoesSalvas: prev.redacoesSalvas.filter((r) => r.id !== id),
    }));
  };

  // Exportar / Importar Backup
  const exportarBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(estado, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `estudos_camara_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importarBackup = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      setEstado(parsed);
      return true;
    } catch (e) {
      console.error('Falha ao importar backup:', e);
      return false;
    }
  };

  return {
    estado,
    toggleAulaConcluida,
    salvarAnotacaoAula,
    toggleBlocoCiclo,
    resetarCicloManual,
    toggleSessaoMes,
    adicionarErro,
    removerErro,
    salvarRedacao,
    removerRedacao,
    exportarBackup,
    importarBackup,
  };
}
