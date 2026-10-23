export interface LinkPdfBloco {
  titulo: string;
  tipo: 'simplificada' | 'slides' | 'mapa' | 'original' | 'bizu';
  caminhoArquivo: string;
}

export interface BlocoCiclo {
  id: string; // 'B1' a 'B15'
  numero: number;
  disciplina: string;
  eixo: string;
  duracaoHoras: number;
  duracaoFormatada: string;
  materialPrioritario: string;
  nivelPareto: 1 | 2 | 3 | 4;
  corTag: string;
  pastaMapeada?: string;
  aulaMapeadaNome?: string;
  dicasCoach?: string;
  pdfsSugeridos: LinkPdfBloco[];
}

export interface NivelParetoInfo {
  nivel: 1 | 2 | 3 | 4;
  titulo: string;
  percentualTempo: string;
  horasSemana: string;
  descricao: string;
  corBorda: string;
  corBg: string;
  disciplinas: string[];
}

export const NIVEIS_PARETO: NivelParetoInfo[] = [
  {
    nivel: 1,
    titulo: 'IMPACTO MÁXIMO / CRÍTICO',
    percentualTempo: '45% do tempo',
    horasSemana: '9h / semana',
    descricao: 'Define a nota final e o corte da posse. Foco em IA/Degravação, Peça Técnica de 50L e RICD.',
    corBorda: 'border-rose-500',
    corBg: 'bg-rose-500/10 text-rose-300',
    disciplinas: [
      'Reconhecimento de Fala, Transcrição e IA (P2 + Tema de Discursiva)',
      'Discursiva P3: Peça Técnica de 50L e Questões de 20L',
      'Regimento Interno (RICD) e Processo Legislativo'
    ]
  },
  {
    nivel: 2,
    titulo: 'GARGALOS E COMPENSAÇÃO',
    percentualTempo: '30% do tempo',
    horasSemana: '6h / semana',
    descricao: 'Superação de fragilidades declaradas para evitar eliminação e somar pontos preciosos na P1 e P2.',
    corBorda: 'border-amber-500',
    corBg: 'bg-amber-500/10 text-amber-300',
    disciplinas: [
      'Ciência Política (Conhecimento Específico - P2)',
      'Tecnologia da Informação, Dados e Governança (P1)',
      'Língua Inglesa Instrumental e Conectores (P1)'
    ]
  },
  {
    nivel: 3,
    titulo: 'SUSTENTAÇÃO JURÍDICA',
    percentualTempo: '15% do tempo',
    horasSemana: '3h / semana',
    descricao: 'Base sólida de pontos garantidos sem necessidade de ler manuais de 100 páginas (usar PDF Simplificado).',
    corBorda: 'border-emerald-500',
    corBg: 'bg-emerald-500/10 text-emerald-300',
    disciplinas: [
      'Direito Constitucional (foco em Poder Legislativo CF/88, arts. 44 a 69)',
      'Direito Administrativo (Atos, Agentes Lei 8.112, Licitações 14.133, LAI e LGPD)'
    ]
  },
  {
    nivel: 4,
    titulo: 'VANTAGEM NATURAL / ESTUDO REVERSO',
    percentualTempo: '10% do tempo',
    horasSemana: '2h / semana',
    descricao: 'Área de domínio prévio da formação em Letras. Estudo exclusivamente reverso via questões e bizus.',
    corBorda: 'border-sky-500',
    corBg: 'bg-sky-500/10 text-sky-300',
    disciplinas: [
      'Linguística Teórica e Aplicada (Retextualização, Enunciação, LC 95/98)',
      'Língua Portuguesa (100% via Questões Cebraspe e Bizu Estratégico)'
    ]
  }
];

