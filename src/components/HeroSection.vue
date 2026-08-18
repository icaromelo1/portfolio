<template>
  <header id="topo" class="hero spread">
    <div class="aside">
      <p class="stamp">
        Icaro Melo<br />
        <span class="accent">Fortaleza / CE</span><br />
        Desenvolvedor full stack
      </p>

      <figure v-if="retrato" class="retrato">
        <img :src="retrato" alt="Retrato de Icaro Melo" width="336" height="420" />
        <figcaption class="label-sm">Fortaleza, 2026</figcaption>
      </figure>
    </div>

    <div>
      <h1>O trabalho que importa começa depois do deploy.</h1>

      <p class="lede">
        Desenvolvedor full stack há cinco anos, com atuação predominante em
        backend. A maior parte do meu trabalho consiste em intervir em sistemas
        já em operação: compreender seu funcionamento real antes de alterá-lo e
        preservar o comportamento existente.
      </p>

      <dl class="marcadores">
        <div class="marcador">
          <dt class="label-sm">Agora</dt>
          <dd>
            API central de uma plataforma de saúde ocupacional distribuída em
            microsserviços.
          </dd>
        </div>
        <div class="marcador">
          <dt class="label-sm">Antes</dt>
          <dd>
            Três sistemas do Tribunal de Justiça do Amazonas, e uma passagem
            como Tech Lead.
          </dd>
        </div>
        <div class="marcador">
          <dt class="label-sm">Disponibilidade</dt>
          <dd>Aberto a oportunidades. <a href="#contato">Entrar em contato</a>.</dd>
        </div>
      </dl>
    </div>
  </header>
</template>

<script setup lang="ts">
// Quando houver retrato, apontar para o arquivo em `public/`.
// Ex.: const retrato = '/retrato.jpg'
const retrato = '';
</script>

<style scoped>
.hero {
  padding: clamp(48px, 7vw, 96px) 0 clamp(40px, 5vw, 72px);
  align-items: start;
}

.aside {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.stamp {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-label);
  line-height: 1.9;
}
.stamp .accent { color: var(--accent); }

.retrato { display: flex; flex-direction: column; gap: 8px; }
.retrato img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
}

h1 {
  font-size: clamp(32px, 5vw, 68px);
  line-height: 1.04;
  letter-spacing: -0.025em;
  max-width: 24ch;
}

.lede {
  margin-top: clamp(24px, 3vw, 36px);
  font-size: clamp(17px, 1.8vw, 21px);
  line-height: 1.6;
  color: var(--ink-body);
  max-width: 54ch;
}

.marcadores {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  margin-top: clamp(30px, 4vw, 48px);
  border-top: 1px solid var(--rule);
}
.marcador {
  padding: 18px 24px;
  border-right: 1px solid var(--rule);
}
.marcador:first-child { padding-left: 0; }
.marcador:last-child { padding-right: 0; border-right: 0; }
.marcador dd {
  font-size: 16px;
  line-height: 1.5;
  margin-top: 8px;
}

@media (max-width: 720px) {
  .marcador,
  .marcador:first-child,
  .marcador:last-child {
    padding: 16px 0;
    border-right: 0;
    border-bottom: 1px solid var(--rule);
  }
  .marcador:last-child { border-bottom: 0; }
}
</style>
