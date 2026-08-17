export type Estado = 'Estável, em uso' | 'Em desenvolvimento' | 'Finalizado' | 'Pausado';

export interface Projeto {
  id: string;
  nome: string;
  linha: string;
  descricao: string;
  stack: string[];
  estado: Estado;
  /** URL do repositório. Só é renderizada quando `repoPublico` for true. */
  repo?: string;
  repoPublico: boolean;
  /** URL do deploy — todas verificadas respondendo 200. */
  noAr?: string;
  imagem?: string;
}

/**
 * Fonte única dos projetos da vitrine.
 *
 * `repoPublico: false` esconde o link do repositório — vários ainda são privados
 * (etapa de liberação). Ao tornar um repositório público, basta virar a flag aqui.
 *
 * As stacks foram conferidas contra o package.json / código de cada projeto.
 */
export const projetos: Projeto[] = [
  {
    id: 'kairos',
    nome: 'Kairos',
    linha: 'Ambiente virtual gamificado onde se trabalha dentro de um mapa, ao lado de agentes de IA.',
    descricao:
      'Acompanhar agentes por texto não mostra o que eles fazem entre si. O estado do mundo virou a fonte de verdade e é ele que se desenha na tela; cada agente lê e escreve nesse estado, então dá para pausar e inspecionar sem parar tudo.',
    stack: ['Vue 3', 'Quasar', 'PixiJS', 'NestJS', 'TypeORM', 'PostgreSQL'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/kairosio',
    repoPublico: false,
    noAr: 'https://icaromelodev.com.br/kairos',
  },
  {
    id: 'oraculo',
    nome: 'Oráculo',
    linha: 'Chat que responde a partir de um acervo de documentos próprio, para consulta interna.',
    descricao:
      'Resposta plausível sem fonte não serve para nada. A recuperação acontece antes da geração, e o modelo ganhou ferramentas para buscar o que não está indexado em vez de improvisar. Quando não encontra, diz que não encontrou.',
    stack: ['NestJS', 'TypeScript', 'Vue 3', 'Quasar', 'RAG'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/oraculo-api',
    repoPublico: false,
    noAr: 'https://icaromelodev.com.br/oraculo/',
  },
  {
    id: 'brain',
    nome: 'Brain Atlas',
    linha: 'Visualizador que acende em tempo real enquanto um agente de IA raciocina.',
    descricao:
      'Gráfico gerado depois do fato não explica comportamento. O estado chega ao navegador por streaming e é desenhado quadro a quadro; a decisão menos óbvia foi aceitar descartar quadros quando a origem atrasa, porque leitura contínua importa mais que fidelidade absoluta.',
    stack: ['Canvas 2D', 'SSE', 'Python', 'HTML'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/brain-atlas',
    repoPublico: true,
    noAr: 'https://icaromelodev.com.br/brain',
  },
  {
    id: 'apply',
    nome: 'Apply',
    linha: 'Busca e candidatura automatizada a vagas, feito para uso próprio.',
    descricao:
      'Refazer a mesma triagem manualmente todo dia era desperdício. A coleta e a candidatura ficaram separadas por uma fila, de forma que quando um portal muda de layout só a coleta quebra — o histórico e as candidaturas seguem intactos.',
    stack: ['TypeScript', 'Playwright', 'Drizzle', 'SQLite', 'Nuxt 4'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/apply-service',
    repoPublico: false,
    noAr: 'https://apply.icaromelodev.com.br',
  },
  {
    id: 'escritorio',
    nome: 'Escritório',
    linha: 'Troca de mensagens ponto a ponto entre sessões de agente na mesma máquina.',
    descricao:
      'Duas sessões trabalhando no mesmo problema não tinham como se falar sem um servidor no meio. Optei por caixa de entrada em arquivo, com entrega assíncrona: quem está ocupado lê depois, e nada se perde se uma sessão morrer.',
    stack: ['TypeScript', 'MCP', 'Node'],
    estado: 'Em desenvolvimento',
    repoPublico: false,
  },
  {
    id: 'claudicaro',
    nome: 'Claudicaro CLI',
    linha: 'Aplicativo de desktop para operar vários modelos de IA na mesma tarefa.',
    descricao:
      'Alternar entre janelas fazia perder o fio do que já tinha sido tentado. O histórico ficou fora do provedor, num formato próprio, então trocar de modelo no meio de uma tarefa não recomeça o contexto.',
    stack: ['Electron', 'Vue 3', 'Quasar', 'TypeScript', 'Prisma', 'SQLite'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/claudicaro-cli',
    repoPublico: false,
  },
  {
    id: 'wildpie',
    nome: 'Wild Pie',
    linha: 'Emissão de nota fiscal de serviço para quem é MEI e emite sempre a mesma coisa.',
    descricao:
      'O portal público não tem integração, então a automação dirige o navegador. Como o layout muda sem aviso, cada passo verifica o que encontrou antes de seguir e para com erro claro em vez de emitir errado.',
    stack: ['NestJS', 'Playwright', 'Vue 3', 'Quasar', 'TypeORM', 'SQLite'],
    estado: 'Em desenvolvimento',
    repoPublico: false,
  },
  {
    id: 'psi',
    nome: 'Landing de psicologia clínica',
    linha: 'Página de apresentação e agendamento para consultório particular.',
    descricao:
      'O consultório não tinha quem mantivesse um site. Entreguei conteúdo estático com o texto em arquivo editável e sistema de temas trocável, de modo que uma alteração de horário não passe por mim.',
    stack: ['Vue 3', 'Quasar', 'Vite'],
    estado: 'Finalizado',
    repoPublico: false,
    noAr: 'https://icaromelodev.com.br/referencia-projeto-psicologo/',
  },
  {
    id: 'minecraft',
    nome: 'Guardian & mapa de servidor',
    linha: 'Bot de operação e mapa navegável de um mundo de Minecraft, para quem joga nele.',
    descricao:
      'Renderizar o mundo inteiro a cada visita era caro e desnecessário. A geração passou a ser em ladrilhos, calculados uma vez e servidos como imagem estática, então o navegador só pede o pedaço que está na tela.',
    stack: ['Node.js', 'TypeScript', 'mineflayer', 'RCON', 'Docker'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/discord-bots',
    repoPublico: false,
    noAr: 'https://icaromelodev.com.br/minecraft/map/',
  },
  {
    id: 'wallet',
    nome: 'Personal Wallet',
    linha: 'Ponto de partida de backend para projetos que precisam de login.',
    descricao:
      'Repetia a mesma configuração de autenticação a cada projeto novo. Deixei métricas expostas desde o primeiro commit, porque acrescentar observabilidade depois sempre custa mais do que parece.',
    stack: ['NestJS', 'JWT', 'TypeORM', 'MySQL', 'Prometheus'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/personal-wallet',
    repoPublico: false,
  },
  {
    id: 'barrel',
    nome: 'Barrel',
    linha: 'Aplicativo macOS nativo para rodar jogos de Windows via Wine.',
    descricao:
      'Comecei para aprender a plataforma pelo caminho difícil, sem camada web — gerência de prefixos do Wine, download de builds e instalação, tudo em SwiftUI. Está pausado: o que eu queria entender sobre ciclo de vida e persistência do sistema já ficou claro.',
    stack: ['Swift', 'SwiftUI', 'Wine'],
    estado: 'Pausado',
    repoPublico: false,
  },
  {
    id: 'site',
    nome: 'icaromelodev.com.br',
    linha: 'Este site: portfólio próprio, escrito e mantido por mim.',
    descricao:
      'A versão anterior listava tecnologias e não mostrava trabalho. Refiz a partir do conteúdo: cada projeto tem a mesma anatomia e o estado dito na frente, o que me obriga a manter a informação honesta em vez de deixar tudo parecer pronto.',
    stack: ['Vue 3', 'Quasar', 'Vite'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/portfolio',
    repoPublico: false,
    noAr: 'https://icaromelodev.com.br',
  },
];

export const estados: Estado[] = [
  'Estável, em uso',
  'Em desenvolvimento',
  'Finalizado',
  'Pausado',
];
