<template>
  <section class="section" id="projetos">
    <div class="container">

      <div class="section-label">// projetos selecionados</div>

      <div class="section-header">
        <h2>Projetos</h2>
        <span class="count">04 destaque · 04 outros</span>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="p in tier1"
          :key="p.title"
          v-bind="p"
        />
      </div>

      <!-- Tier 2 -->
      <div class="tier2">
        <div class="section-label" style="margin-bottom:24px">// outros projetos</div>
        <div class="tier2-list">

          <a href="https://github.com/icaroMelo1" target="_blank" rel="noopener" class="tier2-row">
            <span class="folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </span>
            <span class="tier2-name">Autenticador Digital</span>
            <span class="tier2-stack">Java · SHA-1 · AVL Tree · Estruturas de Dados</span>
            <span class="tier2-link">
              GitHub
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </span>
          </a>

          <a href="https://github.com/icaroMelo1/n688-clinica-medica" target="_blank" rel="noopener" class="tier2-row">
            <span class="folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </span>
            <span class="tier2-name">Clínica Médica N688</span>
            <span class="tier2-stack">SQL · Banco de Dados · UNIFOR</span>
            <span class="tier2-link">
              GitHub
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </span>
          </a>

          <a href="https://github.com/icaroMelo1/personal-wallet" target="_blank" rel="noopener" class="tier2-row">
            <span class="folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </span>
            <span class="tier2-name">Personal Wallet</span>
            <span class="tier2-stack">NestJS · JWT · TypeORM · MySQL · Prometheus</span>
            <span class="tier2-link">
              GitHub
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </span>
          </a>

          <a href="https://github.com/icaroMelo1/minecraft-guardian-bot" target="_blank" rel="noopener" class="tier2-row">
            <span class="folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </span>
            <span class="tier2-name">Minecraft Guardian Bot</span>
            <span class="tier2-stack">Node.js · mineflayer · Forge Handshake · Docker</span>
            <span class="tier2-link">
              GitHub
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </span>
          </a>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const tier1 = [
  {
    index: '01', category: 'fullstack · desktop',
    title: 'Claudicaro CLI',
    tagline: 'Desktop AI orchestrator — Claude, Gemini e Copilot em uma única interface com dispatcher inteligente.',
    stack: ['Electron', 'Vue 3', 'Quasar', 'TypeScript', 'Prisma', 'SQLite', 'Vitest'],
    status: 'dev' as const,
    accent: 'coral' as const,
    isPrivate: true,
    githubUrl: 'https://github.com/icaroMelo1/claudicaro-cli',
  },
  {
    index: '02', category: 'fullstack · gamified',
    title: 'Kairos IO',
    tagline: 'Ambiente virtual gamificado pixel art onde você trabalha dentro de um mapa top-down com agentes de IA.',
    stack: ['Vue 3', 'Quasar', 'NestJS', 'TypeORM', 'PostgreSQL', 'PixiJS'],
    status: 'dev' as const,
    accent: 'purple' as const,
    githubUrl: 'https://github.com/icaroMelo1/kairosio',
    demoSoon: true,
  },
  {
    index: '03', category: 'viz · realtime',
    title: 'Brain Atlas',
    tagline: 'Visualizador 3D interativo que acende em tempo real enquanto o Claude Code pensa.',
    stack: ['HTML', 'Canvas2D', 'Python', 'SSE'],
    status: 'active' as const,
    accent: 'mint' as const,
    githubUrl: 'https://github.com/icaroMelo1/brain-atlas',
    demoUrl: 'https://github.com/icaroMelo1/brain-atlas',
  },
  {
    index: '04', category: 'automação · gov.br',
    title: 'Wild Pie',
    tagline: 'Automação de NFS-e para MEI — emissão de notas fiscais no gov.br via Playwright + IA.',
    stack: ['NestJS', 'Vue 3', 'Quasar', 'Playwright', 'TypeORM', 'SQLite'],
    status: 'dev' as const,
    accent: 'gold' as const,
    isPrivate: true,
  },
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.tier2 { margin-top: 80px; }

.tier2-list { border-top: 1px solid var(--border); }

.tier2-row {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 24px;
  align-items: center;
  padding: 18px 4px;
  border-bottom: 1px solid var(--border);
  transition: all 200ms var(--ease-out);
  cursor: pointer;
  text-decoration: none;
}
.tier2-row:hover {
  background: linear-gradient(90deg, transparent, var(--accent-dim) 50%, transparent);
  padding-left: 12px;
}

.folder {
  color: var(--text-muted);
  display: grid;
  place-items: center;
  width: 22px;
}
.tier2-row:hover .folder { color: var(--accent); }

.tier2-name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 16px;
  color: var(--text-primary);
}
.tier2-stack {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
}
.tier2-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 180ms var(--ease-out);
}
.tier2-row:hover .tier2-link { color: var(--accent); }

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: 1fr; }
  .tier2-row { grid-template-columns: auto 1fr auto; }
  .tier2-stack { grid-column: 2 / -1; grid-row: 2; font-size: 11px; }
}
</style>
