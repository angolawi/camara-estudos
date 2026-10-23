export interface SessaoEstudo {
  id: string;
  disciplina: string;
  duracao: string;
  descricao: string;
  aulasSugeridas?: {
    disciplinaNome: string;
    aulaNome: string;
    tipoPdfRecomendado: string;
  }[];
  metodologiaCoach: string;
}

export interface SemanaPlanejamento {
  numero: number;
  titulo: string;
  metaHoras: number;
  objetivoFoco: string;
  sessoes: SessaoEstudo[];
}

export const PLANEJAMENTO_1_MES: SemanaPlanejamento[] = [
  {
    numero: 1,
    titulo: 'Semana 1: Domínio Estrutural e Quebra de Bloqueios Iniciais',
    metaHoras: 20,
    objetivoFoco: 'Alinhar a discursiva ao edital e compreender os conceitos fundamentais de IA, Dados e Processo Legislativo.',
    sessoes: [
      {
        id: 's1_ia_1',
        disciplina: 'IA, Transcrição e Dados',
        duracao: '1h30',
        descricao: 'Conceitos básicos de ASR (Automatic Speech Recognition), modelos acústicos e de linguagem, arquiteturas end-to-end e Whisper.',
        metodologiaCoach: 'Entender a lógica do ASR para as provas objetiva e discursiva. Foco nas métricas WER e vocabulário técnico.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_00',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's1_ia_2',
        disciplina: 'TI e Dados',
        duracao: '1h30',
        descricao: 'Conceitos de Segurança da Informação (ameaças, vírus, backup - Aulas 03 e 04 de Informática).',
        metodologiaCoach: 'Leitura rápida dos tópicos mais cobrados pelo Cebraspe em segurança.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_simplificada'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_04',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's1_ricd_1',
        disciplina: 'Regimento Interno e Processo Legislativo',
        duracao: '1h30',
        descricao: 'RICD — Disposições Preliminares, Mesa Diretora, Líderes e Colégio de Líderes (Aulas 00 e 01 de RICD).',
        metodologiaCoach: 'Decoreba cirúrgica da composição e competências da Mesa Diretora.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)',
            tipoPdfRecomendado: 'Baixar_Slides'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)',
            tipoPdfRecomendado: 'Baixar_Slides'
          }
        ]
      },
      {
        id: 's1_dc_1',
        disciplina: 'Direito Constitucional',
        duracao: '1h30',
        descricao: 'Poder Legislativo na CF/88 — arts. 44 a 58 (Aula 10 de Direito Constitucional).',
        metodologiaCoach: 'Foco estrito em atribuições do Congresso Nacional, Câmara e Senado.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Constitucional',
            aulaNome: 'Aula_10',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's1_cp_1',
        disciplina: 'Ciência Política',
        duracao: '1h30',
        descricao: 'Regimes políticos (democracia, autoritarismo, totalitarismo) e Sistemas/Formas de governo (presidencialismo, parlamentarismo).',
        metodologiaCoach: 'Distinguir forma de Estado, forma de governo e sistema de governo conforme o Cebraspe cobra.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's1_cp_2',
        disciplina: 'Ciência Política',
        duracao: '1h30',
        descricao: 'Separação de Poderes e Teoria do Freios e Contrapesos (checks and balances).',
        metodologiaCoach: 'Mapear a intersecção entre Executivo e Legislativo na formulação de políticas públicas.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's1_disc_1',
        disciplina: 'Discursiva / Peça Técnica',
        duracao: '2h00',
        descricao: 'Aulas 00 e 01 de Discursiva (Profª Patrícia Manzato) — Critérios Cebraspe, estrutura formal, coesão e coerência voltadas para redação parlamentar.',
        metodologiaCoach: 'Compreender como a banca desconta pontos em aspectos macro e microestruturais.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_00_Profª_Patrícia_Manzato_(Somente_em_PDF)',
            tipoPdfRecomendado: 'versão_original'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_01_Profª_Patrícia_Manzato',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's1_disc_2',
        disciplina: 'Discursiva / Questão 20L',
        duracao: '1h00',
        descricao: 'Aula 02 de Discursiva — Planejamento de resposta em até 20 linhas.',
        metodologiaCoach: 'Vá direto ao ponto! Dispense introduções floreadas. Cada tópico do comando é um parágrafo.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_02_Profª_Patrícia_Manzato',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's1_ing_1',
        disciplina: 'Inglês Instrumental',
        duracao: '1h00',
        descricao: 'Aula 00 de Língua Inglesa: Cognatos, estrutura sintática essencial e leitura com técnicas de skimming e scanning.',
        metodologiaCoach: 'Não traduza palavra por palavra; foque nos conectivos lógicos e ideia central do parágrafo.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Inglesa',
            aulaNome: 'Aula_00',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's1_da_1',
        disciplina: 'Direito Administrativo',
        duracao: '1h00',
        descricao: 'Princípios e Atos Administrativos (Aulas 00 e 06 Simplificadas).',
        metodologiaCoach: 'Atributos do ato administrativo (PATI: Presunção, Autoexecutoriedade, Tipicidade, Imperatividade).',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_00',
            tipoPdfRecomendado: 'versão_simplificada'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_06',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's1_dc_2',
        disciplina: 'Direito Constitucional',
        duracao: '1h00',
        descricao: 'Processo Legislativo Constitucional: arts. 59 a 69 da CF/88 (Aula 11 de DC).',
        metodologiaCoach: 'Fases da elaboração de leis ordinárias, complementares e PECs.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Constitucional',
            aulaNome: 'Aula_11',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's1_ling_1',
        disciplina: 'Fundamentos da Linguística',
        duracao: '1h00',
        descricao: 'Fundamentos da Linguística — Aula 01 (Signo linguístico, arbitrariedade, linearidade, Saussure).',
        metodologiaCoach: 'Saussure é autor preferido da banca em Registro e Redação.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)',
            aulaNome: 'Aula_01',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's1_port_1',
        disciplina: 'Língua Portuguesa',
        duracao: '1h30',
        descricao: 'Bateria Cebraspe de 40 questões de Português (Concordância, Regência e Crase - direto nas questões do Bizu).',
        metodologiaCoach: 'Estudo reverso! Não leia manuais de gramática que você já domina da graduação.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_02',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's1_rev_1',
        disciplina: 'Fechamento da Semana 1',
        duracao: '1h30',
        descricao: 'Revisão dos Mapas Mentais das matérias estudadas + revisão de questões erradas no Caderno de Erros.',
        metodologiaCoach: 'Consolidar o aprendizado da primeira semana e garantir que os erros não se repitam.',
        aulasSugeridas: []
      }
    ]
  },
  {
    numero: 2,
    titulo: 'Semana 2: O Núcleo do Cargo (Diarização, Pronunciamento e Comissões)',
    metaHoras: 20,
    objetivoFoco: 'Operacionalização da transcrição parlamentar e na peça técnica de Revisão de Pronunciamento.',
    sessoes: [
      {
        id: 's2_ia_1',
        disciplina: 'IA e Reconhecimento de Fala',
        duracao: '1h30',
        descricao: 'Diarização de falantes (separação de oradores), pontuação e capitalização automática, desafios com sotaques regionais.',
        metodologiaCoach: 'Assunto quente para a P2 e fortíssimo candidato à questão discursiva.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_01',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's2_ia_2',
        disciplina: 'Degravação e Pós-processamento',
        duracao: '1h30',
        descricao: 'Diferença entre transcrição automática, degravação bruta e revisão humana (Human in the Loop). Métricas WER e CER.',
        metodologiaCoach: 'Saiba definir exatamente como o trabalho do Analista de Registro e Redação se acopla à saída do modelo de IA.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_02',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's2_ricd_1',
        disciplina: 'Regimento Interno da CD',
        duracao: '1h30',
        descricao: 'RICD — Comissões Permanentes e Temporárias (Aulas 02 e 03 de RICD).',
        metodologiaCoach: 'Competências das comissões temáticas e regras para constituição de CPIs.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_02_(COMISSÕES_PARTE_1)',
            tipoPdfRecomendado: 'Baixar_Slides'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_03_(COMISSÕES_PARTE_2)',
            tipoPdfRecomendado: 'Baixar_Slides'
          }
        ]
      },
      {
        id: 's2_ricd_2',
        disciplina: 'Regimento Interno da CD',
        duracao: '1h30',
        descricao: 'RICD — Sessões da Câmara (Ordinárias, Extraordinárias, Solenes, Prazos e Quórum - Aula 04).',
        metodologiaCoach: 'Prazos regimentais e composição dos períodos da sessão plenária.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_04_(SESSÕES)',
            tipoPdfRecomendado: 'Baixar_Slides'
          }
        ]
      },
      {
        id: 's2_cp_1',
        disciplina: 'Ciência Política',
        duracao: '1h30',
        descricao: 'Sistemas Eleitorais (Majoritário, Proporcional de lista aberta e cálculo do quociente eleitoral e partidário).',
        metodologiaCoach: 'Fórmula de cálculo das sobras eleitorais e cláusula de barreira.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's2_cp_2',
        disciplina: 'Ciência Política',
        duracao: '1h30',
        descricao: 'Teoria dos Partidos Políticos (funções, tipologia e sistemas partidários - fragmentação no Brasil).',
        metodologiaCoach: 'Mapear Maurice Duverger e Giovanni Sartori na tipologia partidária.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's2_disc_1',
        disciplina: 'Discursiva / Peça Técnica',
        duracao: '2h00',
        descricao: 'Aula 03 de Discursiva (Profª Patrícia Manzato) — Revisão de Pronunciamento Parlamentar (Teoria e Prática).',
        metodologiaCoach: 'Esta é a essência do cargo! Treine a eliminação de hesitações mantendo a voz do orador.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_03_Profª_Patrícia_Manzato',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's2_disc_2',
        disciplina: 'Discursiva / Questão 20L',
        duracao: '1h00',
        descricao: 'Elaboração manual de 1 texto de 20 linhas sobre Diarização de Falantes e Desafios em Sessões Plenárias.',
        metodologiaCoach: 'Treinar no Laboratório P3 com o cronômetro ativado.',
        aulasSugeridas: []
      },
      {
        id: 's2_ing_1',
        disciplina: 'Inglês Instrumental',
        duracao: '1h00',
        descricao: 'Aulas 01 e 04 de Língua Inglesa: Conectores adversativos, concessivos e causais + tempos verbais em relatórios oficiais.',
        metodologiaCoach: 'Tabela de conectores: however, although, despite, whereas, furthermore.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Inglesa',
            aulaNome: 'Aula_01',
            tipoPdfRecomendado: 'versão_simplificada'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Inglesa',
            aulaNome: 'Aula_04',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's2_da_1',
        disciplina: 'Direito Administrativo',
        duracao: '1h00',
        descricao: 'Agentes Públicos e Lei 8.112/1990 (Aulas 12 e 13 Simplificadas).',
        metodologiaCoach: 'Provimento, vacância, estabilidade e regime disciplinar (advertência, suspensão, demissão).',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_12',
            tipoPdfRecomendado: 'versão_simplificada'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_13',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's2_dc_1',
        disciplina: 'Direito Constitucional',
        duracao: '1h00',
        descricao: 'Estatuto dos Congressistas (Inviolabilidades material e formal, imunidades, impedimentos - art. 53 da CF).',
        metodologiaCoach: 'Imunidade material por palavras, votos e opiniões na circunscrição do mandato.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Constitucional',
            aulaNome: 'Aula_10',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's2_ling_1',
        disciplina: 'Fundamentos da Linguística',
        duracao: '1h00',
        descricao: 'Fundamentos da Linguística — Aula 02 (Teoria da Enunciação: Benveniste, situação de comunicação, enunciação vs enunciado).',
        metodologiaCoach: 'Aparelho formal da enunciação e marcas dêiticas.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)',
            aulaNome: 'Aula_02',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's2_port_1',
        disciplina: 'Língua Portuguesa',
        duracao: '1h30',
        descricao: 'Bateria Cebraspe de 40 questões de Português (Morfossintaxe do período, orações subordinadas e pontuação).',
        metodologiaCoach: 'Foco no uso da vírgula antes de orações adjetivas explicativas vs restritivas.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Portuguesa',
            aulaNome: 'Aula_07',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's2_rev_1',
        disciplina: 'Fechamento da Semana 2',
        duracao: '1h30',
        descricao: 'Revisão ativa por resumos e resolução de 15 itens inéditos de RICD.',
        metodologiaCoach: 'Fechando a metade do mês! Reforce o Caderno de Erros das semanas 1 e 2.',
        aulasSugeridas: []
      }
    ]
  },
  {
    numero: 3,
    titulo: 'Semana 3: Aprofundamento Específico e Produção da Peça de 50 Linhas',
    metaHoras: 20,
    objetivoFoco: 'Tramitação legislativa complexa, IA generativa em parlamentos e primeira peça técnica completa de 50L.',
    sessoes: [
      {
        id: 's3_ia_1',
        disciplina: 'IA Aplicada ao Parlamento',
        duracao: '1h30',
        descricao: 'IA aplicada ao contexto legislativo: Sumarização de debates, indexação de discursos, busca semântica em acervos e geração automática de atas.',
        metodologiaCoach: 'Compreender como LLMs e RAG auxiliam o trabalho de taquigrafia e redação.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_05',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's3_ia_2',
        disciplina: 'Governança e IA Ética',
        duracao: '1h30',
        descricao: 'LGPD em pipelines de transcrição de sessões secretas e públicas, direitos autorais e mitigação de alucinações de modelos.',
        metodologiaCoach: 'Transparência ativa versus sigilo de dados sensíveis e discursos protegidos.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_06',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's3_ricd_1',
        disciplina: 'Regimento Interno da CD',
        duracao: '1h30',
        descricao: 'RICD — Proposições e Regime de Tramitação (Ordinária, Prioridade, Urgência e Urgência Urgentíssima - Aulas 05 e 06).',
        metodologiaCoach: 'Diferenças de prazos e ritos entre cada regime de tramitação.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_05_(PROPOSIÇÕES)',
            tipoPdfRecomendado: 'Baixar_Slides'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)',
            tipoPdfRecomendado: 'Baixar_Slides'
          }
        ]
      },
      {
        id: 's3_ricd_2',
        disciplina: 'Regimento Interno da CD',
        duracao: '1h30',
        descricao: 'RICD — Discussão, Votação, Redação Final e Autógrafos (Aula 07 de RICD).',
        metodologiaCoach: 'Rito de emendas, redação final pela CCJC e envio para autógrafo.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)',
            tipoPdfRecomendado: 'Baixar_Slides'
          }
        ]
      },
      {
        id: 's3_cp_1',
        disciplina: 'Ciência Política',
        duracao: '1h30',
        descricao: 'Presidencialismo de Coalizão no Brasil, governabilidade e relação Executivo-Legislativo.',
        metodologiaCoach: 'Sérgio Abranches e Fernando Limongi: barganha legislativa, MPs e controle de agenda.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's3_cp_2',
        disciplina: 'Ciência Política',
        duracao: '1h30',
        descricao: 'Formação do Estado brasileiro, história do voto e evolução das instituições políticas nacionais.',
        metodologiaCoach: 'Coronelismo, voto censitário e conquistas democráticas da CF/88.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's3_disc_1',
        disciplina: 'Discursiva / Peça Técnica 50L',
        duracao: '2h00',
        descricao: 'Redação de 1 Peça Técnica Completa (até 50 linhas) baseada no modelo da Aula 05 e 06 da Patrícia Manzato (adequação de fala oral parlamentar à norma culta e aos padrões da Câmara).',
        metodologiaCoach: 'Treino no simulador P3 da plataforma: 50 linhas contadas, respeitando a margem e normas formais.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_05_Profª_Patrícia_Manzato_(Somente_em_PDF)',
            tipoPdfRecomendado: 'versão_original'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's3_disc_2',
        disciplina: 'Discursiva / Auto-correção',
        duracao: '1h00',
        descricao: 'Auto-correção criteriosa comparando com o espelho oficial e checagem de regras de translineação e paragrafação.',
        metodologiaCoach: 'Identificar qualquer cacoete oral ou redundância mantida indevidamente.',
        aulasSugeridas: []
      },
      {
        id: 's3_ing_1',
        disciplina: 'Inglês Instrumental',
        duracao: '1h00',
        descricao: 'Aulas 02 e 06 de Língua Inglesa: Resolução de 20 questões Cebraspe de interpretação de textos de publicações institucionais internacionais.',
        metodologiaCoach: 'Treinar leitura em ritmo de prova (máximo 2 a 3 minutos por texto).',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Inglesa',
            aulaNome: 'Aula_02',
            tipoPdfRecomendado: 'versão_simplificada'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Inglesa',
            aulaNome: 'Aula_06',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's3_da_1',
        disciplina: 'Direito Administrativo',
        duracao: '1h00',
        descricao: 'Licitações e Contratos (Lei 14.133/2021: modalidades, contratação direta, princípios - Aula 07 Simplificada).',
        metodologiaCoach: 'Foco na dispensa de licitação e na modalidade Diálogo Competitivo.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_07',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's3_da_2',
        disciplina: 'Legislação e Transparência',
        duracao: '1h00',
        descricao: 'Lei de Acesso à Informação (Lei 12.527) e LGPD (Lei 13.709) no serviço público (Aulas 18 e 19).',
        metodologiaCoach: 'Prazos de resposta da LAI e classificação de sigilo (ultrassecreta, secreta, reservada).',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_18',
            tipoPdfRecomendado: 'versão_simplificada'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_19',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's3_ling_1',
        disciplina: 'Fundamentos da Linguística',
        duracao: '1h00',
        descricao: 'Fundamentos da Linguística — Aula 03 (Bakhtin: dialogismo, polifonia, gêneros do discurso; Marcuschi: retextualização da fala para a escrita).',
        metodologiaCoach: 'Marcuschi é o autor nº 1 da banca para Registro e Redação.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's3_ling_2',
        disciplina: 'Técnica Legislativa',
        duracao: '1h30',
        descricao: 'Lei Complementar nº 95/1998 (Estrutura da lei: epígrafe, ementa, preâmbulo, artigos, parágrafos, incisos e alíneas).',
        metodologiaCoach: 'Regras de pontuação, numeração e redação de atos normativos segundo a LC 95.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Portuguesa',
            aulaNome: 'Aula_13',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's3_rev_1',
        disciplina: 'Fechamento da Semana 3',
        duracao: '1h30',
        descricao: 'Revisão relâmpago dos bizus de Direito Administrativo e Constitucional.',
        metodologiaCoach: 'Revisar apenas os mapas mentais e pontos frágeis identificados.',
        aulasSugeridas: []
      }
    ]
  },
  {
    numero: 4,
    titulo: 'Semana 4: Consolidação Tática, RCCN e Simulação Real de Prova',
    metaHoras: 20,
    objetivoFoco: 'Regimento Comum, fechamento de lacunas e simulação real de 3h cronometradas da prova discursiva P3.',
    sessoes: [
      {
        id: 's4_ia_1',
        disciplina: 'IA Avançada e Degravação',
        duracao: '1h30',
        descricao: 'Engenharia de prompts e LLMs multimodais nativos de áudio aplicados à degravação parlamentar.',
        metodologiaCoach: 'Como o modelo pode sugerir correções de termos regimentais sem alterar o sentido do deputado.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_07',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's4_ia_2',
        disciplina: 'Ciência de Dados',
        duracao: '1h30',
        descricao: 'Atributos, métricas, transformação de dados e princípios de visualização (gráficos e relatórios - Aulas 12 e 13).',
        metodologiaCoach: 'Foco na interpretação conceitual de dashboards e bancos de dados relacionais.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_12',
            tipoPdfRecomendado: 'versão_simplificada'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_Informática_e_Dados',
            aulaNome: 'Aula_13',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's4_rccn_1',
        disciplina: 'Regimento Comum (RCCN)',
        duracao: '1h30',
        descricao: 'RCCN — Resolução nº 1/1970-CN (Sessões Conjuntas, Mesa do Congresso, Comissões Mistas - Aulas 10 e 11 de RICD/RCCN).',
        metodologiaCoach: 'Composição da Mesa do Congresso Nacional e rito de sessões conjuntas.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_10_(REGIMENTO_COMUM_PARTE_1)',
            tipoPdfRecomendado: 'Baixar_Slides'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_11_(REGIMENTO_COMUM_PARTE_2)',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's4_rccn_2',
        disciplina: 'RCCN — Resoluções Específicas',
        duracao: '1h30',
        descricao: 'Tramitação de Medidas Provisórias (Resolução nº 1/2002-CN) e Comissão Representativa (Resolução nº 3/1990 - Aula 13).',
        metodologiaCoach: 'Prazos de parecer da comissão mista de MP e funcionamento no recesso parlamentar.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados',
            aulaNome: 'Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)',
            tipoPdfRecomendado: 'Baixar_Slides'
          }
        ]
      },
      {
        id: 's4_cp_1',
        disciplina: 'Ciência Política',
        duracao: '1h30',
        descricao: 'Teoria do Estado (soberania, território, povo) e temas contemporâneos de política brasileira e internacional.',
        metodologiaCoach: 'Conceito de soberania e transformações no mundo globalizado.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's4_cp_2',
        disciplina: 'Ciência Política',
        duracao: '1h00',
        descricao: 'Bateria de 30 questões Cebraspe de Ciência Política para fixar as pegadinhas conceituais da banca.',
        metodologiaCoach: 'Identificar as palavras armadilha do Cebraspe em questões de Ciência Política.',
        aulasSugeridas: []
      },
      {
        id: 's4_simulado_p3',
        disciplina: 'Discursiva — SIMULADO P3 REAL (3 HORAS)',
        duracao: '3h00',
        descricao: 'Execução contínua e cronometrada de 3 horas com 1 Peça Técnica (50L) + 2 Questões (20L cada).',
        metodologiaCoach: 'Simulação real com caneta preta ou no editor de simulação da plataforma sem pausas!',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_07_Profª_Patrícia_Manzato_(Somente_em_PDF)',
            tipoPdfRecomendado: 'versão_original'
          },
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção',
            aulaNome: 'Aula_08_Profª_Patrícia_Manzato_(Somente_em_PDF)',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's4_ing_1',
        disciplina: 'Inglês Instrumental',
        duracao: '1h30',
        descricao: 'Aula 07 de Inglês: Resolução de 1 prova completa da banca Cebraspe para analistas, cronometrando tempo e vocabulário.',
        metodologiaCoach: 'Manter a calma diante de termos técnicos não conhecidos inferindo pelo contexto.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Inglesa',
            aulaNome: 'Aula_07',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's4_da_1',
        disciplina: 'Direito Administrativo',
        duracao: '1h00',
        descricao: 'Improbidade Administrativa (Lei 8.429/1992 com alterações da Lei 14.230/2021 - foco em dolo específico - Aula 17).',
        metodologiaCoach: 'Revogação da modalidade culposa na nova lei de improbidade.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Direito_Administrativo',
            aulaNome: 'Aula_17',
            tipoPdfRecomendado: 'versão_simplificada'
          }
        ]
      },
      {
        id: 's4_dc_1',
        disciplina: 'Direito Constitucional',
        duracao: '1h00',
        descricao: 'Revisão Constitucional dos arts. 1º a 5º e 37 da CF/88 via Bizu Estratégico.',
        metodologiaCoach: 'Garantir que os direitos e garantias fundamentais estejam frescos na memória.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico',
            aulaNome: 'Aula_03',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's4_ling_1',
        disciplina: 'Linguística e Redação Oficial',
        duracao: '1h00',
        descricao: 'Retórica parlamentar, figuras de linguagem e Manual de Redação da Câmara (fechos e pronomes de tratamento).',
        metodologiaCoach: 'Vossa Excelência x Vossa Senhoria; fechos: Respeitosamente / Atenciosamente.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Portuguesa',
            aulaNome: 'Aula_14_(Exclusivamente_PDF)',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's4_port_1',
        disciplina: 'Língua Portuguesa',
        duracao: '1h00',
        descricao: 'Bateria Cebraspe de 40 questões sobre Reescrita de Frases e Parágrafos (Semântica e Estilo).',
        metodologiaCoach: 'Atenção às alterações sutis de sentido que invalidam o item.',
        aulasSugeridas: [
          {
            disciplinaNome: 'Câmara_dos_Deputados_Língua_Portuguesa',
            aulaNome: 'Aula_08',
            tipoPdfRecomendado: 'versão_original'
          }
        ]
      },
      {
        id: 's4_fechamento_final',
        disciplina: 'Fechamento e Balanço Final do Mês',
        duracao: '3h00',
        descricao: 'Balanço estatístico das 4 semanas, revisão final do Caderno de Erros e consolidação das regras de ouro Cebraspe.',
        metodologiaCoach: 'Você completou 80 horas de altíssimo rendimento tático. A vaga é sua!',
        aulasSugeridas: []
      }
    ]
  }
];
