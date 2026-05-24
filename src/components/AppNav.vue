<template>
  <nav class="nav" aria-label="Navegação principal">
    <div class="nav-inner">
      <a href="#top" class="nav-brand">
        <span class="nav-monogram">IM</span>
        <span>Icaro Melo</span>
      </a>
      <div class="nav-links">
        <a href="#projetos" class="nav-link">projetos</a>
        <a href="#stack"    class="nav-link">stack</a>
        <a href="#contato"  class="nav-link">contato</a>
        <a href="#" class="btn btn-primary" target="_blank" rel="noopener" aria-label="Ver CV em PDF">
          Ver CV
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(11, 11, 14, 0.72);
  backdrop-filter: blur(24px) saturate(140%);
  -webkit-backdrop-filter: blur(24px) saturate(140%);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
}
.nav-monogram {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: var(--bg-surface);
  border: 1px solid var(--border-strong);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.08),
    0 0 0 1px rgba(63, 207, 142, 0.15),
    0 0 14px rgba(63, 207, 142, 0.12);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}
.nav-link {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  transition: color 180ms var(--ease-out);
  text-decoration: none;
}
.nav-link:hover { color: var(--text-primary); }
.nav-link::before {
  content: "// ";
  color: var(--text-muted);
  opacity: 0.6;
}

@media (max-width: 900px) {
  .nav-links { gap: 18px; }
  .nav-link:not(.btn) { display: none; }
}
@media (max-width: 1200px) {
  .nav-inner { padding: 16px 24px; }
}
@media (max-width: 600px) {
  .nav-inner { padding: 16px 20px; }
}
</style>
