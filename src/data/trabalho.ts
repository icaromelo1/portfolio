export interface Experiencia {
  id: string;
  periodo: string;
  empresa: string;
  papel: string;
  resumo: string;
  pontos: string[];
}

export const experiencias: Experiencia[] = [
  {
    id: 'cast',
    periodo: '2025 — atual',
    empresa: 'CAST · TJ do Amazonas',
    papel: 'Analista de sistemas',
    resumo:
      'Desenvolvo e mantenho três sistemas internos do Tribunal de Justiça do Amazonas: contratos, senhas de atendimento e documentos. Participo de cada um do levantamento com os usuários até o deploy.',
    pontos: [
      'Implantei observabilidade de ponta a ponta com OpenTelemetry, Elastic APM e Prometheus. Antes, investigar um incidente em produção era ler log linha a linha.',
      'Projetei uma fila com repetição automática e fila de mensagens mortas, persistida no próprio banco, sem broker externo para manter num ambiente sem plantão.',
      'Criei um agente local que liga a página ao equipamento de impressão térmica, distribuído como executável único para Windows, macOS e Linux, sem driver.',
    ],
  },
  {
    id: 'autonomo',
    periodo: '2024 — atual',
    empresa: 'Autônomo',
    papel: 'Desenvolvedor full stack sênior',
    resumo:
      'Sou o principal desenvolvedor da API central de uma plataforma corporativa distribuída em microsserviços, o serviço pelo qual os demais passam para ler e gravar dados.',
    pontos: [
      'Diagnostiquei uma condição de corrida que gerava registros duplicados de forma intermitente em produção e resolvi com restrição de unicidade no banco e idempotência nas guardas.',
      'Separei a API síncrona do processamento em segundo plano com filas, para que picos de tráfego não derrubem o atendimento.',
      'Migrei telas legadas para Nuxt e Vue 3 sem indisponibilidade e sem perder a sessão de quem estava usando.',
    ],
  },
  {
    id: 'icolabora',
    periodo: '2021 — 2024',
    empresa: 'iColabora',
    papel: 'Full stack pleno · Tech Lead',
    resumo:
      'Desenvolvimento full stack para clientes com regras de negócio bem diferentes entre si. Nos últimos seis meses, Tech Lead de quatro projetos simultâneos: revisão de código, arquitetura e alinhamento com clientes.',
    pontos: [
      'Reduzi uma consulta crítica de dois a três minutos para dez a quinze segundos, com índices compostos e reescrita dos JOINs.',
      'Implantei a cultura de testes da equipe, com testes unitários e de ponta a ponta e o comportamento descrito antes da implementação.',
    ],
  },
];
