<template>
  <section id="projetos" class="band">
    <div class="spread cabeca">
      <h2 class="label">Projetos</h2>
      <p class="band-lede">
        Projetos próprios, cada um com o estado em que realmente está.
      </p>
    </div>

    <div class="destaques">
      <ProjectCard v-for="p in destaques" :key="p.id" :projeto="p" />
    </div>

    <div class="spread outros">
      <h3 class="label">Outros</h3>
      <ul class="lista">
        <li v-for="p in outros" :key="p.id" class="item">
          <div class="topo">
            <span class="nome">{{ p.nome }}</span>
            <span class="tag" :class="classeEstado[p.estado]">{{ p.estado }}</span>
            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="link">
              Código <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p class="linha">{{ p.linha }}</p>
          <p class="stack">{{ p.stack.join(' · ') }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from 'src/components/ProjectCard.vue';
import { destaques, outros, type Estado } from 'src/data/projetos';

const classeEstado: Record<Estado, string> = {
  'Estável, em uso': 'tag-uso',
  'Em desenvolvimento': 'tag-dev',
  Finalizado: 'tag-final',
  Pausado: 'tag-pausa',
  Descontinuado: 'tag-fim',
};
</script>

<style scoped>
.cabeca { margin-bottom: 28px; }

.destaques {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--rule);
}

.outros { margin-top: clamp(40px, 5vw, 64px); }

.lista {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0 clamp(20px, 3vw, 40px);
}

.item {
  border-top: 1px solid var(--rule);
  padding: 18px 0 22px;
}

.topo {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 14px;
}

.nome { font-size: 20px; }

.tag { font-size: 10px; padding: 2px 7px; }

.link {
  font-family: var(--font-label);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-label);
  border-bottom-color: rgba(107, 102, 96, 0.4);
}
.link:hover { color: var(--accent); border-bottom-color: var(--accent); }

.linha {
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.stack {
  margin-top: 10px;
  font-family: var(--font-label);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
</style>
