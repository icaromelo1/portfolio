export interface NoDiagrama {
  texto: string;
  forte?: boolean;
}

export interface Diagrama {
  titulo: string;
  nos: NoDiagrama[];
  nota?: string;
}

export interface Experiencia {
  id: string;
  /** Coluna de rótulo, três linhas. A intermediária recebe o acento. */
  rotulo: [string, string, string];
  titulo: string;
  resumo: string;
  pontos: string[];
  diagrama: Diagrama;
}

/**
 * Regras de conteúdo aplicadas aqui:
 * Sem tamanho de equipe.
 * Sem contagem do desenho interno do cliente (microsserviços, tabelas, filas).
 * Afirmações de liderança sempre datadas com "atualmente".
 * Cada resultado atribuído à organização em que ocorreu.
 */
export const experiencias: Experiencia[] = [
  {
    id: 'saude',
    rotulo: ['Atualmente', 'Saúde ocupacional', 'API central'],
    titulo: 'Plataforma de saúde ocupacional',
    resumo:
      'Atualmente sou o principal desenvolvedor da API central, serviço pelo qual os demais passam para ler e gravar dados clínicos e administrativos. A arquitetura é distribuída em microsserviços, com mensageria assíncrona entre as partes que dispensam resposta imediata.',
    pontos: [
      'A maior parte da minha atuação é de sustentação: intervir em um sistema já em operação, compreender seu funcionamento real e alterá-lo preservando o comportamento existente.',
      'Diagnostiquei uma condição de corrida em produção que gerava registros duplicados de forma intermitente. Documentei com linha do tempo e evidências, e resolvi com restrição de unicidade no banco mais idempotência nas guardas.',
      'Estruturei um ecossistema de agentes de IA para a equipe, composto por um orquestrador e especialistas de domínio, com memória em dois níveis. A ferramenta é de uso interno da equipe e não integra funcionalidades do produto.',
    ],
    diagrama: {
      titulo: 'Como o dado atravessa',
      nos: [
        { texto: 'Clientes' },
        { texto: 'API central', forte: true },
        { texto: 'Fila' },
        { texto: 'Serviços de domínio' },
      ],
      nota: 'o que dispensa resposta imediata segue pela fila',
    },
  },
  {
    id: 'tjam',
    rotulo: ['Judiciário', 'TJ do Amazonas', 'Do desenho ao deploy'],
    titulo: 'Tribunal de Justiça do Amazonas',
    resumo:
      'Desenvolvi e mantenho três sistemas internos: contratos, senhas e documentos. Participei de cada um desde o levantamento junto aos usuários até o deploy e a manutenção, com o procedimento administrativo compreendido antes do projeto da interface.',
    pontos: [
      'Implementei a observabilidade dos sistemas: rastreamento distribuído com OpenTelemetry e propagação de correlation ID, Elastic APM nas extremidades e métricas em Prometheus. Até então, a investigação de incidentes em produção dependia da leitura sequencial de registros.',
      'Projetei um sistema de filas com fila de mensagens mortas, repetição automática e workers concorrentes, persistido no próprio banco e sem dependência de broker externo, reduzindo um componente de infraestrutura em ambiente sem equipe de plantão.',
      'O sistema de senhas exigia impressão em equipamento térmico a partir do navegador, que não acessa hardware diretamente. Desenvolvi um agente executado na máquina de atendimento, em comunicação com a página em tempo real, distribuído como executável único para Windows, macOS e Linux e sem necessidade de driver.',
      'Integrei a autenticação corporativa com Keycloak e o diretório da instituição, com papéis atribuídos por perfil de usuário, além das esteiras de entrega até o Kubernetes nos três ambientes.',
    ],
    diagrama: {
      titulo: 'Três sistemas, uma base',
      nos: [
        { texto: 'Contratos' },
        { texto: 'Senhas' },
        { texto: 'Documentos' },
        { texto: 'Autenticação e auditoria comuns', forte: true },
      ],
      nota: 'os três seguem em uso; migração de dados é requisito',
    },
  },
  {
    id: 'techlead',
    rotulo: ['Passagem', 'Tech Lead', 'Quatro frentes'],
    titulo: 'Condução técnica',
    resumo:
      'Atuei como Tech Lead conduzindo quatro projetos simultâneos, com responsabilidade sobre revisão de código, arquitetura, alinhamento com clientes e planejamento. A principal dificuldade estava em manter quatro frentes de prioridades distintas avançando sem que uma decisão em uma delas inviabilizasse outra.',
    pontos: [
      'Reduzi uma consulta crítica de dois a três minutos para dez a quinze segundos, com indexação estratégica e reestruturação dos JOINs num banco relacional sob carga alta.',
      'Implantei a cultura de testes da equipe, cobrindo testes unitários e de ponta a ponta, e a prática de descrever o comportamento esperado antes da implementação.',
      'Orquestrei fluxos de processo de negócio complexos por uma ferramenta interna, atendendo clientes com regras bem diferentes entre si.',
    ],
    diagrama: {
      titulo: 'A consulta que travava',
      nos: [
        { texto: 'JOINs em cascata' },
        { texto: 'Índices + reescrita', forte: true },
        { texto: '2–3 min → 10–15 s' },
      ],
    },
  },
];
