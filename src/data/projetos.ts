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
  descricao: string;
  stack: string[];
  estado: Estado;
  /** Achados relevantes, exibidos como lista quando o projeto merece tratamento de caso. */
  achados?: string[];
  /** URL do repositório. Só é renderizada quando `repoPublico` for true. */
  repo?: string;
  repoPublico: boolean;
  /** URL do deploy. Todas verificadas respondendo 200. */
  noAr?: string;
  imagem?: string;
}

/**
 * Fonte única dos projetos da vitrine.
 *
 * `repoPublico: false` esconde o link do repositório, pois vários ainda são privados.
 * Ao tornar um repositório público, basta virar a flag aqui.
 *
 * Cada descrição apresenta a decisão técnica relevante do projeto. Nenhuma expõe
 * host, credencial ou desenho interno de sistema de cliente.
 */
export const projetos: Projeto[] = [
  {
    id: 'kairos',
    nome: 'Kairos',
    linha: 'Espaço virtual multiusuário em pixel art, com conversa por proximidade entre os participantes.',
    descricao:
      'Os mundos são armazenados como dados no banco, em formato próprio, e o editor executa no navegador lendo e gravando esse mesmo formato. Adotar o formato de um editor de jogos convencional resolveria mais rápido, mas exigiria que cada pessoa instalasse um programa externo para montar o próprio espaço, contrariando a proposta do produto.',
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
    linha: 'Assistente que responde sobre a infraestrutura de desenvolvimento indicando a fonte de cada informação.',
    descricao:
      'A recuperação de trechos é léxica. O acervo é pequeno, curado e composto em boa parte por identificadores exatos, como nomes de método e códigos de tarefa, cenário em que a busca por similaridade rende pouco e ainda exigiria um segundo modelo em execução permanente. Quando duas fontes divergem, a resposta declara a divergência.',
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
    linha: 'Serviço que localiza vagas, monta o currículo adequado a cada uma e realiza a candidatura.',
    descricao:
      'O serviço monta o currículo no idioma da vaga e responde apenas o que está documentado no perfil. Sem respaldo documental, interrompe o preenchimento e solicita revisão manual. Em perguntas de autodeclaração, seleciona a opção de não declarar quando ela existe; quando a resposta é obrigatória e não há alternativa, descarta a vaga.',
    stack: ['TypeScript', 'Playwright', 'Drizzle', 'SQLite', 'Nuxt 4', 'Quasar'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/apply-service',
    repoPublico: true,
    noAr: 'https://apply.icaromelodev.com.br',
    imagem: '/projetos/apply.svg',
  },
  {
    id: 'escritorio',
    nome: 'Escritório',
    linha: 'Correio ponto a ponto entre sessões de agente, para consulta direta entre elas.',
    descricao:
      'O correio opera sem orquestrador central. Duas regras garantem a terminação: cada repasse de mensagem consome um salto, e a conversa é encerrada por quem a abriu. Ao final, o participante consolida o que apurou em um arquivo de texto, mantendo a memória de longo prazo legível e editável manualmente.',
    stack: ['TypeScript', 'MCP', 'Node.js'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/escritorio',
    repoPublico: true,
    imagem: '/projetos/escritorio.svg',
  },
  {
    id: 'brain',
    nome: 'Brain Atlas',
    linha: 'Visualizador que representa em tempo real o raciocínio de um agente de IA.',
    descricao:
      'O estado é transmitido por fluxo de eventos e desenhado durante a execução, sem reconstrução posterior a partir dos registros. Quando a origem atrasa, quadros são descartados deliberadamente, priorizando a continuidade da leitura sobre a integralidade da sequência.',
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
    linha: 'Aplicativo de desktop que opera diferentes ferramentas de IA de linha de comando na mesma conversa.',
    descricao:
      'Cada ferramenta de linha de comando mantinha a própria sessão e desconhecia as demais, de modo que alternar entre elas no curso de uma tarefa reiniciava o raciocínio. O histórico passou a ser armazenado localmente, em banco próprio, e é repassado à ferramenta seguinte a cada troca.',
    stack: ['Electron', 'Vue 3', 'Quasar', 'TypeScript', 'Prisma', 'SQLite', 'Vitest'],
    estado: 'Em desenvolvimento',
    repo: 'https://github.com/icaroMelo1/claudicaro-cli',
    repoPublico: true,
    imagem: '/projetos/claudicaro.svg',
  },
  {
    id: 'minecraft',
    nome: 'Servidor sob demanda',
    linha: 'Servidor de jogo com inicialização sob demanda e administração pelo Discord.',
    descricao:
      'O servidor permanece suspenso enquanto não há jogadores e é iniciado no primeiro acesso. Como varreduras automatizadas tentam conexão continuamente, apenas endereços presentes na lista de permissão acionam a inicialização. O backup é disparado pelo evento de desligamento e inclui sempre a última sessão jogada.',
    stack: ['TypeScript', 'Node.js', 'Docker', 'RCON', 'systemd'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/discord-bots',
    repoPublico: true,
    imagem: '/projetos/minecraft.svg',
  },
  {
    id: 'wildpie',
    nome: 'Wild Pie',
    linha: 'Emissão de nota fiscal de serviço para microempreendedores com faturamento recorrente.',
    descricao:
      'O portal público não oferece integração programática, e a automação opera sobre a interface do navegador, cuja estrutura muda sem aviso prévio. Cada etapa valida o elemento localizado antes de prosseguir e interrompe a execução com erro explícito quando a validação falha. A interrupção evita a emissão de documento fiscal incorreto.',
    stack: ['NestJS', 'Playwright', 'Vue 3', 'Quasar', 'TypeORM', 'SQLite'],
    estado: 'Em desenvolvimento',
    repoPublico: false,
    imagem: '/projetos/wildpie.svg',
  },
  {
    id: 'psi',
    nome: 'Landing de psicologia clínica',
    linha: 'Landing de psicologia clínica desenvolvida como peça de referência, com identidade fictícia.',
    descricao:
      'Peça de referência comercial, com identidade fictícia, destinada a apresentar o resultado ao cliente antes do fechamento do trabalho. O conteúdo reside em arquivo de texto e a identidade visual em um sistema de temas intercambiáveis, permitindo alterar a paleta ou a redação sem modificar componentes.',
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
    linha: 'Base de backend autenticado para projetos que exigem controle de acesso.',
    descricao:
      'Base reaproveitável para projetos que exigem autenticação. As métricas são expostas desde o primeiro commit, por decisão de projeto: instrumentação acrescentada depois obriga a revisar código já estabilizado.',
    stack: ['NestJS', 'JWT', 'TypeORM', 'MySQL', 'Prometheus'],
    estado: 'Finalizado',
    repo: 'https://github.com/icaroMelo1/personal-wallet',
    repoPublico: true,
    imagem: '/projetos/wallet.svg',
  },
  {
    id: 'barrel',
    nome: 'Barrel',
    linha: 'Aplicativo macOS nativo para execução de jogos de Windows, encerrado após diagnóstico do motor.',
    descricao:
      'A interface e os serviços foram concluídos: download da build do Wine, criação e administração de prefixos, instalação de lojas e biblioteca de jogos. Concluída essa etapa, testei o motor empiricamente, com prefixos reais e instalação de clientes, em vez de validar por leitura de código. Os defeitos encontrados são do próprio motor e não admitem contorno por configuração.',
    achados: [
      'A Steam completa o handshake com o servidor, mas tem o login rejeitado de forma consistente. Reproduzido em prefixos independentes, incluindo instalação do zero.',
      'O launcher da Battle.net entra em deadlock na criação de memória compartilhada nomeada e nunca cria janela. A correção documentada pela comunidade foi testada e não alterou o comportamento.',
      'Descartei a camada de renderização como causa: aplicativos do próprio Wine desenham corretamente no mesmo prefixo. Descartei também a tradução por Rosetta 2, já que produtos comerciais equivalentes operam sobre ela.',
      'A alternativa avaliada, baseada no Apple Game Porting Toolkit, está especificada mas não implementada. Se resolve os defeitos é verificação empírica pendente, não premissa.',
    ],
    stack: ['Swift', 'SwiftUI', 'Wine'],
    estado: 'Descontinuado',
    repo: 'https://github.com/icaroMelo1/barrel',
    repoPublico: true,
    imagem: '/projetos/barrel.svg',
  },
  {
    id: 'site',
    nome: 'Este site',
    linha: 'Portfólio pessoal, desenvolvido e mantido por mim.',
    descricao:
      'A versão anterior relacionava tecnologias sem apresentar trabalho executado. A reformulação partiu do conteúdo: todos os projetos seguem a mesma estrutura e declaram o estado em que se encontram, inclusive quando suspensos.',
    stack: ['Vue 3', 'Quasar', 'Vite'],
    estado: 'Estável, em uso',
    repo: 'https://github.com/icaroMelo1/portfolio',
    repoPublico: true,
    noAr: 'https://icaromelodev.com.br',
    imagem: '/projetos/site.jpg',
  },
];

export const estados: Estado[] = [
  'Estável, em uso',
  'Em desenvolvimento',
  'Finalizado',
  'Pausado',
  'Descontinuado',
];
