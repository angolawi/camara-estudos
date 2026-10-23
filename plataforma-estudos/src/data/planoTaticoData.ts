export interface AutorLinguistica {
  nome: string;
  obraBase: string;
  corrente: string;
  focoCebraspe: string;
  citacaoChave: string;
}

export interface RegraOuroCebraspe {
  titulo: string;
  descricao: string;
  exemploPratico: string;
}

export const AUTORES_LINGUISTICA: AutorLinguistica[] = [
  {
    nome: 'Ferdinand de Saussure',
    corrente: 'Estruturalismo Clássico',
    obraBase: 'Curso de Linguística Geral',
    focoCebraspe: 'Natureza bifásica do signo linguístico (significante acústico/gráfico vs. significado conceito mental); Princípios da arbitrariedade do signo e da linearidade do significante; Dicotomias essenciais: língua (social/sistema) vs. fala (individual/execução), sincronia vs. diacronia, sintagma vs. paradigma e a teoria do valor linguístico.',
    citacaoChave: 'A língua é um sistema de signos arbitrários em que não há mais do que diferenças sem termos positivos.'
  },
  {
    nome: 'Mikhail Bakhtin & O Círculo',
    corrente: 'Filosofia da Linguagem / Dialogismo',
    obraBase: 'Estética da Criação Verbal / Marxismo e Filosofia da Linguagem',
    focoCebraspe: 'Conceito de enunciado como unidade real de comunicação discursiva; Gêneros do discurso (primários/cotidianos vs. secundários/complexos, como o discurso parlamentar e a ata legislativa); Polifonia, dialogismo e esferas sociais de comunicação aplicadas ao ambiente legislativo.',
    citacaoChave: 'O enunciado reflete as condições específicas e as finalidades de cada esfera da atividade humana.'
  },
  {
    nome: 'Émile Benveniste',
    corrente: 'Teoria da Enunciação',
    obraBase: 'Problemas de Linguística Geral',
    focoCebraspe: 'O aparelho formal da enunciação; A constituição da subjetividade na linguagem (eu/tu/ele); Dêixis (indicadores espaciais, temporais e pessoais); Distinção seminal entre a enunciação (o ato individual de utilização da língua) e o enunciado (o produto linguístico gerado).',
    citacaoChave: 'É na linguagem e pela linguagem que o homem se constitui como sujeito.'
  },
  {
    nome: 'Luiz Antônio Marcuschi & Ingedore Koch',
    corrente: 'Linguística de Texto e Retextualização',
    obraBase: 'Da Fala para a Escrita: Atividades de Retextualização / Coesão e Coerência',
    focoCebraspe: 'Autor nº 1 da banca para o cargo de Registro e Redação! Processos de retextualização; O contínuo fala-escrita (não há dicotomia estanque); Eliminação de marcas de oralidade, hesitações, digressões e falsos começos sem desvirtuar o conteúdo semântico do orador parlamentar.',
    citacaoChave: 'A passagem da fala para a escrita não é uma tradução mecânica, mas uma recriação textual orientada pelo novo gênero.'
  }
];

export const REGRAS_OURO_CEBRASPE: RegraOuroCebraspe[] = [
  {
    titulo: 'Omissão Calculada (Proteja seu colchão de pontos)',
    descricao: 'Uma errada anula uma certa. Em questões onde restarem dúvidas conceituais insolúveis (especialmente em tópicos com palavras restritivas dúbias), deixe em branco. A meta do topo é de 8% a 12% da prova em branco.',
    exemploPratico: 'Se você acertar 80 itens, errar 10 e deixar 10 em branco num bloco de 100 itens, sua nota líquida será 70 pontos (excelente). Se tentar chutar os 10 e errar 8 deles, sua nota cai para 62!'
  },
  {
    titulo: 'O Filtro das Palavras Extremas',
    descricao: 'Desconfie sumariamente de itens do Cebraspe que contenham "sempre", "nunca", "exclusivamente", "em qualquer hipótese", "obrigatoriamente". No direito e na linguagem pública, quase toda regra admite exceção.',
    exemploPratico: 'Item que afirma: "A criação de empresas públicas independe em qualquer hipótese de lei autorizativa" -> Errado na hora.'
  },
  {
    titulo: 'Objetividade Cirúrgica na Discursiva (Sem Encheção de Linguiça)',
    descricao: 'O examinador do Cebraspe corrige a discursiva com um espelho de tópicos na mão buscando palavras-chave pontuadas. Não perca linhas preciosas com introduções poéticas.',
    exemploPratico: 'Comando pede 3 tópicos: Tópico 1 no Parágrafo 1; Tópico 2 no Parágrafo 2; Tópico 3 no Parágrafo 3. Simples, direto e garantidor de nota máxima.'
  }
];

export const PIPELINE_RETEXTUALIZACAO = [
  {
    passo: '1. Áudio Bruto Parlamentar',
    descricao: 'Discurso pronunciado em comissão ou no plenário Ulysses Guimarães, com sobreposição de vozes, apartes, hesitações e ruído ambiente.'
  },
  {
    passo: '2. Transcrição Primária (ASR / Whisper)',
    descricao: 'Modelo de reconhecimento automático de fala gera o primeiro rascunho de texto e separa os locutores provisórios (Diarização).'
  },
  {
    passo: '3. Análise da Taquigrafia / Registro',
    descricao: 'Notas taquigráficas captam pausas, apartes concedidos e negações de fala pelo Presidente da Mesa Diretora.'
  },
  {
    passo: '4. Intervenção do Analista (Retextualização Marcuschi)',
    descricao: 'O Analista de Registro e Redação suprime cacoetes (né, veja bem, tá), corrige sintaxe truncada, preserva o vocabulário e estilo do orador sem falsificar as intenções políticas.'
  },
  {
    passo: '5. Publicação no Diário da Câmara dos Deputados (DCD)',
    descricao: 'O texto legislativo oficializado integra os anais do Congresso Nacional com valor probatório para a história da República.'
  }
];
