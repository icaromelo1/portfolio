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
  /** Coluna de rótulo, três linhas. A do meio recebe o acento. */
  rotulo: [string, string, string];
  titulo: string;
  resumo: string;
  pontos: string[];
  diagrama: Diagrama;
}

/**
 * Regras de conteúdo aplicadas aqui:
 * — sem tamanho de equipe;
 * — sem contagem do desenho interno do cliente (nº de microsserviços, tabelas, filas);
 * — afirmações de liderança sempre datadas com "atualmente";
 * — cada resultado atribuído à empresa onde de fato aconteceu.
 */
export const experiencias: Experiencia[] = [
  {
    id: 'saude',
    rotulo: ['Atualmente', 'Saúde ocupacional', 'API central'],
    titulo: 'Plataforma de saúde ocupacional',
    resumo:
      'Atualmente sou o principal desenvolvedor da API central — o serviço pelo qual os outros passam para ler e escrever dados clínicos e administrativos. É uma arquitetura distribuída em microsserviços, com mensageria assíncrona entre as partes que não precisam de resposta imediata.',
    pontos: [
      'A maior parte do meu trabalho é sustentação: entrar num sistema que já existe, entender como ele funciona de verdade e mexer sem derrubar o que estava de pé.',
      'Diagnostiquei uma condição de corrida em produção que gerava registros duplicados de forma intermitente. Documentei com linha do tempo e evidências, e resolvi com restrição de unicidade no banco mais idempotência nas guardas.',
      'Montei um ecossistema de agentes de IA para o time — um orquestrador e especialistas de domínio, com memória em dois níveis. É ferramenta interna de desenvolvimento, não recurso de produto.',
    ],
    diagrama: {
      titulo: 'Como o dado atravessa',
      nos: [
        { texto: 'Clientes' },
        { texto: 'API central', forte: true },
        { texto: 'Fila' },
        { texto: 'Serviços de domínio' },
      ],
      nota: 'o que não precisa de resposta imediata sai pela fila',
    },
  },
  {
    id: 'tjam',
    rotulo: ['Judiciário', 'TJ do Amazonas', 'Do desenho ao deploy'],
    titulo: 'Tribunal de Justiça do Amazonas',
    resumo:
      'Desenvolvi e mantenho três sistemas internos: contratos, senhas e documentos. Participei de cada um desde o levantamento com quem ia usar até o deploy e a manutenção, o que significou aprender o procedimento antes de escrever a tela.',
    pontos: [
      'Implementei a observabilidade do zero: rastreamento distribuído com OpenTelemetry e propagação de correlation ID, Elastic APM nas pontas e métricas em Prometheus. Antes disso, investigar um erro em produção era ler log por log.',
      'Projetei um sistema de filas com fila de mensagens mortas, repetição automática e workers concorrentes — persistido no próprio banco, sem broker externo. Uma peça a menos de infraestrutura para manter de pé num órgão onde ninguém fica de plantão.',
      'O sistema de senhas precisava imprimir em impressora térmica a partir do navegador, que não fala com hardware. Construí um agente que roda na máquina do atendimento e conversa com a página em tempo real — mesmo executável em Windows, macOS e Linux, sem instalar driver.',
      'Autenticação corporativa com Keycloak e diretório da instituição, com papéis por perfil de usuário, e as esteiras de entrega até o Kubernetes para os três ambientes.',
    ],
    diagrama: {
      titulo: 'Três sistemas, uma base',
      nos: [
        { texto: 'Contratos' },
        { texto: 'Senhas' },
        { texto: 'Documentos' },
        { texto: 'Autenticação e auditoria comuns', forte: true },
      ],
      nota: 'os três continuam em uso — migração de dados importa',
    },
  },
  {
    id: 'techlead',
    rotulo: ['Passagem', 'Tech Lead', 'Quatro frentes'],
    titulo: 'Condução técnica',
    resumo:
      'Tive uma passagem como Tech Lead conduzindo quatro projetos ao mesmo tempo: revisão de código, arquitetura, alinhamento com clientes e planejamento. A parte difícil não era o código — era manter quatro frentes com prioridades diferentes avançando sem que uma decisão em uma inviabilizasse outra.',
    pontos: [
      'Reduzi uma consulta crítica de dois a três minutos para dez a quinze segundos, com indexação estratégica e reestruturação dos JOINs num banco relacional sob carga alta.',
      'Implantei a cultura de testes do time — ponta a ponta e unitários — e o hábito de descrever o comportamento esperado antes de escrever a implementação.',
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
