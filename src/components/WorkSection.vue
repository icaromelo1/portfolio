<template>
  <section id="trabalho" class="band">
    <div class="spread cabeca">
      <h2 class="label">Trabalho</h2>
      <p class="band-lede">
        Sistemas em produção, com gente usando todo dia.
      </p>
    </div>

    <div class="lista">
      <article v-for="exp in experiencias" :key="exp.id" class="spread">
        <p class="stamp">
          {{ exp.periodo }}<br />
          <span class="accent">{{ exp.empresa }}</span><br />
          {{ exp.papel }}
        </p>

        <div>
          <p class="resumo">{{ exp.resumo }}</p>

          <ul class="pontos">
            <li v-for="(ponto, i) in exp.pontos" :key="i">
              <span class="marca" aria-hidden="true">·</span>
              <span>{{ ponto }}</span>
            </li>
          </ul>
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
  gap: clamp(36px, 4.5vw, 64px);
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

.resumo {
  font-size: clamp(17px, 1.7vw, 20px);
  line-height: 1.6;
  max-width: 62ch;
}

.pontos {
  margin-top: 20px;
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
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.55;
  max-width: 68ch;
  color: var(--ink-body);
}
.marca { color: var(--accent); }
</style>
