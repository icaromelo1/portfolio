export type Estado =
  | 'Estável, em uso'
  | 'Em desenvolvimento'
  | 'Finalizado'
  | 'Pausado'
  | 'Descontinuado';

export interface Projeto {
  id: string;
  nome: string;
  linha: string;
  descricao?: string;
  stack: string[];
  estado: Estado;
  repo?: string;
  noAr?: string;
  imagem?: string;
}

export const destaques: Projeto[] = [
  {
    id: 'icarus',
    nome: 'Icarus Journey',
    linha: 'Roguelite de ação isométrico em 3D, com mitologia grega, nórdica e egípcia.',
    descricao:
      'Um único código em TypeScript roda no navegador, no computador (Electron) e no celular (Capacitor), com servidor próprio para progresso e ranking. A demo está no ar e o lançamento na Steam está em preparação.',
    stack: ['TypeScript', 'Vue 3', 'Babylon.js', 'Hono', 'SQLite', 'Electron', 'Capacitor'],
    estado: 'Em desenvolvimento',
    noAr: 'https://icaromelodev.com.br/icarusjourney/',
    imagem: '/projetos/icarus.jpg',
  },
  {
    id: 'kairos',
    nome: 'Kairos',
    linha: 'Espaço virtual multiusuário em pixel art, com conversa por proximidade.',
    descricao:
      'Áudio e vídeo entre participantes por WebRTC, presença em tempo real por Socket.IO e uma biblioteca de componentes própria no estilo pixel art. Os mundos ficam no banco, em formato próprio, e são editados no navegador.',
    stack: ['Vue 3', 'Quasar', 'NestJS', 'PostgreSQL', 'Socket.IO', 'WebRTC'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/kairosio',
    noAr: 'https://icaromelodev.com.br/kairos',
    imagem: '/projetos/kairos.jpg',
  },
  {
    id: 'oraculo',
    nome: 'Oráculo',
    linha: 'Assistente que responde sobre uma infraestrutura de desenvolvimento e cita a fonte de cada resposta.',
    descricao:
      'Busca léxica num acervo pequeno e curado, cheio de identificadores exatos, em vez de busca vetorial: rende mais e dispensa um segundo modelo rodando o tempo todo. Quando duas fontes divergem, a resposta diz isso.',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Vue 3', 'Quasar'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/oraculo-api',
    imagem: '/projetos/oraculo.jpg',
  },
];

export const outros: Projeto[] = [
  {
    id: 'brain',
    nome: 'Brain Atlas',
    linha: 'Visualiza em tempo real o raciocínio de um agente de IA, por fluxo de eventos.',
    stack: ['Canvas 2D', 'SSE', 'Python'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/brain-atlas',
  },
  {
    id: 'escritorio',
    nome: 'Escritório',
    linha: 'Correio ponto a ponto entre sessões de agente de IA, sem orquestrador central.',
    stack: ['TypeScript', 'MCP', 'Node.js'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/escritorio',
  },
  {
    id: 'claudicaro',
    nome: 'Claudicaro CLI',
    linha: 'App de desktop que alterna ferramentas de IA de linha de comando na mesma conversa.',
    stack: ['Electron', 'Vue 3', 'Prisma', 'SQLite'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/claudicaro-cli',
  },
  {
    id: 'wildpie',
    nome: 'Wild Pie',
    linha: 'Emissão de nota fiscal de serviço automatizada sobre o portal público, que não tem API.',
    stack: ['NestJS', 'Playwright', 'Vue 3'],
    estado: 'Em desenvolvimento',
  },
  {
    id: 'minecraft',
    nome: 'Servidor sob demanda',
    linha: 'Servidor de jogo que liga no primeiro acesso, com backup no desligamento e administração pelo Discord.',
    stack: ['TypeScript', 'Docker', 'RCON'],
    estado: 'Pausado',
    repo: 'https://github.com/icaroMelo1/discord-bots',
  },
  {
    id: 'psi',
    nome: 'Landing de psicologia',
    linha: 'Peça de referência comercial com dez temas visuais intercambiáveis.',
    stack: ['Vue 3', 'Quasar', 'Vite'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/psi-landing',
  },
  {
    id: 'barrel',
    nome: 'Barrel',
    linha: 'App macOS para rodar jogos de Windows, encerrado depois de diagnosticar defeitos no próprio Wine.',
    stack: ['Swift', 'SwiftUI', 'Wine'],
    estado: 'Descontinuado',
    repo: 'https://github.com/icaroMelo1/barrel',
  },
  {
    id: 'wallet',
    nome: 'Personal Wallet',
    linha: 'Base de backend autenticado com métricas expostas desde o primeiro commit.',
    stack: ['NestJS', 'JWT', 'MySQL', 'Prometheus'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/personal-wallet',
  },
];
