export interface ArquivoItem {
  nome: string;
  tipo: 'simplificada' | 'aprovados' | 'mapa' | 'resumo' | 'slides' | 'original' | 'texto';
  caminho: string;
}

export interface AulaItem {
  aula: string;
  caminhoRelativo: string;
  assuntos: string;
  arquivos: ArquivoItem[];
}

export interface DisciplinaItem {
  id: number;
  nome: string;
  caminhoRelativo: string;
  totalAulas: number;
  criticidade: 'Decisiva' | 'Novo Corte' | 'Vital' | 'Ponto Cego' | 'Base Sólida' | 'Técnico';
  impactoP3: 'Altíssimo' | 'Alto' | 'Médio' | 'Baixo' | 'Nulo';
  aulas: AulaItem[];
}

export const DISCIPLINAS: DisciplinaItem[] = [
  {
    "id": 1,
    "nome": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)",
    "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)",
    "totalAulas": 3,
    "criticidade": "Decisiva",
    "impactoP3": "Altíssimo",
    "aulas": [
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_01",
        "assuntos": "Fundamentos de Linguística e Semiologia. Linguagem, língua e fala. Signo linguístico: significante, significado, significação, arbitrariedade, motivação e linearidade. Referente, referência, representação e sentido.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_02",
        "assuntos": "Teoria da enunciação e a produção do texto escrito: enunciação e enunciado. Texto e discurso;",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_02/Aula_02_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_03",
        "assuntos": "Intertextualidade e polifonia. Gêneros do discurso.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_03/Aula_03_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Conhecimentos_Específicos_(Parte_de_Fundamentos_da_Linguística)/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "nome": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção",
    "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção",
    "totalAulas": 9,
    "criticidade": "Decisiva",
    "impactoP3": "Altíssimo",
    "aulas": [
      {
        "aula": "Aula_00_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_00_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "assuntos": "Análise do edital. Dicas práticas para a Discursiva.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_00_Profª_Patrícia_Manzato_(Somente_em_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_00_Profª_Patrícia_Manzato_(Somente_em_PDF)/Aula_00_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01_Profª_Patrícia_Manzato",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_01_Profª_Patrícia_Manzato",
        "assuntos": "Aspectos textuais: coesão e coerência.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_01_Profª_Patrícia_Manzato/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Profª_Patrícia_Manzato_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_01_Profª_Patrícia_Manzato/Aula_01_Profª_Patrícia_Manzato_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_01_Profª_Patrícia_Manzato/Aula_01_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02_Profª_Patrícia_Manzato",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_02_Profª_Patrícia_Manzato",
        "assuntos": "Questão discursiva: planejamento e organização do texto.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_02_Profª_Patrícia_Manzato/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_02_Profª_Patrícia_Manzato/Aula_02_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03_Profª_Patrícia_Manzato",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_03_Profª_Patrícia_Manzato",
        "assuntos": "Revisão de Pronunciamento: teoria e prática.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_03_Profª_Patrícia_Manzato/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_03_Profª_Patrícia_Manzato/Aula_03_Profª_Patrícia_Manzato_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_04_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "assuntos": "Problemas de Língua Portuguesa.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_04_Profª_Patrícia_Manzato_(Somente_em_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_04_Profª_Patrícia_Manzato_(Somente_em_PDF)/Aula_04_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_05_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "assuntos": "Folha de Resposta Padrão.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_05_Profª_Patrícia_Manzato_(Somente_em_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_05_Profª_Patrícia_Manzato_(Somente_em_PDF)/Aula_05_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "assuntos": "Primeira Rodada de Análise de Textos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)/Aula_06_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_07_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "assuntos": "Segunda Rodada de Análise de Textos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_07_Profª_Patrícia_Manzato_(Somente_em_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_07_Profª_Patrícia_Manzato_(Somente_em_PDF)/Aula_07_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_08_Profª_Patrícia_Manzato_(Somente_em_PDF)",
        "assuntos": "Terceira Rodada de Análise de Textos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_08_Profª_Patrícia_Manzato_(Somente_em_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Discursiva_Sem_Correção/Aula_08_Profª_Patrícia_Manzato_(Somente_em_PDF)/Aula_08_Profª_Patrícia_Manzato_(Somente_em_PDF)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "nome": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados",
    "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados",
    "totalAulas": 14,
    "criticidade": "Vital",
    "impactoP3": "Alto",
    "aulas": [
      {
        "aula": "Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)",
        "assuntos": "RICD; TÍTULO I - Disposições Preliminares (art. 1º ao 8º) e Título II - Dos Órgãos da Câmara (art. 14 a 19-A)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)/Aula_00_(SEDE_SESSÕES_LEGISLATIVAS_PREPARATÓRIAS_E_MESA)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)",
        "assuntos": "RICD; TÍTULO I - LÍDERES, COLÉGIO DE LÍDERES, BLOCOS (art. 9º ao 13º) e Título II - Dos Órgãos da Câmara (art. 20 a 21-U)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)/Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)/Aula_01_(LÍDERES_COLÉGIO_DE_LÍDERES_BLOCOS_E_DEMAIS_ÓRGÃOS)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02_(COMISSÕES_PARTE_1)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_02_(COMISSÕES_PARTE_1)",
        "assuntos": "RICD; TÍTULO II",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_02_(COMISSÕES_PARTE_1)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_(COMISSÕES_PARTE_1)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_02_(COMISSÕES_PARTE_1)/Aula_02_(COMISSÕES_PARTE_1)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_(COMISSÕES_PARTE_1)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_02_(COMISSÕES_PARTE_1)/Aula_02_(COMISSÕES_PARTE_1)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03_(COMISSÕES_PARTE_2)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_03_(COMISSÕES_PARTE_2)",
        "assuntos": "RICD; TÍTULO II",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_03_(COMISSÕES_PARTE_2)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_(COMISSÕES_PARTE_2)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_03_(COMISSÕES_PARTE_2)/Aula_03_(COMISSÕES_PARTE_2)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_(COMISSÕES_PARTE_2)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_03_(COMISSÕES_PARTE_2)/Aula_03_(COMISSÕES_PARTE_2)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04_(SESSÕES)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_04_(SESSÕES)",
        "assuntos": "RICD; TÍTULO III",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_04_(SESSÕES)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_(SESSÕES)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_04_(SESSÕES)/Aula_04_(SESSÕES)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_04_(SESSÕES)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_04_(SESSÕES)/Aula_04_(SESSÕES)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05_(PROPOSIÇÕES)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_05_(PROPOSIÇÕES)",
        "assuntos": "RICD; TÍTULO IV",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_05_(PROPOSIÇÕES)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_(PROPOSIÇÕES)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_05_(PROPOSIÇÕES)/Aula_05_(PROPOSIÇÕES)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_05_(PROPOSIÇÕES)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_05_(PROPOSIÇÕES)/Aula_05_(PROPOSIÇÕES)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)",
        "assuntos": "RICD; TÍTULO V",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)/Aula_06_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(TRAMITAÇÃO)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)",
        "assuntos": "RICD; TÍTULO V",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)/Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)/Aula_07_(APRECIAÇÃO_DAS_PROPOSIÇÕES_(DISCUSSÃO_ATÉ_AUTÓGRAFOS)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)",
        "assuntos": "RICD; TÍTULO VI",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)/Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)/Aula_08_(MATÉRIAS_SUJEITAS_À_DISPOSIÇÕES_ESPECIAIS)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_09_(PARTE_FINAL)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_09_(PARTE_FINAL)",
        "assuntos": "RICD; TÍTULO VII a X",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_09_(PARTE_FINAL)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_09_(PARTE_FINAL)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_09_(PARTE_FINAL)/Aula_09_(PARTE_FINAL)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_09_(PARTE_FINAL)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_09_(PARTE_FINAL)/Aula_09_(PARTE_FINAL)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_10_(REGIMENTO_COMUM_PARTE_1)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_10_(REGIMENTO_COMUM_PARTE_1)",
        "assuntos": "RCCN: ARTIGOS 1 a 21",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_10_(REGIMENTO_COMUM_PARTE_1)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_10_(REGIMENTO_COMUM_PARTE_1)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_10_(REGIMENTO_COMUM_PARTE_1)/Aula_10_(REGIMENTO_COMUM_PARTE_1)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_10_(REGIMENTO_COMUM_PARTE_1)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_10_(REGIMENTO_COMUM_PARTE_1)/Aula_10_(REGIMENTO_COMUM_PARTE_1)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_11_(REGIMENTO_COMUM_PARTE_2)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_11_(REGIMENTO_COMUM_PARTE_2)",
        "assuntos": "RCCN: ARTIGOS 22 a 71 e 134 a 140",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_11_(REGIMENTO_COMUM_PARTE_2)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_11_(REGIMENTO_COMUM_PARTE_2)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_11_(REGIMENTO_COMUM_PARTE_2)/Aula_11_(REGIMENTO_COMUM_PARTE_2)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_12_(REGIMENTO_COMUM_PARTE_3)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_12_(REGIMENTO_COMUM_PARTE_3)",
        "assuntos": "RCCN: DEMAIS DISPOSIÇÕES",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_12_(REGIMENTO_COMUM_PARTE_3)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_12_(REGIMENTO_COMUM_PARTE_3)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_12_(REGIMENTO_COMUM_PARTE_3)/Aula_12_(REGIMENTO_COMUM_PARTE_3)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)",
        "caminhoRelativo": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)",
        "assuntos": "RCCN - RESOLUÇÃO 3/90 (COMISSÃO REPRESENTATIVA) e RESOLUÇÃO 1/2002 (MEDIDAS PROVISÓRIAS)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)/Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Analista_Legislativo_Registro_e_Redação)_Regimento_Interno_+_Regimento_Comum_da_Câmara_dos_Deputados/Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)/Aula_13_(RCCN_RESOLUÇÕES_390_E_12002)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "nome": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico",
    "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico",
    "totalAulas": 8,
    "criticidade": "Técnico",
    "impactoP3": "Baixo",
    "aulas": [
      {
        "aula": "Aula_00",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_00",
        "assuntos": "Explicações sobre os Bizus Estratégicos",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_00/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_00/Aula_00_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_01",
        "assuntos": "Bizu Estratégico de Língua Inglesa",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_02",
        "assuntos": "Bizu Estratégico de Língua Portuguesa",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_03",
        "assuntos": "Bizu Estratégico de Direito Constitucional",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_04",
        "assuntos": "Bizu Estratégico de Direito Administrativo",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_04/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_04/Aula_04_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_05",
        "assuntos": "Bizu Estratégico de Informática e Dados",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_05/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_06",
        "assuntos": "Bizu Estratégico de Raciocínio Lógico",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_06/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_06/Aula_06_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07",
        "caminhoRelativo": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_07",
        "assuntos": "Bizu Estratégico de Estatística",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_07/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_(Diversos_Cargos)_Bizu_Estratégico/Aula_07/Aula_07_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "nome": "Câmara_dos_Deputados_Direito_Administrativo",
    "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo",
    "totalAulas": 20,
    "criticidade": "Base Sólida",
    "impactoP3": "Baixo",
    "aulas": [
      {
        "aula": "Aula_00",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_00",
        "assuntos": "Princípios",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_00/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_00/Aula_00_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_00/Aula_00_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_00/Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_00/Aula_00_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_00/Aula_00_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_01",
        "assuntos": "1. Conceitos. Estado. Governo. Administração Pública. Reformas administrativas.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_01/Aula_01_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_01/Aula_01_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_01/Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_01/Aula_01_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_02",
        "assuntos": "2 Organização da Administração. A Administração na Constituição de 1988.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_02/Aula_02_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_02/Aula_02_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_02/Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_02/Aula_02_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_03",
        "assuntos": "2 Organização da Administração (parte 2)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_03/Aula_03_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_03/Aula_03_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_03/Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_03/Aula_03_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_04",
        "assuntos": "Entidades paraestatais e o Terceiro Setor.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_04/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_04/Aula_04_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_04/Aula_04_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_04/Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_04/Aula_04_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_04/Aula_04_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_05",
        "assuntos": "3 Poderes e Deveres Administrativos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_05/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_05/Aula_05_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_05/Aula_05_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_05/Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_05/Aula_05_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06",
        "assuntos": "Aula 6 4 Atos Administrativos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06/Aula_06_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06/Aula_06_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06/Aula_06_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06/Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06/Aula_06_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_06/Aula_06_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_07",
        "assuntos": "7 Licitações: conceito, princípios, contratação direta, modalidade e tipos. (Lei nº 14.133/2021).",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_07/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_07/Aula_07_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_07/Aula_07_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_07/Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_07/Aula_07_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_07/Aula_07_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_08",
        "assuntos": "7 Licitações (Lei nº 14.133/2021) – parte 2",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_08/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_08/Aula_08_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_08/Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_08/Aula_08_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_08/Aula_08_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_09",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_09",
        "assuntos": "Contratos administrativos. Fracionamento de despesa. Fiscalização contratual.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_09/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_09/Aula_09_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_09/Aula_09_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_09/Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_09/Aula_09_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_09/Aula_09_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_10",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10",
        "assuntos": "8 Controle da Administração.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10/Aula_10_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10/Aula_10_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10/Aula_10_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10/Aula_10_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10/Aula_10_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_10/Aula_10_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_11",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11",
        "assuntos": "9 Responsabilidade Civil do Estado.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11/Aula_11_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11/Aula_11_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11/Aula_11_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11/Aula_11_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11/Aula_11_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_11/Aula_11_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_12",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_12",
        "assuntos": "5 Agentes Públicos: disposições constitucionais.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_12/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_12/Aula_12_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_12/Aula_12_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_12/Aula_12_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_13",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13",
        "assuntos": "Lei nº 8.112/1990 – parte 1",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Aula_13_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Aula_13_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Aula_13_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Aula_13_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Aula_13_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_13/Aula_13_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_14",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_14",
        "assuntos": "Lei nº 8.112/1990 – parte 2",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_14/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_14/Aula_14_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_14/Aula_14_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_14/Aula_14_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_14/Aula_14_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_14/Aula_14_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_15",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_15",
        "assuntos": "Lei nº 8.112/1990 – parte 3",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_15/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_15/Aula_15_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_15/Aula_15_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_15/Aula_15_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_15/Aula_15_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_15/Aula_15_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_16",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16",
        "assuntos": "6 Processo Administrativo Federal. Lei nº 9.784/1999.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_16_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16/Aula_16_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_16_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16/Aula_16_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_16_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16/Aula_16_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_16_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16/Aula_16_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_16_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16/Aula_16_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_16_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_16/Aula_16_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_17",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_17",
        "assuntos": "10 Improbidade Administrativa (Lei nº 8.429/1992).",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_17/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_17_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_17/Aula_17_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_17_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_17/Aula_17_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_17_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_17/Aula_17_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_18",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_18",
        "assuntos": "11 Lei de Acesso à Informação (Lei nº 12.527/2011).",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_18/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_18_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_18/Aula_18_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_18_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_18/Aula_18_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_18_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_18/Aula_18_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_18_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_18/Aula_18_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_19",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Administrativo/Aula_19",
        "assuntos": "12 Lei Geral de Proteção de Dados (Lei nº 13.709/2018)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_19/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_19_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_19/Aula_19_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_19_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_19/Aula_19_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_19_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Administrativo/Aula_19/Aula_19_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "nome": "Câmara_dos_Deputados_Direito_Constitucional",
    "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional",
    "totalAulas": 16,
    "criticidade": "Base Sólida",
    "impactoP3": "Baixo",
    "aulas": [
      {
        "aula": "Aula_00",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00",
        "assuntos": "1 Constituição de 1988: conceito, contexto histórico, características, estrutura do texto. 2 Poder constituinte: conceito, espécies, limites.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00/Aula_00_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00/Aula_00_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00/Aula_00_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00/Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00/Aula_00_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_00/Aula_00_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01",
        "assuntos": "3 Princípios Fundamentais. Teoria Geral dos Direitos Fundamentais.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01/Aula_01_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01/Aula_01_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01/Aula_01_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01/Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_01/Aula_01_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02",
        "assuntos": "Direitos e garantias fundamentais: direitos e deveres individuais e coletivos - Parte I.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02/Aula_02_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02/Aula_02_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02/Aula_02_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02/Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_02/Aula_02_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_03",
        "assuntos": "Direitos e garantias fundamentais: direitos e deveres individuais e coletivos - Parte II.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_03/Aula_03_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_03/Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_03/Aula_03_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04",
        "assuntos": "Direitos sociais.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04/Aula_04_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04/Aula_04_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04/Aula_04_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04/Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04/Aula_04_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_04/Aula_04_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_05",
        "assuntos": "Nacionalidade.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_05/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_05/Aula_05_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_05/Aula_05_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_05/Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_05/Aula_05_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06",
        "assuntos": "Direitos políticos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06/Aula_06_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06/Aula_06_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06/Aula_06_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06/Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06/Aula_06_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_06/Aula_06_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07",
        "assuntos": "Partidos políticos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07/Aula_07_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07/Aula_07_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07/Aula_07_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07/Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07/Aula_07_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_07/Aula_07_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08",
        "assuntos": "4. Organização do Estado: organização político-administrativa, União, Estados, Municípios, Distrito Federal e Territórios. Intervenção Federal.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08/Aula_08_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08/Aula_08_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08/Aula_08_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08/Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08/Aula_08_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_08/Aula_08_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_09",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_09",
        "assuntos": "5 Administração Pública: disposições gerais, servidores públicos civis e militares.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_09/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_09/Aula_09_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_09/Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_09/Aula_09_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_09/Aula_09_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_10",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_10",
        "assuntos": "6. Poder Legislativo. O Congresso Nacional e suas Casas: atribuições, competências, reuniões e comissões. Regime Jurídico-constitucional dos Parlamentares. Fiscalização Contábil, Financeira e Orçamentária.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Aula_10_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Aula_10_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Aula_10_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Aula_10_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_10/Aula_10_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_11",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_11",
        "assuntos": "Processo Legislativo.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_11/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_11/Aula_11_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_11/Aula_11_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_11/Aula_11_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_11/Aula_11_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_11/Aula_11_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_12",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_12",
        "assuntos": "7 Poder Executivo: atribuições e responsabilidades do Presidente da República. Atribuições dos Ministros de Estado.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_12/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_12/Aula_12_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_12/Aula_12_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_12/Aula_12_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_12/Aula_12_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_12/Aula_12_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_13",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_13",
        "assuntos": "8 Poder Judiciário: órgãos, composição, garantias e competências.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_13/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_13/Aula_13_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_13/Aula_13_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_13/Aula_13_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_13/Aula_13_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_13/Aula_13_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_14",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14",
        "assuntos": "Funções Essenciais à Justiça.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14/Aula_14_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14/Aula_14_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14/Aula_14_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14/Aula_14_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14/Aula_14_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_14_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_14/Aula_14_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_15",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional/Aula_15",
        "assuntos": "9 Defesa do Estado e das Instituições Democráticas.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_15/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_15/Aula_15_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_15/Aula_15_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_15/Aula_15_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_15_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional/Aula_15/Aula_15_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "nome": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)",
    "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)",
    "totalAulas": 13,
    "criticidade": "Base Sólida",
    "impactoP3": "Baixo",
    "aulas": [
      {
        "aula": "Aula_00",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_00",
        "assuntos": "Teoria da Constituição - Constituição: conceito, classificações, normas constitucionais",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_00/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_00/Aula_00_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_00/Aula_00_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_01",
        "assuntos": "Poder Constituinte - Poder constituinte originário, derivado e suas espécies",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_01/Aula_01_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_02",
        "assuntos": "Princípios Fundamentais - Título I da CF. Teoria dos princípios. Fundamentos, objetivos fundamentais, princípios das relações internacionais, separação de poderes, forma de governo, sistema de governo, forma de estado",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_02/Aula_02_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_03",
        "assuntos": "Teoria Geral dos Direitos Fundamentais - Teoria dos direitos fundamentais: conceito, fundamentos, características, titularidade, aplicação, tratados internacionais de direitos humanos, fontes dos direitos fundamentais, restrições",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_03/Aula_03_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_04",
        "assuntos": "Direitos Individuais e coletivos - Art. 5º da CF, parte 1: direitos à vida, liberdade, igualdade, segurança, propriedade e privacidade",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_04/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_04/Aula_04_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_05",
        "assuntos": "Garantias individuais e coletivas - Garantias processuais gerais, garantias penais, remédios constitucionais",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_05/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_06",
        "assuntos": "Direitos sociais e de nacionalidade - Direitos sociais e direitos de nacionalidade",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_06/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_06/Aula_06_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_06/Aula_06_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_07",
        "assuntos": "Direitos Políticos e Partidos Políticos - Direitos Políticos posivitos e negativos, ativos e passivos. Normas constitucionais sobre partidos políticos",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_07/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_07/Aula_07_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_07/Aula_07_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_08",
        "assuntos": "Organização do Estado (parte geral) - Organização político-administrativa. Entes federativos. Bens Públicos. Intervenção",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_08/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_08/Aula_08_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_08/Aula_08_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_09",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_09",
        "assuntos": "Repartição de competências federativas - Repartição de competências federativas: teoria e casuística",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_09/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_09/Aula_09_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_09/Aula_09_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_10",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_10",
        "assuntos": "Poder Legislativo (parte geral) - Poder Legislativo na CF. Congresso Nacional e suas casas. Estatuto dos parlamentares. CPIs. Fiscalização contábil e financeira.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_10/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_10/Aula_10_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_10/Aula_10_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_11",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_11",
        "assuntos": "Processo Legislativo - Processo constitucional de formação das leis (arts. 59 a 69 da CF)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_11/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_11/Aula_11_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_11/Aula_11_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_12",
        "caminhoRelativo": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_12",
        "assuntos": "Poder Executivo - Poder Executivo na CF.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_12/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Direito_Constitucional_(Prof_João_Trindade)/Aula_12/Aula_12_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "nome": "Câmara_dos_Deputados_Informática_e_Dados",
    "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados",
    "totalAulas": 14,
    "criticidade": "Novo Corte",
    "impactoP3": "Altíssimo",
    "aulas": [
      {
        "aula": "Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Redes de Computadores: conceitos básicos. (Parte 1)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_00_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Redes de Computadores: conceitos básicos. (Parte 2)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_01_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Conceitos de Internet e Intranet.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_02_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Conceitos gerais de segurança da informação: proteção contra vírus e outras formas de softwares ou ações intrusivas. (Parte 1)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_03_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Conceitos gerais de segurança da informação: proteção contra vírus e outras formas de softwares ou ações intrusivas. (Parte 2)",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_04_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "MSOffice M365 (Excel).",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_05_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "MSOffice M365 (Word).",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_06_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "MSOffice M365 (Power Point).",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_07_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)",
        "assuntos": "MSOffice M365 (One Drive, Sharepoint e Teams).",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_08_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Noções do Sistema Operacional Windows 10.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_09_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Noções do Sistema Operacional Windows 11.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_10_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)",
        "assuntos": "Conceitos básicos de hardware e software: funcionamento do computador; conhecimentos dos componentes principais.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)/Aula_11_(Prof_Diego_Carvalho_e_Renato_da_Costa)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)",
        "assuntos": "Dados: conceitos, atributos, métricas, transformação de dados.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_12_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)",
        "caminhoRelativo": "Câmara_dos_Deputados_Informática_e_Dados/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)",
        "assuntos": "Ciência de Dados: governança da informação",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Informática_e_Dados/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)/Aula_13_(Prof_Diego_Carvalho_e_Emannuelle_Gouveia)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "nome": "Câmara_dos_Deputados_Língua_Inglesa",
    "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa",
    "totalAulas": 8,
    "criticidade": "Ponto Cego",
    "impactoP3": "Nulo",
    "aulas": [
      {
        "aula": "Aula_00",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_00",
        "assuntos": "Interpretação de textos, Cognatos e Resolução de Provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_00/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_00/Aula_00_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_00/Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_00/Aula_00_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_00/Aula_00_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_01",
        "assuntos": "Substantivos, Artigos, Pronomes, Preposições e Resolução de Provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_01/Aula_01_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_01/Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_01/Aula_01_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_02",
        "assuntos": "Adjetivos, Advérbios e Resolução de Provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_02/Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_02/Aula_02_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_03",
        "assuntos": "Verbos Frasais, Auxiliares e Resolução de Provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_03/Aula_03_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_04",
        "assuntos": "Tempos Verbais (Parte 1) e Resolução de provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_04/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_04/Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_04/Aula_04_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_04/Aula_04_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_05",
        "assuntos": "Tempos Verbais (Parte 2) e Resolução de Provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_05/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_05/Aula_05_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_05/Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_05/Aula_05_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_06",
        "assuntos": "Expressões Idiomáticas e Resolução de Provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_06/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_06/Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_06/Aula_06_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_06/Aula_06_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Inglesa/Aula_07",
        "assuntos": "Resolução de Provas",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_07/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Inglesa/Aula_07/Aula_07_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "nome": "Câmara_dos_Deputados_Língua_Portuguesa",
    "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa",
    "totalAulas": 15,
    "criticidade": "Decisiva",
    "impactoP3": "Altíssimo",
    "aulas": [
      {
        "aula": "Aula_00_(Exclusivamente_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_00_(Exclusivamente_PDF)",
        "assuntos": "Nivelamento",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_00_(Exclusivamente_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_(Exclusivamente_PDF)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_00_(Exclusivamente_PDF)/Aula_00_(Exclusivamente_PDF)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_00_(Exclusivamente_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_00_(Exclusivamente_PDF)/Aula_00_(Exclusivamente_PDF)_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_00_(Exclusivamente_PDF)_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_00_(Exclusivamente_PDF)/Aula_00_(Exclusivamente_PDF)_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_01",
        "assuntos": "Ortografia e acentuação gráfica.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_01/Aula_01_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_01/Aula_01_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_01/Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_01/Aula_01_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02",
        "assuntos": "Classes de palavras: os aspectos morfológicos, sintáticos, semânticos e textuais de substantivos, adjetivos, pronomes, artigos, numerais, advérbios e interjeições. Colocação pronominal.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02/Aula_02_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02/Aula_02_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02/Aula_02_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02/Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_02/Aula_02_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_03",
        "assuntos": "Classes de palavras: preposições e conjunções.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_03/Aula_03_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_03/Aula_03_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_03/Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_03/Aula_03_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_04",
        "assuntos": "Classes de palavras: verbos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_04/Assuntos_dessa_aula.txt"
          }
        ]
      },
      {
        "aula": "Aula_05",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_05",
        "assuntos": "Estrutura e formação de palavras. Formas de abreviação.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_05/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_05/Aula_05_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_05/Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_05/Aula_05_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_06",
        "assuntos": "Organização sintática das frases: termos e orações. Ordem direta e inversa.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_06/Assuntos_dessa_aula.txt"
          }
        ]
      },
      {
        "aula": "Aula_07",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_07",
        "assuntos": "Tipologia da frase portuguesa. Pontuação e sinais gráficos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_07/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_07/Aula_07_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_07/Aula_07_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_07/Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_07/Aula_07_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_07/Aula_07_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_08",
        "assuntos": "Concordância verbal e nominal.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_08/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_08/Aula_08_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_08/Aula_08_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_08/Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_08/Aula_08_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_08/Aula_08_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_09",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09",
        "assuntos": "Regência verbal e nominal. A Crase",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09/Aula_09_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09/Aula_09_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09/Aula_09_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09/Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09/Aula_09_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_09/Aula_09_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_10",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_10",
        "assuntos": "Marcas de textualidade: coesão, coerência. Estrutura da frase portuguesa: operações de deslocamento, substituição, modificação e correção. Problemas estruturais das frases.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_10/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_10/Aula_10_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_10/Aula_10_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_10/Aula_10_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_10_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_10/Aula_10_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_11",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_11",
        "assuntos": "Semântica: sentido próprio e figurado; antônimos, sinônimos, parônimos e hiperônimos. Polissemia e ambiguidade",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_11/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_11/Aula_11_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_11/Aula_11_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_11/Aula_11_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_11/Aula_11_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_11_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_11/Aula_11_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_12",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_12",
        "assuntos": "Interpretação e compreensão de texto. Organização estrutural dos textos. Intertextualidade. Modos de organização discursiva: descrição, narração, exposição, argumentação e injunção; características específicas de cada modo. Tipos textuais. Tipos de discurso. Funções da linguagem. Modalizadores.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_12/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_12/Aula_12_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_12/Aula_12_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_12/Aula_12_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_12_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_12/Aula_12_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_13",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_13",
        "assuntos": "Norma culta. Registros de linguagem.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_13/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_13/Aula_13_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_13/Aula_13_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_13/Aula_13_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_13/Aula_13_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_13_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_13/Aula_13_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_14_(Exclusivamente_PDF)",
        "caminhoRelativo": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_14_(Exclusivamente_PDF)",
        "assuntos": "Aula extra",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_14_(Exclusivamente_PDF)/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_14_(Exclusivamente_PDF)_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_14_(Exclusivamente_PDF)/Aula_14_(Exclusivamente_PDF)_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_14_(Exclusivamente_PDF)_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Língua_Portuguesa/Aula_14_(Exclusivamente_PDF)/Aula_14_(Exclusivamente_PDF)_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "nome": "Câmara_dos_Deputados_Monitoria",
    "caminhoRelativo": "Câmara_dos_Deputados_Monitoria",
    "totalAulas": 5,
    "criticidade": "Técnico",
    "impactoP3": "Baixo",
    "aulas": [
      {
        "aula": "Aula_00_Prof_Bruno_Bezerra",
        "caminhoRelativo": "Câmara_dos_Deputados_Monitoria/Aula_00_Prof_Bruno_Bezerra",
        "assuntos": "Como montar um Plano de Estudos Pré-Edital para a Câmara dos Deputados.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_00_Prof_Bruno_Bezerra/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_00_Prof_Bruno_Bezerra/Aula_00_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_00_Prof_Bruno_Bezerra/Aula_00_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01_Prof_Bruno_Bezerra",
        "caminhoRelativo": "Câmara_dos_Deputados_Monitoria/Aula_01_Prof_Bruno_Bezerra",
        "assuntos": "Como resolver questões da forma certa.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_01_Prof_Bruno_Bezerra/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_01_Prof_Bruno_Bezerra/Aula_01_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_01_Prof_Bruno_Bezerra/Aula_01_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02_Prof_Bruno_Bezerra",
        "caminhoRelativo": "Câmara_dos_Deputados_Monitoria/Aula_02_Prof_Bruno_Bezerra",
        "assuntos": "Como fazer revisões rápidas e eficientes.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_02_Prof_Bruno_Bezerra/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_02_Prof_Bruno_Bezerra/Aula_02_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_02_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_02_Prof_Bruno_Bezerra/Aula_02_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03_Prof_Bruno_Bezerra",
        "caminhoRelativo": "Câmara_dos_Deputados_Monitoria/Aula_03_Prof_Bruno_Bezerra",
        "assuntos": "Análise Estatística: saiba o que é mais cobrado pelas principais bancas em concursos da Área Legislativa.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_03_Prof_Bruno_Bezerra/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_03_Prof_Bruno_Bezerra/Aula_03_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_03_Prof_Bruno_Bezerra/Aula_03_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04_Prof_Bruno_Bezerra",
        "caminhoRelativo": "Câmara_dos_Deputados_Monitoria/Aula_04_Prof_Bruno_Bezerra",
        "assuntos": "Ferramentas de Estudo: quais utilizar.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_04_Prof_Bruno_Bezerra/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_04_Prof_Bruno_Bezerra/Aula_04_Prof_Bruno_Bezerra_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_04_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Monitoria/Aula_04_Prof_Bruno_Bezerra/Aula_04_Prof_Bruno_Bezerra_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "nome": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático",
    "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático",
    "totalAulas": 10,
    "criticidade": "Técnico",
    "impactoP3": "Baixo",
    "aulas": [
      {
        "aula": "Aula_00",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_00",
        "assuntos": "Estruturas Lógicas I",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_00/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_00/Aula_00_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_00/Aula_00_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_00/Aula_00_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_00/Aula_00_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_00_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_00/Aula_00_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_01",
        "assuntos": "Estruturas Lógicas II",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_01/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_01/Aula_01_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_01/Aula_01_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_01/Aula_01_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_01_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_01/Aula_01_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_02",
        "assuntos": "Equivalências Lógicas e Negações",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_02/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_02/Aula_02_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_02/Aula_02_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_02_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_02/Aula_02_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_03",
        "assuntos": "Diagramas Lógicos",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_03/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_03/Aula_03_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_03/Aula_03_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_03/Aula_03_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_03_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_03/Aula_03_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_04",
        "assuntos": "Lógica de Primeira Ordem",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_04/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_04/Aula_04_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_04/Aula_04_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_04_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_04/Aula_04_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_05",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_05",
        "assuntos": "Lógica de Argumentação",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_05/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_05/Aula_05_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_05/Aula_05_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_05_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_05/Aula_05_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_06",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06",
        "assuntos": "Argumentos: Estrutura Básica e Classificação",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Mapa_Mental.pdf",
            "tipo": "mapa",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06/Aula_06_Livro_Eletronico_Baixar_Mapa_Mental.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Resumo.pdf",
            "tipo": "resumo",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06/Aula_06_Livro_Eletronico_Baixar_Resumo.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06/Aula_06_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06/Aula_06_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06/Aula_06_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_06_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_06/Aula_06_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_07",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_07",
        "assuntos": "Problemas de Lógica I",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_07/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_07/Aula_07_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_07/Aula_07_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_07_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_07/Aula_07_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_08",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_08",
        "assuntos": "Problemas de Lógica II",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_08/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_08/Aula_08_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_08/Aula_08_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_08_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_08/Aula_08_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      },
      {
        "aula": "Aula_09",
        "caminhoRelativo": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_09",
        "assuntos": "Raciocínio Sequencial",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_09/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf",
            "tipo": "aprovados",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_09/Aula_09_Livro_Eletronico_marcação_dos_aprovados.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_09/Aula_09_Livro_Eletronico_versão_original.pdf"
          },
          {
            "nome": "Aula_09_Livro_Eletronico_versão_simplificada.pdf",
            "tipo": "simplificada",
            "caminho": "Câmara_dos_Deputados_Raciocínio_Lógico_Matemático/Aula_09/Aula_09_Livro_Eletronico_versão_simplificada.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "nome": "Monitoria_Área_Legislativa",
    "caminhoRelativo": "Monitoria_Área_Legislativa",
    "totalAulas": 5,
    "criticidade": "Técnico",
    "impactoP3": "Baixo",
    "aulas": [
      {
        "aula": "Aula_00_Prof_Fábio_Dias",
        "caminhoRelativo": "Monitoria_Área_Legislativa/Aula_00_Prof_Fábio_Dias",
        "assuntos": "Como elaborar um bom planejamento de pré-edital.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Monitoria_Área_Legislativa/Aula_00_Prof_Fábio_Dias/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_00_Prof_Fábio_Dias_Livro_Eletronico_Baixar_Slides.pdf",
            "tipo": "slides",
            "caminho": "Monitoria_Área_Legislativa/Aula_00_Prof_Fábio_Dias/Aula_00_Prof_Fábio_Dias_Livro_Eletronico_Baixar_Slides.pdf"
          },
          {
            "nome": "Aula_00_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Monitoria_Área_Legislativa/Aula_00_Prof_Fábio_Dias/Aula_00_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_01_Prof_Fábio_Dias",
        "caminhoRelativo": "Monitoria_Área_Legislativa/Aula_01_Prof_Fábio_Dias",
        "assuntos": "Análise Estatística da Área Legislativa.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Monitoria_Área_Legislativa/Aula_01_Prof_Fábio_Dias/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_01_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Monitoria_Área_Legislativa/Aula_01_Prof_Fábio_Dias/Aula_01_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_02_Prof_Fábio_Dias",
        "caminhoRelativo": "Monitoria_Área_Legislativa/Aula_02_Prof_Fábio_Dias",
        "assuntos": "As ferramentas mais utilizadas no ciclo de estudos.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Monitoria_Área_Legislativa/Aula_02_Prof_Fábio_Dias/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_02_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Monitoria_Área_Legislativa/Aula_02_Prof_Fábio_Dias/Aula_02_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_03_Prof_Fábio_Dias",
        "caminhoRelativo": "Monitoria_Área_Legislativa/Aula_03_Prof_Fábio_Dias",
        "assuntos": "Como realizar boas revisões e quais os principais métodos existentes.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Monitoria_Área_Legislativa/Aula_03_Prof_Fábio_Dias/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_03_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Monitoria_Área_Legislativa/Aula_03_Prof_Fábio_Dias/Aula_03_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf"
          }
        ]
      },
      {
        "aula": "Aula_04_Prof_Fábio_Dias",
        "caminhoRelativo": "Monitoria_Área_Legislativa/Aula_04_Prof_Fábio_Dias",
        "assuntos": "Estratégias para acertar mais questões.",
        "arquivos": [
          {
            "nome": "Assuntos_dessa_aula.txt",
            "tipo": "texto",
            "caminho": "Monitoria_Área_Legislativa/Aula_04_Prof_Fábio_Dias/Assuntos_dessa_aula.txt"
          },
          {
            "nome": "Aula_04_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf",
            "tipo": "original",
            "caminho": "Monitoria_Área_Legislativa/Aula_04_Prof_Fábio_Dias/Aula_04_Prof_Fábio_Dias_Livro_Eletronico_versão_original.pdf"
          }
        ]
      }
    ]
  }
];
