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
 * `repoPublico: false` esconde o link do repositório — vários ainda são privados.
 * Ao tornar um repositório público, basta virar a flag aqui.
 *
 * Cada descrição diz o problema e a decisão técnica que não era óbvia. Nada aqui
 * expõe host, credencial ou desenho interno de sistema de cliente.
 */
export const projetos: Projeto[] = [
  {
    id: 'kairos',
    nome: 'Kairos',
    linha: 'Espaço virtual multiusuário em pixel art, onde as pessoas se veem e conversam por proximidade.',
    descricao:
      'Guardar os mapas num formato de editor de jogos resolveria rápido, e fecharia a porta principal: quem usa o espaço precisa poder montar o próprio. Os mundos viraram dados no banco, num formato meu, e o editor roda dentro do navegador lendo e escrevendo esse mesmo formato — sem ninguém precisar instalar nada.',
    stack: ['Vue 3', 'Quasar', 'PixiJS', 'NestJS', 'TypeORM', 'PostgreSQL', 'Socket.IO', 'WebRTC'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/kairosio',
    repoPublico: true,
    noAr: 'https://icaromelodev.com.br/kairos',
    imagem: '/projetos/kairos.jpg',
  },
  {
    id: 'oraculo',
    nome: 'Oráculo',
    linha: 'Assistente que responde sobre a minha infraestrutura de desenvolvimento, citando a fonte.',
    descricao:
      'O caminho esperado era vetorizar tudo e buscar por similaridade. Não usei: o acervo é pequeno, curado e cheio de identificador exato — nome de método, código de tarefa — onde busca léxica acerta mais e não exige um segundo modelo rodando. Quando duas fontes discordam, a resposta diz que discordam em vez de escolher em silêncio.',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Vue 3', 'Quasar'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/oraculo-api',
    repoPublico: true,
    noAr: 'https://icaromelodev.com.br/oraculo/',
    imagem: '/projetos/oraculo.jpg',
  },
  {
    id: 'apply',
    nome: 'Apply',
    linha: 'Serviço que encontra vagas, monta o currículo sob medida para cada uma e se candidata sozinho.',
    descricao:
      'A parte difícil não foi preencher formulário: foi decidir quando não preencher. O serviço monta o currículo no idioma da vaga e responde só o que está documentado sobre mim — sem respaldo, ele para e pede revisão em vez de inventar. Em pergunta de autodeclaração, declina quando há a opção; quando é obrigatória e não há saída, descarta a vaga inteira.',
    stack: ['TypeScript', 'Playwright', 'Drizzle', 'SQLite', 'Nuxt 4', 'Quasar'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/apply-service',
    repoPublico: true,
    noAr: 'https://apply.icaromelodev.com.br',
  },
  {
    id: 'escritorio',
    nome: 'Escritório',
    linha: 'Correio ponto a ponto entre sessões de agente, para que uma consulte a outra sem intermediário.',
    descricao:
      'A saída óbvia era um orquestrador central mandando em todo mundo. Preferi não ter dono: o correio carrega só duas regras — cada mensagem repassada gasta um salto, e quem abriu a conversa é quem a encerra. Isso basta para não haver laço infinito. Ao fechar, o colega destila o que aprendeu num arquivo de texto legível, então a memória de longo prazo dá para ler e corrigir à mão.',
    stack: ['TypeScript', 'MCP', 'Node.js'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/escritorio',
    repoPublico: true,
  },
  {
    id: 'brain',
    nome: 'Brain Atlas',
    linha: 'Visualizador que acende em tempo real enquanto um agente de IA raciocina.',
    descricao:
      'Gráfico montado depois do fato não explica comportamento — mostra o resultado, não o percurso. O estado sai por um fluxo de eventos e é desenhado enquanto acontece; quando a origem atrasa, quadros são descartados de propósito, porque leitura contínua vale mais do que ver todos os passos.',
    stack: ['Canvas 2D', 'SSE', 'Python', 'HTML'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/brain-atlas',
    repoPublico: true,
    noAr: 'https://icaromelodev.com.br/brain',
    imagem: '/projetos/brain.jpg',
  },
  {
    id: 'claudicaro',
    nome: 'Claudicaro CLI',
    linha: 'Aplicativo de desktop que opera várias ferramentas de IA de linha de comando na mesma conversa.',
    descricao:
      'Cada ferramenta guarda a própria sessão e não conhece as outras, então trocar no meio de uma tarefa recomeçava o raciocínio do zero. O histórico passou a viver do meu lado, em banco local: quando uma falha ou não é a melhor para o pedido, a próxima recebe o contexto já acumulado e continua de onde parou.',
    stack: ['Electron', 'Vue 3', 'Quasar', 'TypeScript', 'Prisma', 'SQLite', 'Vitest'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/claudicaro-cli',
    repoPublico: true,
  },
  {
    id: 'minecraft',
    nome: 'Servidor sob demanda',
    linha: 'Servidor de jogo que dorme sozinho e acorda quando alguém entra, com bot de operação no Discord.',
    descricao:
      'Manter a máquina ligada o tempo todo para um servidor usado à noite é desperdício, mas acordar a cada batida de porta é pior: varredores automáticos batem o dia inteiro. Só quem está na lista de permissão consegue acordar a máquina. E o backup é disparado pelo próprio evento de desligamento, o que garante que a última sessão jogada sempre entra na cópia.',
    stack: ['TypeScript', 'Node.js', 'Docker', 'RCON', 'systemd'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/discord-bots',
    repoPublico: true,
  },
  {
    id: 'wildpie',
    nome: 'Wild Pie',
    linha: 'Emissão de nota fiscal de serviço para quem é MEI e emite sempre a mesma coisa.',
    descricao:
      'O portal público não oferece integração, então a automação dirige o navegador — e o layout muda sem aviso. Cada passo confere o que encontrou antes de seguir e para com erro explícito em vez de continuar no escuro. Numa automação fiscal, falhar alto é o comportamento correto: emitir errado custa mais do que não emitir.',
    stack: ['NestJS', 'Playwright', 'Vue 3', 'Quasar', 'TypeORM', 'SQLite'],
    estado: 'Em desenvolvimento',
    repoPublico: false,
  },
  {
    id: 'psi',
    nome: 'Landing de psicologia clínica',
    linha: 'Landing de psicologia clínica feita como peça de referência, com identidade fictícia.',
    descricao:
      'Projeto de referência: uma landing completa, com identidade fictícia, para mostrar a um cliente o resultado antes de fechar o trabalho. O conteúdo mora num arquivo de texto e a identidade num sistema de temas trocáveis, então trocar a paleta inteira ou o texto não exige tocar em componente nenhum.',
    stack: ['Vue 3', 'Quasar', 'Vite'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/psi-landing',
    repoPublico: true,
    noAr: 'https://icaromelodev.com.br/referencia-projeto-psicologo/',
    imagem: '/projetos/psi.jpg',
  },
  {
    id: 'wallet',
    nome: 'Personal Wallet',
    linha: 'Base de backend autenticado, ponto de partida para projetos que precisam de login.',
    descricao:
      'Eu repetia a mesma configuração de autenticação a cada projeto novo. Deixei as métricas expostas desde o primeiro commit, porque acrescentar observabilidade depois sempre custa mais do que parece — e é exatamente o que se corta quando o prazo aperta.',
    stack: ['NestJS', 'JWT', 'TypeORM', 'MySQL', 'Prometheus'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/personal-wallet',
    repoPublico: true,
  },
  {
    id: 'barrel',
    nome: 'Barrel',
    linha: 'Aplicativo macOS nativo para rodar jogos de Windows, feito porque os que eu usava morreram.',
    descricao:
      'Comecei quando o programa que eu usava foi descontinuado e as alternativas ou eram de outro sistema ou estavam abandonadas. Fiz nativo de propósito, sem camada web, para aprender a plataforma pelo caminho difícil. Está pausado num problema honesto: o cliente de jogos abre com a janela em branco, e a causa é o processo gráfico dele falhando em silêncio sob a camada de compatibilidade.',
    stack: ['Swift', 'SwiftUI', 'Wine'],
    estado: 'Pausado',
    repo: 'https://github.com/icaroMelo1/barrel',
    repoPublico: true,
  },
  {
    id: 'site',
    nome: 'Este site',
    linha: 'Portfólio próprio, escrito e mantido por mim.',
    descricao:
      'A versão anterior listava tecnologias e não mostrava trabalho nenhum. Refiz a partir do conteúdo: todo projeto tem a mesma anatomia e o estado dito na frente, inclusive quando o estado é "pausado". Dizer o que não está de pé é o que dá crédito ao que está.',
    stack: ['Vue 3', 'Quasar', 'Vite'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/portfolio',
    repoPublico: true,
    noAr: 'https://icaromelodev.com.br',
  },
];

export const estados: Estado[] = [
  'Estável, em uso',
  'Em desenvolvimento',
  'Finalizado',
  'Pausado',
];
