<template>
  <section class="section" id="contato">
    <div class="container">

      <div class="section-label">// sobre</div>

      <div class="section-header">
        <h2>Sobre</h2>
        <span class="count">disponível para PJ · remoto</span>
      </div>

      <div class="about">
        <div class="about-text">
          <p>
            <span class="hl">Backend-first developer</span> com foco em sistemas reais —
            saúde ocupacional e sistemas judiciais. Quase
            <span class="mono">3.000 commits</span> em <span class="mono">18 meses</span>
            em backends NestJS complexos, frontends Vue/Quasar e microsserviços.
          </p>
          <p>
            Estudando IA na <span class="hl">UNIFOR</span> (jan/2025 – jan/2027).
            Atualmente em Fortaleza, CE — atendendo remoto para Brasil e exterior.
          </p>
          <p class="cta-line">
            <span class="caret">&gt;</span> aceitando vagas PJ entre R$ 12k–16k · contratos internacionais
          </p>
        </div>

        <aside class="about-side">
          <a href="https://github.com/icaroMelo1" target="_blank" rel="noopener" class="contact-link" aria-label="GitHub de Icaro Melo">
            <span class="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.79 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </span>
            icaroMelo1
            <span class="label">github</span>
          </a>
          <a href="#" target="_blank" rel="noopener" class="contact-link" aria-label="LinkedIn de Icaro Melo">
            <span class="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </span>
            Conectar
            <span class="label">linkedin</span>
          </a>
          <a href="mailto:icarodmelof@gmail.com" class="contact-link" aria-label="Email para Icaro Melo">
            <span class="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            icarodmelof@gmail.com
            <span class="label">mail</span>
          </a>
        </aside>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 64px;
  align-items: start;
}
.about-text {
  font-size: 17px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 580px;
}
.about-text p + p { margin-top: 18px; }
.about-text .hl  { color: var(--text-primary); }
.about-text .mono {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
}
.cta-line {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px dashed var(--border);
}
.caret { color: var(--accent); }

.about-side {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  backdrop-filter: blur(20px) saturate(140%);
  position: relative;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}
.about-side::before {
  content: "// contato";
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px dashed var(--border);
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  transition: all 180ms var(--ease-out);
  text-decoration: none;
}
.contact-link:last-child { border-bottom: none; }
.contact-link:hover { color: var(--accent); padding-left: 6px; }
.icon {
  width: 18px; height: 18px;
  display: grid;
  place-items: center;
  color: var(--text-muted);
  flex-shrink: 0;
}
.contact-link:hover .icon { color: var(--accent); }
.label {
  margin-left: auto;
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .about { grid-template-columns: 1fr; gap: 32px; }
}
</style>
