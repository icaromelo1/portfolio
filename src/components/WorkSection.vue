<template>
  <section id="trabalho" class="band">
    <div class="spread cabeca">
      <h2 class="label">Trabalho</h2>
      <p class="band-lede">
        Três lugares, e o que mudou em cada um enquanto eu estava lá.
      </p>
    </div>

    <div class="lista">
      <article v-for="exp in experiencias" :key="exp.id" class="spread">
        <p class="stamp">
          {{ exp.rotulo[0] }}<br />
          <span class="accent">{{ exp.rotulo[1] }}</span><br />
          {{ exp.rotulo[2] }}
        </p>

        <div>
          <h3>{{ exp.titulo }}</h3>
          <p class="resumo">{{ exp.resumo }}</p>

          <ul class="pontos">
            <li v-for="(ponto, i) in exp.pontos" :key="i">
              <span class="marca" aria-hidden="true">·</span>
              <span>{{ ponto }}</span>
            </li>
          </ul>

          <figure class="diagrama">
            <figcaption class="label-sm">{{ exp.diagrama.titulo }}</figcaption>
            <div class="fluxo">
              <template v-for="(no, i) in exp.diagrama.nos" :key="no.texto">
                <span v-if="i > 0" class="seta" aria-hidden="true">→</span>
                <span class="no" :class="{ forte: no.forte }">{{ no.texto }}</span>
              </template>
              <span v-if="exp.diagrama.nota" class="nota">· {{ exp.diagrama.nota }}</span>
            </div>
          </figure>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiencias } from 'src/data/trabalho';
</script>

<style scoped>
.cabeca { margin-bottom: clamp(32px, 4vw, 56px); }

.lista {
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 72px);
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

h3 {
  font-size: clamp(21px, 2.1vw, 26px);
  letter-spacing: -0.01em;
}

.resumo {
  margin-top: 14px;
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.62;
  max-width: 62ch;
}

.pontos {
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid var(--rule);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.pontos li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 10px;
  font-size: clamp(15px, 1.5vw, 18px);
  line-height: 1.55;
  max-width: 68ch;
}
.marca { color: var(--accent); }

.diagrama {
  margin-top: 26px;
  border: 1px solid var(--rule);
  background: var(--paper-soft);
  padding: 20px 22px;
  font-family: var(--font-label);
}
.diagrama figcaption { margin-bottom: 14px; }

.fluxo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 12px;
  font-size: 12px;
  letter-spacing: 0.04em;
}
.no {
  border: 1px solid var(--rule-strong);
  padding: 8px 12px;
  background: var(--paper);
}
.no.forte { border-color: var(--rule-ink); }
.seta { color: var(--accent); }
.nota { color: var(--ink-faint); margin-left: 4px; }
</style>
