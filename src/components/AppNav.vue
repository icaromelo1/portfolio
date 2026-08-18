<template>
  <nav class="nav" aria-label="Navegação principal">
    <div class="nav-inner">
      <a href="#topo" class="brand" @click="irPara($event, 'topo')">Icaro Melo</a>
      <div class="links">
        <a
          v-for="item in secoes"
          :key="item.id"
          :href="`#${item.id}`"
          @click="irPara($event, item.id)"
          >{{ item.rotulo }}</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const secoes = [
  { id: 'trabalho', rotulo: 'Trabalho' },
  { id: 'projetos', rotulo: 'Projetos' },
  { id: 'contato', rotulo: 'Contato' },
];

/**
 * A rota é carregada sob demanda, portanto o alvo pode não existir quando o
 * navegador tenta rolar. Clicar no link do hash atual também não dispara
 * navegação. Rolar no clique cobre os dois casos.
 */
function irPara(evento: MouseEvent, id: string) {
  const alvo = document.getElementById(id);
  if (!alvo) return;

  evento.preventDefault();
  const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  alvo.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' });
  history.replaceState(null, '', `#${id}`);
}
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--paper-veil);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--rule);
}
.nav-inner {
  max-width: var(--shell);
  margin: 0 auto;
  padding: 14px var(--gutter);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.brand {
  font-size: 17px;
  letter-spacing: 0.01em;
  border: 0;
  color: var(--ink);
}
.brand:hover { color: var(--accent); }

.links {
  display: flex;
  gap: clamp(14px, 2.5vw, 32px);
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.links a {
  border: 0;
  color: var(--ink-label);
}
.links a:hover { color: var(--accent); }
</style>
