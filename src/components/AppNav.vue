<template>
  <nav class="nav" aria-label="Navegação principal">
    <div class="nav-inner">
      <a href="#topo" class="brand">Icaro Melo</a>
      <div class="links">
        <a href="#trabalho">Trabalho</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </div>
  </nav>
</template>

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
