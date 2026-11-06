<template>
  <section id="interface" class="band">
    <div class="spread cabeca">
      <h2 class="label">Interface</h2>
      <div>
        <p class="band-lede">
          Toda interface que faço segue o mesmo sistema, mesmo quando o projeto é pequeno.
        </p>
        <p class="corpo">
          Sou de backend, mas não deixo o front sem regra. Nos meus projetos, a interface nasce de tokens
          e temas, e o componente nunca decide cor sozinho.
        </p>
      </div>
    </div>

    <div class="spread">
      <span aria-hidden="true"></span>
      <dl class="principios">
        <div v-for="p in principios" :key="p.titulo" class="principio">
          <dt>{{ p.titulo }}</dt>
          <dd>{{ p.texto }}</dd>
        </div>
      </dl>
    </div>

    <div class="casos">
      <article v-for="caso in casos" :key="caso.id" class="spread caso">
        <h3 class="label">{{ caso.nome }}</h3>
        <div>
          <p class="resumo">{{ caso.resumo }}</p>
          <ul class="numeros">
            <li v-for="n in caso.numeros" :key="n">{{ n }}</li>
          </ul>
        </div>
      </article>

      <article class="spread caso">
        <h3 class="label">Este site</h3>
        <div>
          <p class="resumo">
            As cores desta página vêm dos tokens abaixo. O valor e o contraste sobre o fundo são lidos da
            própria página enquanto você a vê.
          </p>
          <ul class="amostras">
            <li v-for="t in tokens" :key="t.nome" class="amostra">
              <span class="cor" :style="{ background: `var(${t.nome})` }" aria-hidden="true"></span>
              <span class="nome">{{ t.nome }}</span>
              <span class="valor">{{ t.valor }}</span>
              <span class="contraste">{{ t.contraste }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { amostra, casos, principios } from 'src/data/interface';

interface TokenLido {
  nome: string;
  valor: string;
  contraste: string;
}

const tokens = ref<TokenLido[]>(amostra.map((nome) => ({ nome, valor: '', contraste: '' })));

function luminancia(hex: string): number {
  const canais = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = canais.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function razao(a: string, b: string): number {
  const [claro, escuro] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (claro + 0.05) / (escuro + 0.05);
}

onMounted(() => {
  const estilo = getComputedStyle(document.documentElement);
  const fundo = estilo.getPropertyValue('--paper').trim();
  tokens.value = amostra.map((nome) => {
    const valor = estilo.getPropertyValue(nome).trim();
    const valido = /^#[0-9a-f]{6}$/i.test(valor) && /^#[0-9a-f]{6}$/i.test(fundo);
    return {
      nome,
      valor: valor.toUpperCase(),
      contraste: valido && nome !== '--paper' ? `${razao(valor, fundo).toFixed(2)}:1` : 'fundo',
    };
  });
});
</script>

<style scoped>
.cabeca { margin-bottom: clamp(28px, 3.5vw, 44px); }

.corpo {
  margin-top: 16px;
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 58ch;
}

.principios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  border-top: 1px solid var(--rule);
}
.principio {
  padding: 18px 20px 20px 0;
}
.principio dt {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.principio dd {
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--ink-body);
}

.casos {
  margin-top: clamp(28px, 3.5vw, 44px);
  display: flex;
  flex-direction: column;
}

.caso {
  border-top: 1px solid var(--rule);
  padding: clamp(22px, 2.8vw, 32px) 0;
}
.caso h3 { color: var(--ink); }

.resumo {
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.6;
  max-width: 64ch;
  color: var(--ink-body);
}

.numeros {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  margin-top: 16px;
}
.numeros li {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-label);
  border: 1px solid var(--rule);
  padding: 5px 10px;
}

.amostras {
  list-style: none;
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}
.amostra {
  display: grid;
  grid-template-columns: 36px 1fr auto;
  grid-template-rows: auto auto;
  column-gap: 12px;
  align-items: center;
  border: 1px solid var(--rule);
  padding: 10px;
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.06em;
}
.cor {
  grid-row: span 2;
  width: 36px;
  height: 36px;
  border: 1px solid var(--rule-strong);
}
.nome { color: var(--ink); }
.valor { grid-column: 2; color: var(--ink-faint); }
.contraste {
  grid-column: 3;
  grid-row: 1 / span 2;
  color: var(--accent);
}
</style>
