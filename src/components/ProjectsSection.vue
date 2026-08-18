<template>
  <section id="projetos" class="band">
    <div class="spread cabeca">
      <h2 class="label">Projetos</h2>
      <div>
        <p class="band-lede">
          Doze projetos próprios, cada um com o estado declarado, inclusive os encerrados.
        </p>

        <div class="barra" role="group" aria-label="Filtrar projetos por estado">
          <button
            v-for="opcao in opcoes"
            :key="opcao"
            type="button"
            class="filtro"
            :class="{ ativo: filtro === opcao }"
            :aria-pressed="filtro === opcao"
            @click="filtro = opcao"
          >
            {{ opcao }}
          </button>
          <span class="contagem" aria-live="polite">
            {{ visiveis.length }} de {{ projetos.length }}
          </span>
        </div>
      </div>
    </div>

    <div class="lista">
      <ProjectCard v-for="p in visiveis" :key="p.id" :projeto="p" />
    </div>

    <p v-if="!visiveis.length" class="vazio">Nenhum projeto com esse estado.</p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ProjectCard from 'src/components/ProjectCard.vue';
import { projetos, estados, type Estado } from 'src/data/projetos';

type Filtro = 'Todos' | Estado;

const opcoes: Filtro[] = ['Todos', ...estados];
const filtro = ref<Filtro>('Todos');

const visiveis = computed(() =>
  filtro.value === 'Todos'
    ? projetos
    : projetos.filter((p) => p.estado === filtro.value),
);
</script>

<style scoped>
.cabeca { margin-bottom: 28px; }

.barra {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  align-items: center;
}

.filtro {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 9px 14px;
  border: 1px solid var(--rule);
  background: transparent;
  color: var(--accent);
  cursor: pointer;
  transition: all 160ms var(--ease-out);
}
.filtro:hover { border-color: var(--accent); }
.filtro.ativo {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--paper);
}

.contagem {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-left: 6px;
}

.lista {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--rule);
}

.vazio {
  padding: 48px 0;
  font-family: var(--font-label);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
</style>
