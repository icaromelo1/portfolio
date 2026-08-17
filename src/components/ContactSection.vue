<template>
  <section id="contato" class="band spread">
    <h2 class="label">Contato</h2>
    <div>
      <p class="band-lede">
        Se algum destes casos parecer com o seu problema, me escreva.
      </p>
      <p class="corpo">
        Respondo por e-mail. Se preferir olhar meu histórico primeiro, o LinkedIn
        está aqui do lado. Condições e detalhes a gente alinha na conversa.
      </p>

      <div class="acoes">
        <a class="botao primario" :href="`mailto:${email}`">{{ email }}</a>

        <button type="button" class="botao" @click="copiar">
          {{ copiado ? 'Copiado' : 'Copiar e-mail' }}
        </button>

        <a class="botao" href="https://www.linkedin.com/in/icaromelo/" target="_blank" rel="noopener">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>

        <a class="botao" href="https://github.com/icaroMelo1" target="_blank" rel="noopener">
          GitHub <span aria-hidden="true">↗</span>
        </a>

        <a class="botao" href="/cv-icaro-melo.pdf" target="_blank" rel="noopener">
          Currículo (PDF) <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p aria-live="polite" class="sr-only">{{ copiado ? 'E-mail copiado' : '' }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';

const email = 'icarodmelof@gmail.com';
const copiado = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

async function copiar() {
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    // Sem permissão de área de transferência — o link mailto continua valendo.
  }
  copiado.value = true;
  clearTimeout(timer);
  timer = setTimeout(() => (copiado.value = false), 1800);
}

onBeforeUnmount(() => clearTimeout(timer));
</script>

<style scoped>
.corpo {
  margin-top: 18px;
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 56ch;
}

.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
  align-items: center;
}

.botao {
  font-family: var(--font-label);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 13px 20px;
  border: 1px solid var(--rule);
  background: transparent;
  color: var(--accent);
  cursor: pointer;
  transition: all 160ms var(--ease-out);
}
.botao:hover { border-color: var(--accent); }

.primario {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--paper);
}
.primario:hover {
  background: var(--accent-deep);
  border-color: var(--accent-deep);
  color: var(--paper);
}

.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
</style>
