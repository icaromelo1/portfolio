// Pipeline do Jenkins da VM (icaromelodev.com.br/jenkins). Builda toda branch; a main publica em produção.
@Library('vm') _

siteEstatico(build: 'npm ci && npx quasar build', saida: 'dist/spa', pasta: 'portfolio', nginx: 'portfolio')
