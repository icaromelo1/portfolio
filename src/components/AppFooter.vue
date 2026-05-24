<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div>
          Icaro Melo
          <span class="sep">·</span>
          2026
          <span class="sep">·</span>
          Fortaleza, CE
        </div>
        <div>
          Feito com Vue 3
          <span class="sep">·</span>
          Quasar
          <span class="sep">·</span>
          Vercel
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  position: relative;
  padding: 40px 0 48px;
  margin-top: 80px;
}
.footer::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  box-shadow: 0 0 12px var(--accent-glow);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
}

.sep {
  color: var(--text-muted);
  opacity: 0.4;
  margin: 0 8px;
}
</style>
