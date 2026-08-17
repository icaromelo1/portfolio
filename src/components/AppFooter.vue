<template>
  <footer class="rodape">
    <div class="shell inner">
      <span>Icaro Melo · Fortaleza / CE</span>
      <span>Aberto a oportunidades</span>
      <span class="fim">Vue 3 · Quasar · Vite</span>
    </div>
  </footer>
</template>

<style scoped>
.rodape {
  margin-top: clamp(48px, 6vw, 88px);
  padding-bottom: clamp(48px, 6vw, 88px);
}
.inner {
  padding-top: 20px;
  border-top: 1px solid var(--rule);
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
  font-family: var(--font-label);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
.fim { margin-left: auto; }
@media (max-width: 720px) { .fim { margin-left: 0; } }
</style>
