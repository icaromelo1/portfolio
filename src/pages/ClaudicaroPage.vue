<template>
  <div class="claudicaro" data-accent="coral">
    <div class="container">

      <router-link to="/#projetos" class="back-link">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>
        voltar aos projetos
      </router-link>

      <!-- HERO -->
      <header class="hero">
        <div class="hero-meta">
          <span class="section-label">// projeto · desktop</span>
          <span class="status-badge status-dev">em desenvolvimento</span>
        </div>
        <h1 class="hero-title">Claudicaro <span class="accent">CLI</span></h1>
        <p class="hero-tagline">
          Orquestrador de IA para desktop — Claude, Gemini e Copilot reunidos numa única
          interface, com um <strong>dispatcher inteligente</strong> que escolhe o modelo certo
          para cada tarefa.
        </p>
        <div class="hero-actions">
          <span class="btn btn-primary disabled" aria-disabled="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
            Build desktop · em breve
          </span>
        </div>
      </header>

      <!-- SCREENSHOT placeholder -->
      <figure class="shot">
        <div class="shot-frame">
          <div class="shot-dots"><span></span><span></span><span></span></div>
          <div class="shot-body">screenshot do app · em breve</div>
        </div>
      </figure>

      <!-- O QUE É -->
      <section class="block">
        <div class="section-label">// o que é</div>
        <p class="lead">
          O Claudicaro é um aplicativo de <strong>desktop</strong> (Electron) que centraliza
          múltiplos assistentes de IA num só lugar. Em vez de pular entre abas e ferramentas,
          você conversa com vários modelos a partir da mesma janela — e o dispatcher decide,
          ou você escolhe, qual provedor responde cada pedido. Histórico e configurações ficam
          <strong>localmente</strong>, num banco SQLite gerenciado por Prisma.
        </p>
      </section>

      <!-- FEATURES -->
      <section class="block">
        <div class="section-label">// destaques</div>
        <div class="features">
          <div class="feature">
            <div class="feature-icon">◷ ⇄ ◶</div>
            <h3>Multi-provedor</h3>
            <p>Claude, Gemini e Copilot na mesma interface, sem trocar de ferramenta.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">◇ → ◆</div>
            <h3>Dispatcher inteligente</h3>
            <p>Roteia cada tarefa para o modelo mais adequado — ou deixa você assumir o controle.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">▤ local</div>
            <h3>Local-first</h3>
            <p>Histórico e configs em SQLite/Prisma na sua máquina. Seus dados ficam com você.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">▣ cross</div>
            <h3>Desktop nativo</h3>
            <p>Empacotado com Electron + Vue 3 + Quasar. Uma experiência de app de verdade.</p>
          </div>
        </div>
      </section>

      <!-- STACK -->
      <section class="block">
        <div class="section-label">// stack</div>
        <div class="tags">
          <span v-for="t in stack" :key="t" class="tag">{{ t }}</span>
        </div>
      </section>

      <footer class="page-footer">
        <router-link to="/#projetos" class="back-link">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>
          voltar aos projetos
        </router-link>
      </footer>

    </div>
  </div>
</template>

<script setup lang="ts">
const stack = ['Electron', 'Vue 3', 'Quasar', 'TypeScript', 'Prisma', 'SQLite', 'Vitest'];
</script>

<style scoped>
.claudicaro {
  --card-accent: var(--coral);
  --card-accent-dim: rgba(217, 119, 87, 0.14);
  --card-accent-glow: rgba(217, 119, 87, 0.35);
  background: var(--bg-base);
  padding: 120px 0 100px;
}
.container { max-width: 920px; margin: 0 auto; padding: 0 32px; }

.back-link {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: color 180ms var(--ease-out);
}
.back-link:hover { color: var(--card-accent); }

.section-label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* HERO */
.hero { margin-top: 40px; }
.hero-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 7vw, 68px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.02;
  color: var(--text-primary);
}
.hero-title .accent { color: var(--card-accent); }
.hero-tagline {
  margin-top: 22px;
  max-width: 640px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-secondary);
}
.hero-tagline strong { color: var(--text-primary); font-weight: 600; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }

.btn {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 18px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 200ms var(--ease-out);
  cursor: pointer;
}
.btn-primary {
  color: #1a1208;
  background: var(--card-accent);
  border: 1px solid var(--card-accent);
}
.btn-primary:hover { filter: brightness(1.1); transform: translateY(-2px); }
.btn-ghost {
  color: var(--text-secondary);
  background: var(--bg-surface);
  border: 1px solid var(--border-strong);
}
.btn.disabled { opacity: 0.5; pointer-events: none; }

.status-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  padding: 4px 9px 4px 8px;
  border-radius: 999px;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.status-badge::before {
  content: "";
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 8px currentColor;
}
.status-dev {
  color: var(--gold);
  background: rgba(251, 191, 36, 0.10);
  border: 1px solid rgba(251, 191, 36, 0.22);
}

/* SCREENSHOT */
.shot { margin: 56px 0; }
.shot-frame {
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(180deg, var(--bg-surface), var(--bg-base));
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px var(--card-accent-dim);
}
.shot-dots {
  display: flex;
  gap: 7px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
}
.shot-dots span {
  width: 11px; height: 11px;
  border-radius: 50%;
  background: var(--border-strong);
}
.shot-body {
  height: 320px;
  display: grid;
  place-items: center;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
  background:
    radial-gradient(ellipse at 30% 20%, var(--card-accent-dim), transparent 55%);
}

/* BLOCKS */
.block { margin-top: 64px; }
.lead {
  margin-top: 18px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 720px;
}
.lead strong { color: var(--text-primary); font-weight: 600; }

.features {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.feature {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 22px;
  transition: all 240ms var(--ease-out);
}
.feature:hover {
  border-color: var(--border-strong);
  transform: translateY(-3px);
  box-shadow: 0 0 0 1px var(--card-accent-glow), 0 12px 30px rgba(0,0,0,0.4);
}
.feature-icon {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--card-accent);
  margin-bottom: 12px;
}
.feature h3 {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.feature p { font-size: 14px; line-height: 1.55; color: var(--text-secondary); }

.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.tag {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--card-accent);
  background: var(--card-accent-dim);
  border-radius: 5px;
  padding: 5px 11px;
}

.page-footer {
  margin-top: 72px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

@media (max-width: 720px) {
  .features { grid-template-columns: 1fr; }
  .claudicaro { padding: 96px 0 72px; }
}
</style>
