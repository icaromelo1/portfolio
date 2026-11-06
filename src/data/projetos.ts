export type Estado =
  | 'Estável, em uso'
  | 'Em desenvolvimento'
  | 'Finalizado'
  | 'Pausado'
  | 'Descontinuado';

export interface Parte {
  nome: string;
  texto: string;
}

export interface Projeto {
  id: string;
  nome: string;
  linha: string;
  descricao: string;
  stack: string[];
  estado: Estado;
  partes?: Parte[];
  noAr?: string;
  imagem?: string;
}

export const projetos: Projeto[] = [
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
    noAr: 'https://icaromelodev.com.br/kairos',
    imagem: '/projetos/kairos.jpg',
  },
  {
    id: 'infra',
    nome: 'Infraestrutura própria',
    linha: 'O servidor que hospeda este site e todos os projetos acima, montado e operado por mim.',
    descricao:
      'Uma máquina na nuvem com cada aplicação em contêiner atrás de um proxy reverso com HTTPS automático. Projeto novo entra por uma regra de caminho, sem mexer em DNS. Cada repositório tem esteira própria: todo commit é construído e o que chega na main vai para produção sozinho.',
    partes: [
      { nome: 'Banco', texto: 'Um PostgreSQL compartilhado, com usuário e schema isolados por projeto e acesso só por túnel.' },
      { nome: 'Homologação', texto: 'Cada projeto tem um ambiente de testes com API e banco próprios, protegido por senha.' },
      { nome: 'Operação', texto: 'Backup automático para a nuvem, que só roda quando houve mudança, e painéis de monitoramento de contêineres e recursos.' },
    ],
    stack: ['Linux', 'Docker', 'Traefik', 'Jenkins', 'PostgreSQL', 'Nginx'],
    estado: 'Estável, em uso',
  },
  {
    id: 'ia',
    nome: 'Ferramentas de IA para desenvolvimento',
    linha: 'As ferramentas de IA que eu mesmo uso no dia a dia, construídas por mim.',
    descricao:
      'Uso agentes de IA no trabalho diário e fui construindo o que faltava em volta deles: comunicação entre agentes, troca de ferramenta sem perder o contexto e visibilidade do que o agente está fazendo.',
    partes: [
      { nome: 'Escritório', texto: 'Correio entre sessões de agente, sem orquestrador central, para que um consulte o outro diretamente.' },
      { nome: 'Claudicaro CLI', texto: 'App de desktop que alterna ferramentas de IA de linha de comando na mesma conversa, sem perder o histórico.' },
      { nome: 'Brain Atlas', texto: 'Visualização em tempo real do raciocínio de um agente, desenhada a partir de um fluxo de eventos.' },
      { nome: 'Oráculo', texto: 'Assistente que responde sobre uma infraestrutura de desenvolvimento e cita a fonte de cada resposta.' },
    ],
    stack: ['TypeScript', 'MCP', 'Electron', 'NestJS', 'SSE'],
    estado: 'Estável, em uso',
  },
];
