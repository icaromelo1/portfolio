<template>
  <section id="projetos" class="band">
    <div class="spread cabeca">
      <h2 class="label">Projetos</h2>
      <p class="band-lede">
        O que construo fora do trabalho, do jogo ao servidor que hospeda tudo.
      </p>
    </div>

    <div class="lista">
      <ProjectCard v-for="p in projetos" :key="p.id" :projeto="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from 'src/components/ProjectCard.vue';
import { projetos } from 'src/data/projetos';
</script>

<style scoped>
.cabeca { margin-bottom: 28px; }

.lista {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--rule);
}
</style>
