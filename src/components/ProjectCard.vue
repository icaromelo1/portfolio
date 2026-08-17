<template>
  <component :is="rootTag" v-bind="rootProps" class="project-card" :class="{ clickable: isLink }" :data-accent="accent">
    <div class="project-index">{{ index }} / {{ category }}</div>
    <div class="project-header">
      <h3 class="project-name">{{ title }}<span class="arrow">↗</span></h3>
      <span class="status-badge" :class="statusClass">{{ statusLabel }}</span>
    </div>
    <p class="project-tagline">{{ tagline }}</p>
    <div class="tags">
      <span v-for="tag in stack" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="project-links">
      <span class="project-link project-link-primary">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        {{ ctaLabel }}
      </span>
      <span class="links-spacer" />
      <span v-if="isPrivate" class="project-link project-link-muted disabled">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Código privado
      </span>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  index: string
  category: string
  title: string
  tagline: string
  stack: string[]
  status: 'dev' | 'active' | 'done'
  accent: 'coral' | 'purple' | 'mint' | 'gold'
  isPrivate?: boolean
  liveUrl?: string       // app/landing ao vivo (mesmo domínio, ex.: /kairos)
  detailRoute?: string   // rota interna do portfolio (ex.: /claudicaro)
}>()

const isLink = computed(() => !!(props.detailRoute || props.liveUrl))
const rootTag = computed(() => (props.detailRoute ? 'router-link' : props.liveUrl ? 'a' : 'article'))
const rootProps = computed(() => {
  if (props.detailRoute) return { to: props.detailRoute }
  if (props.liveUrl) return { href: props.liveUrl }
  return {}
})
const ctaLabel = computed(() => (props.detailRoute ? 'Conhecer o projeto' : 'Ver ao vivo'))

const statusMap = {
  dev:    { label: 'em desenvolvimento', cls: 'status-dev' },
  active: { label: 'ativo',              cls: 'status-active' },
  done:   { label: 'completo',           cls: 'status-done' },
}
const statusLabel = computed(() => statusMap[props.status].label)
const statusClass = computed(() => statusMap[props.status].cls)
</script>

<style scoped>
.project-card {
  --card-accent:     var(--accent);
  --card-accent-dim: var(--accent-dim);
  --card-accent-glow: var(--accent-glow);

  position: relative;
  background: linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0) 100%), var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px;
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 1px 0 rgba(0,0,0,0.4);
  transition: all 280ms var(--ease-bounce);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 260px;
  text-decoration: none;
  color: inherit;
}
.project-card.clickable { cursor: pointer; }

/* corner gradient */
.project-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 200px; height: 200px;
  background: radial-gradient(ellipse at top left, var(--card-accent-dim), transparent 60%);
  opacity: 0.7;
  pointer-events: none;
}

/* top accent line */
.project-card::after {
  content: "";
  position: absolute;
  top: 0; left: 24px; right: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--card-accent), transparent);
  opacity: 0.4;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%),
    var(--bg-elevated);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.10),
    0 0 0 1px var(--card-accent-glow),
    0 12px 40px rgba(0,0,0,0.5),
    0 0 24px var(--card-accent-dim);
}
.project-card:hover::after { opacity: 0.9; }

/* per-project accents */
.project-card[data-accent="coral"] {
  --card-accent:     #D97757;
  --card-accent-dim:  rgba(217, 119, 87, 0.14);
  --card-accent-glow: rgba(217, 119, 87, 0.35);
}
.project-card[data-accent="purple"] {
  --card-accent:     var(--purple-hi);
  --card-accent-dim:  var(--purple-dim);
  --card-accent-glow: rgba(124, 58, 237, 0.35);
}
.project-card[data-accent="mint"] {
  --card-accent:     var(--accent);
  --card-accent-dim:  var(--accent-dim);
  --card-accent-glow: var(--accent-glow);
}
.project-card[data-accent="gold"] {
  --card-accent:     var(--gold);
  --card-accent-dim:  rgba(251, 191, 36, 0.12);
  --card-accent-glow: var(--gold-glow);
}

.project-index {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 12px;
  letter-spacing: 0.05em;
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
  position: relative;
}

.project-name {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}
.project-name .arrow {
  display: inline-block;
  color: var(--card-accent);
  margin-left: 4px;
  opacity: 0;
  transform: translateX(-6px);
  transition: all 240ms var(--ease-bounce);
}
.project-card:hover .project-name .arrow {
  opacity: 1;
  transform: translateX(0);
}

.status-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  padding: 4px 9px 4px 8px;
  border-radius: 999px;
  letter-spacing: 0.04em;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
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
.status-active {
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid rgba(63, 207, 142, 0.28);
}
.status-done {
  color: var(--purple-hi);
  background: var(--purple-dim);
  border: 1px solid rgba(124, 58, 237, 0.35);
}

.project-tagline {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.55;
  margin-bottom: 22px;
  flex-grow: 1;
  max-width: 92%;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}
.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--card-accent);
  background: var(--card-accent-dim);
  border-radius: 4px;
  padding: 3px 8px;
  letter-spacing: -0.01em;
}

.project-links {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
  margin-top: auto;
}
.links-spacer { flex: 1; }
.project-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 180ms var(--ease-out);
}
.project-link-primary {
  color: var(--card-accent);
  font-weight: 500;
}
.project-card:hover .project-link-primary { filter: brightness(1.15); }
.project-link-muted { color: var(--text-muted); }
.project-link.disabled { opacity: 0.7; }
</style>
