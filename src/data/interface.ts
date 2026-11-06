export interface Principio {
  titulo: string;
  texto: string;
}

export interface CasoInterface {
  id: string;
  nome: string;
  resumo: string;
  numeros: string[];
}

export const principios: Principio[] = [
  {
    titulo: 'Token com significado',
    texto: 'Cor, espaço, raio e movimento têm nome de função (superfície, borda forte, ação), não de valor.',
  },
  {
    titulo: 'Componente só lê token',
    texto: 'Nenhuma cor fixa dentro de componente. Trocar a identidade não exige abrir componente nenhum.',
  },
  {
    titulo: 'Tema é troca de atributo',
    texto: 'Claro, escuro ou uma identidade inteira mudam por um atributo na raiz do documento.',
  },
  {
    titulo: 'Contraste medido',
    texto: 'A razão de contraste é calculada e anotada junto da cor, não estimada no olho.',
  },
];

export const casos: CasoInterface[] = [
  {
    id: 'garimpo',
    nome: 'Garimpo',
    resumo:
      'Design system de uma ferramenta de uso diário, densa em tabelas. O tema escuro é a origem e o claro é completo. Superfícies e bordas seguem escala própria, raio e movimento têm tokens por tipo de componente, e cada cor traz a razão de contraste calculada. Um componente de campo mostra a procedência de cada dado: de onde veio, com que confiança e qual era o valor original.',
    numeros: ['2 temas completos', 'contraste anotado por cor', '0 cores fixas nos componentes'],
  },
  {
    id: 'psi',
    nome: 'Landing de psicologia',
    resumo:
      'Motor de temas para uma peça comercial: cada tema troca paleta, fontes, escala tipográfica, raio, borda e textura. Os componentes não conhecem o tema, então mudar a identidade inteira do site é trocar um atributo.',
    numeros: ['10 temas', '16 componentes', '0 cores fixas nos componentes'],
  },
  {
    id: 'kairos',
    nome: 'Kairos',
    resumo:
      'Biblioteca de componentes em pixel art sobre tokens próprios: botões, badges, painéis e bordas com variantes, além de uma casca comum para todos os painéis. Os alvos de clique foram ajustados ao mínimo de 32 por 32 pixels.',
    numeros: ['41 variantes de componente', 'casca única de painel', 'alvo mínimo 32×32'],
  },
];

export const amostra = ['--paper', '--ink', '--ink-body', '--ink-label', '--accent', '--rule-strong'];