export const BLOCOS_CICLO: BlocoCiclo[] = [
  {
    id: 'B1',
    numero: 1,
    disciplina: 'IA, Reconhecimento de Fala e ASR',
    eixo: 'Inteligência Artificial & Degravação',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'Edital verticalizado + PDF Simplificado de TI/Dados',
    nivelPareto: 1,
    corTag: 'rose',
    pastaMapeada: 'Câmara_dos_Deputados_Informática_e_Dados',
    aulaMapeadaNome: 'Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)',
    dicasCoach: 'Foque nos conceitos de ASR, modelos acústicos/linguagem, Whisper e métricas WER/CER.',
    pdfsSugeridos: [
      {
        titulo: '⚡ PDF Simplificado (TI e Dados - Aula 00)',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf'
      },
      {
        titulo: '🎯 Bizu de Informática e Dados',
        tipo: 'bizu',
        caminhoArquivo: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf'
      }
    ]
  },
  {
    id: 'B2',
    numero: 2,
    disciplina: 'Regimento Interno da CD (RICD)',
    eixo: 'Regimento Interno & Órgãos',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'RICD / RCCN (PDF Simplificado + Slides)',
    nivelPareto: 1,
    corTag: 'rose',
    pastaMapeada: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
    aulaMapeadaNome: 'Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)',
    dicasCoach: 'Mesa Diretora, Líderes, Colégio de Líderes e Comissões. Priorize os slides e versão simplificada.',
    pdfsSugeridos: [
      {
        titulo: '📽️ Slides: RICD Aula 00 (Mesa e Órgãos)',
        tipo: 'slides',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)_Livro_Eletronico_Baixar_Slides.pdf'
      },
      {
        titulo: '📖 RICD Aula 00: Texto Original',
        tipo: 'original',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)_Livro_Eletronico_versão_original.pdf'
      }
    ]
  },
  {
    id: 'B3',
    numero: 3,
    disciplina: 'Ciência Política',
    eixo: 'Teoria do Estado & Poderes',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'Teoria dos Poderes, Sistemas e Partidos (Bizu + Questões)',
    nivelPareto: 2,
    corTag: 'amber',
    pastaMapeada: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
    aulaMapeadaNome: 'Aula_03',
    dicasCoach: 'Regimes, presidencialismo vs parlamentarismo, freios e contrapesos. Foco em acertar as questões padrão.',
    pdfsSugeridos: [
      {
        titulo: '🎯 Bizu Estratégico: Direito Constitucional & Poderes',
        tipo: 'bizu',
        caminhoArquivo: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf'
      }
    ]
  },
  {
    id: 'B4',
    numero: 4,
    disciplina: 'Língua Inglesa',
    eixo: 'Inglês Instrumental',
    duracaoHoras: 1.0,
    duracaoFormatada: '1h00',
    materialPrioritario: 'PDF Simplificado (Aulas 00 a 04) + Bizu de Inglês',
    nivelPareto: 2,
    corTag: 'amber',
    pastaMapeada: 'Câmara_dos_Deputados_Língua_Inglesa',
    aulaMapeadaNome: 'Aula_00',
    dicasCoach: 'Técnicas de skimming/scanning, cognatos e conectores lógicos de causa e oposição.',
    pdfsSugeridos: [
      {
        titulo: '⚡ PDF Simplificado: Inglês Aula 00',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Língua_Inglesa/Aula_00/Aula_00_Livro_Eletronico_versão_simplificada.pdf'
      },
      {
        titulo: '🎯 Bizu Estratégico: Língua Inglesa',
        tipo: 'bizu',
        caminhoArquivo: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf'
      }
    ]
  },
  {
    id: 'B5',
    numero: 5,
    disciplina: 'Discursiva / Peça Técnica (Laboratório)',
    eixo: 'Laboratório P3 - Redação Oficial',
    duracaoHoras: 2.0,
    duracaoFormatada: '2h00',
    materialPrioritario: 'Curso Patrícia Manzato (Aulas 01 a 03 - Redação e Revisão)',
    nivelPareto: 1,
    corTag: 'rose',
    pastaMapeada: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
    aulaMapeadaNome: 'Aula_03_Profª_Patrícia_Manzato',
    dicasCoach: 'Treino de adequação de fala parlamentar para texto formal. Eliminar oralidades sem desvirtuar o sentido.',
    pdfsSugeridos: [
      {
        titulo: '📖 Discursiva Aula 03: Revisão de Pronunciamento',
        tipo: 'original',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_03_Profª_Patrícia_Manzato/Aula_03_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf'
      },
      {
        titulo: '📽️ Slides: Coesão e Coerência (Aula 01)',
        tipo: 'slides',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_01_Profª_Patrícia_Manzato/Aula_01_Profª_Patrícia_Manzato_Livro_Eletronico_Baixar_Slides.pdf'
      }
    ]
  },
  {
    id: 'B6',
    numero: 6,
    disciplina: 'IA Aplicada e Degravação Assistida',
    eixo: 'Diarização & Human-in-the-Loop',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'Artigos técnicos / Edital (Whisper, Diarização, Human in the Loop)',
    nivelPareto: 1,
    corTag: 'rose',
    pastaMapeada: 'Câmara_dos_Deputados_Informática_e_Dados',
    aulaMapeadaNome: 'Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)',
    dicasCoach: 'Entenda os gargalos da diarização em plenário com oradores sobrepostos e sotaques regionais.',
    pdfsSugeridos: [
      {
        titulo: '⚡ PDF Simplificado: IA e Reconhecimento de Fala (Aula 01)',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf'
      },
      {
        titulo: '🎯 Marcação dos Aprovados: TI e Dados Aula 01',
        tipo: 'original',
        caminhoArquivo: 'Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf'
      }
    ]
  },
  {
    id: 'B7',
    numero: 7,
    disciplina: 'Processo Legislativo & RCCN',
    eixo: 'Proposições e Tramitação',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'RICD/RCCN (Aulas 05 a 07 - Proposições e Tramitação)',
    nivelPareto: 1,
    corTag: 'rose',
    pastaMapeada: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
    aulaMapeadaNome: 'Aula_05_(PROPOSIÇÕES)',
    dicasCoach: 'Regimes de tramitação (Ordinária, Prioridade, Urgência), discussão e votação.',
    pdfsSugeridos: [
      {
        titulo: '📽️ Slides: RICD Aula 05 (Proposições)',
        tipo: 'slides',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_05_(PROPOSIÇÕES)/Aula_05_(PROPOSIÇÕES)_Livro_Eletronico_Baixar_Slides.pdf'
      },
      {
        titulo: '📽️ Slides: RICD Aula 06 (Tramitação)',
        tipo: 'slides',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)_Livro_Eletronico_Baixar_Slides.pdf'
      }
    ]
  },
  {
    id: 'B8',
    numero: 8,
    disciplina: 'Direito Constitucional (Poder Legislativo)',
    eixo: 'CF/88 arts. 44 a 69',
    duracaoHoras: 1.0,
    duracaoFormatada: '1h00',
    materialPrioritario: 'PDF Simplificado João Trindade / Regular (Aulas 10 e 11)',
    nivelPareto: 3,
    corTag: 'emerald',
    pastaMapeada: 'Câmara_dos_Deputados_Direito_Constitucional',
    aulaMapeadaNome: 'Aula_10',
    dicasCoach: 'Estatuto dos congressistas, imunidades, CPIs e processo legislativo constitucional.',
    pdfsSugeridos: [
      {
        titulo: '⚡ PDF Simplificado: DC Aula 10 (Poder Legislativo)',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Aula_10_Livro_Eletronico_versão_simplificada.pdf'
      },
      {
        titulo: '🗺️ Mapa Mental: DC Aula 10',
        tipo: 'mapa',
        caminhoArquivo: 'Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Aula_10_Livro_Eletronico_Baixar_Mapa_Mental.pdf'
      }
    ]
  },
  {
    id: 'B9',
    numero: 9,
    disciplina: 'Informática e Governança de Dados',
    eixo: 'Segurança, LGPD e Dados',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'PDF Simplificado (Aulas 03, 04, 12 e 13)',
    nivelPareto: 2,
    corTag: 'amber',
    pastaMapeada: 'Câmara_dos_Deputados_Informática_e_Dados',
    aulaMapeadaNome: 'Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)',
    dicasCoach: 'Segurança da informação, ameaças e governança de dados públicos.',
    pdfsSugeridos: [
      {
        titulo: '⚡ PDF Simplificado: Segurança da Informação (Aula 03)',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf'
      },
      {
        titulo: '⚡ PDF Simplificado: Ciência de Dados (Aula 12)',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Informática_e_Dados/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_simplificada.pdf'
      }
    ]
  },
  {
    id: 'B10',
    numero: 10,
    disciplina: 'Linguística Aplicada & Técnica Legislativa',
    eixo: 'Enunciação, Marcuschi e LC 95',
    duracaoHoras: 1.0,
    duracaoFormatada: '1h00',
    materialPrioritario: 'Fundamentos Linguística (Aulas 01 a 03) + LC 95/1998',
    nivelPareto: 4,
    corTag: 'sky',
    pastaMapeada: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)',
    aulaMapeadaNome: 'Aula_02',
    dicasCoach: 'Revisão relâmpago de Benveniste e Marcuschi; estrutura formal das leis pela LC 95/98.',
    pdfsSugeridos: [
      {
        titulo: '📖 Linguística Aula 02: Teoria da Enunciação',
        tipo: 'original',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf'
      },
      {
        titulo: '📖 Linguística Aula 03: Polifonia e Gêneros',
        tipo: 'original',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf'
      }
    ]
  },
  {
    id: 'B11',
    numero: 11,
    disciplina: 'Ciência Política',
    eixo: 'Sistemas Eleitorais & Partidos',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'Sistemas Eleitorais, Formação do Estado Brasileiro',
    nivelPareto: 2,
    corTag: 'amber',
    pastaMapeada: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
    aulaMapeadaNome: 'Aula_03',
    dicasCoach: 'Presidencialismo de coalizão no Brasil, quociente eleitoral e partidário.',
    pdfsSugeridos: [
      {
        titulo: '🎯 Bizu Estratégico: Sistemas Eleitorais e Partidos',
        tipo: 'bizu',
        caminhoArquivo: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf'
      }
    ]
  },
  {
    id: 'B12',
    numero: 12,
    disciplina: 'Direito Administrativo',
    eixo: 'Atos, Servidores (8.112) e Licitações (14.133)',
    duracaoHoras: 1.0,
    duracaoFormatada: '1h00',
    materialPrioritario: 'PDF Simplificado (Atos, Servidores Lei 8.112, Licitações)',
    nivelPareto: 3,
    corTag: 'emerald',
    pastaMapeada: 'Câmara_dos_Deputados_Direito_Administrativo',
    aulaMapeadaNome: 'Aula_00',
    dicasCoach: 'Conceitos objetivos de atos, regime disciplinar da 8.112 e noções essenciais da 14.133.',
    pdfsSugeridos: [
      {
        titulo: '⚡ PDF Simplificado: DA Aula 00 (Princípios)',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Direito_Administrativo/Aula_00/Aula_00_Livro_Eletronico_versão_simplificada.pdf'
      },
      {
        titulo: '⚡ PDF Simplificado: DA Aula 13 (Lei 8.112 Servidores)',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Aula_13_Livro_Eletronico_versão_simplificada.pdf'
      }
    ]
  },
  {
    id: 'B13',
    numero: 13,
    disciplina: 'Língua Portuguesa (Estudo Reverso)',
    eixo: 'Bateria Cebraspe C/E',
    duracaoHoras: 1.0,
    duracaoFormatada: '1h00',
    materialPrioritario: 'Bizu de Português + Bateria Cebraspe (sem ler teoria básica)',
    nivelPareto: 4,
    corTag: 'sky',
    pastaMapeada: 'Câmara_dos_Deputados_Língua_Portuguesa',
    aulaMapeadaNome: 'Aula_01',
    dicasCoach: 'Apenas questões comentadas de concordância, regência, crase e pontuação. Zero perda de tempo com manuais longos.',
    pdfsSugeridos: [
      {
        titulo: '🎯 Bizu Estratégico de Língua Portuguesa',
        tipo: 'bizu',
        caminhoArquivo: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf'
      },
      {
        titulo: '⚡ PDF Simplificado: Português Aula 01',
        tipo: 'simplificada',
        caminhoArquivo: 'Câmara_dos_Deputados_Língua_Portuguesa/Aula_01/Aula_01_Livro_Eletronico_versão_simplificada.pdf'
      }
    ]
  },
  {
    id: 'B14',
    numero: 14,
    disciplina: 'Discursiva (Redação de Questão 20 linhas)',
    eixo: 'Questão Específica P3',
    duracaoHoras: 1.0,
    duracaoFormatada: '1h00',
    materialPrioritario: 'Patrícia Manzato (Aulas 06 a 08 - Análise de Textos)',
    nivelPareto: 1,
    corTag: 'rose',
    pastaMapeada: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
    aulaMapeadaNome: 'Aula_02_Profª_Patrícia_Manzato',
    dicasCoach: 'Redação direta de 1 questão técnica em até 20 linhas cronometrando o tempo.',
    pdfsSugeridos: [
      {
        titulo: '📖 Discursiva Aula 02: Planejamento Questão 20L',
        tipo: 'original',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_02_Profª_Patrícia_Manzato/Aula_02_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf'
      },
      {
        titulo: '📖 Discursiva Aula 06: Análise de Textos',
        tipo: 'original',
        caminhoArquivo: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)/Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf'
      }
    ]
  },
  {
    id: 'B15',
    numero: 15,
    disciplina: 'Revisão Geral da Semana + Questões de Erro',
    eixo: 'Caderno de Erros & Mapas',
    duracaoHoras: 1.5,
    duracaoFormatada: '1h30',
    materialPrioritario: 'Mapas Mentais da semana + Caderno de Erros Cebraspe',
    nivelPareto: 1,
    corTag: 'indigo',
    pastaMapeada: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
    dicasCoach: 'Revise todas as anotações do caderno de erros e feche o ciclo para contabilizar mais 1 volta!',
    pdfsSugeridos: [
      {
        titulo: '🎯 Bizu Estratégico: Orientações Gerais',
        tipo: 'bizu',
        caminhoArquivo: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_00/Aula_00_Livro_Eletronico_versão_original.pdf'
      }
    ]
  }
];
