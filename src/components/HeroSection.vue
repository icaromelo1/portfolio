<template>
  <header class="hero" id="top">
    <div class="container">
      <div class="hero-inner">

        <div class="hero-tag">
          <span class="dot" />
          <span>Fullstack Developer</span>
          <span class="sep">·</span>
          <span>Fortaleza, Brasil</span>
          <span class="sep">·</span>
          <span style="color:var(--accent)">disponível</span>
        </div>

        <h1>
          <span class="name">Icaro Melo</span>
          <span class="line">Backend-first. Sistemas reais.</span>
          <span class="line">Quase <span class="accent-num">3.000</span> commits em <span class="accent-num">18</span> meses.</span>
        </h1>

        <div class="hero-stack">
          NestJS <span class="pipe">·</span>
          TypeScript <span class="pipe">·</span>
          Vue <span class="pipe">·</span>
          Quasar <span class="pipe">·</span>
          PostgreSQL <span class="pipe">·</span>
          Docker
        </div>

        <div class="hero-actions">
          <a href="#projetos" class="btn btn-ghost">
            Ver projetos
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
          </a>
          <a href="https://github.com/icaroMelo1" target="_blank" rel="noopener" class="btn btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.79 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>

      </div>
    </div>

    <div class="hero-scroll" aria-hidden="true">scroll</div>
  </header>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 160px 0 120px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* dot grid */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  background-position: 0 0;
  mask-image: radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%);
  pointer-events: none;
}

/* aurora gradient */
.hero::after {
  content: "";
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 700px;
  background:
    radial-gradient(ellipse 600px 320px at 30% 50%, rgba(63, 207, 142, 0.18), transparent 70%),
    radial-gradient(ellipse 500px 280px at 70% 50%, rgba(124, 58, 237, 0.18), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 920px;
}

/* fade-up entry */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-inner > * {
  opacity: 0;
  animation: fadeUp 700ms var(--ease-out) forwards;
}
.hero-inner > *:nth-child(1) { animation-delay: 0.05s; }
.hero-inner > *:nth-child(2) { animation-delay: 0.15s; }
.hero-inner > *:nth-child(3) { animation-delay: 0.25s; }
.hero-inner > *:nth-child(4) { animation-delay: 0.35s; }

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 7px 14px 7px 10px;
  margin-bottom: 32px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
}
.hero-tag .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
  animation: pulse 2.4s ease-in-out infinite;
  flex-shrink: 0;
}
.hero-tag .sep { color: var(--text-muted); }

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.85); }
}

h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(48px, 7.5vw, 84px);
  line-height: 1.02;
  letter-spacing: -0.035em;
  margin-bottom: 28px;
}
h1 .name {
  display: block;
  color: var(--text-primary);
}
h1 .line {
  display: block;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: clamp(28px, 4.2vw, 48px);
  letter-spacing: -0.025em;
  margin-top: 4px;
}
h1 .accent-num { color: var(--accent); }

.hero-stack {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-secondary);
  margin: 32px 0 44px;
  letter-spacing: -0.01em;
}
.hero-stack .pipe { color: var(--accent); margin: 0 8px; }

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 1;
}
.hero-scroll::after {
  content: "";
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollLine 2.2s ease-in-out infinite;
}
@keyframes scrollLine {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 600px) {
  .hero { padding: 130px 0 80px; }
}
</style>
