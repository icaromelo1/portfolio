<template>
  <article class="card" :class="{ 'sem-imagem': !projeto.imagem }">
    <div>
      <div class="meta">
        <span class="tag" :class="classeEstado">{{ projeto.estado }}</span>

        <a v-if="projeto.repoPublico && projeto.repo" :href="projeto.repo" target="_blank" rel="noopener">
          Repositório <span aria-hidden="true">↗</span>
        </a>

        <a v-if="projeto.noAr" :href="projeto.noAr" target="_blank" rel="noopener">
          No ar <span aria-hidden="true">↗</span>
        </a>
      </div>

      <h3>{{ projeto.nome }}</h3>
      <p class="linha">{{ projeto.linha }}</p>
      <p class="descricao">{{ projeto.descricao }}</p>
      <p class="stack">{{ projeto.stack.join(' · ') }}</p>
    </div>

    <img
      v-if="projeto.imagem"
      :src="projeto.imagem"
      :alt="`Captura de tela do projeto ${projeto.nome}`"
      loading="lazy"
      width="520"
      height="390"
    />
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Projeto } from 'src/data/projetos';

const props = defineProps<{ projeto: Projeto }>();

const classeEstado = computed(
  () =>
    ({
      'Estável, em uso': 'tag-uso',
      'Em desenvolvimento': 'tag-dev',
      Finalizado: 'tag-final',
      Pausado: 'tag-pausa',
    })[props.projeto.estado],
);
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(150px, 260px);
  gap: clamp(20px, 3vw, 44px);
  border-top: 1px solid var(--rule);
  padding: clamp(24px, 3vw, 36px) 0;
}
.card.sem-imagem { grid-template-columns: minmax(0, 1fr); }

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  align-items: center;
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.meta a {
  color: var(--ink-label);
  border-bottom-color: rgba(107, 102, 96, 0.4);
}
.meta a:hover { color: var(--accent); border-bottom-color: var(--accent); }

h3 {
  margin-top: 16px;
  font-size: clamp(22px, 2.3vw, 30px);
  letter-spacing: -0.015em;
}

.linha {
  margin-top: 6px;
  font-size: clamp(16px, 1.6vw, 19px);
  color: var(--ink-soft);
}

.descricao {
  margin-top: 14px;
  font-size: clamp(15px, 1.5vw, 18px);
  line-height: 1.6;
  max-width: 62ch;
}

.stack {
  margin-top: 20px;
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.card img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  border: 1px solid var(--rule);
}

@media (max-width: 720px) {
  .card { grid-template-columns: minmax(0, 1fr); }
}
</style>
