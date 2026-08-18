# icaromelodev.com.br

Portfólio pessoal. Vue 3 e Quasar, SPA estático, com deploy automático a cada push na
branch `main`.

![Portfólio](public/projetos/kairos.jpg)

## Motivação da reescrita

A versão anterior relacionava tecnologias sem apresentar trabalho executado: oito projetos
descritos, nenhum demonstrado, e nenhuma menção às organizações em que atuei. Adotava
também o vocabulário visual hoje associado a páginas geradas automaticamente, como fundo
escuro com acento de alta saturação, grade de pontos e rótulos de seção redigidos como
comentário de código.

A reescrita partiu do conteúdo, não do layout.

## Decisão que organiza o restante

Os projetos residem em `src/data/projetos.ts`, e cada um declara um estado na face do card:
estável, em desenvolvimento, finalizado ou suspenso. A estrutura obriga a informação a
permanecer verificável, já que um projeto suspenso aparece como tal, o que dá credibilidade
aos demais.

O link do repositório provém da mesma estrutura, condicionado à propriedade `repoPublico`.
Enquanto o repositório é privado, o link não é renderizado, em vez de apontar para um
destino inexistente.

## Execução local

```
npm install
npx quasar dev
```

## Stack

Vue 3, Quasar, Vite, TypeScript
