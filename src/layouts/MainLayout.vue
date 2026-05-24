<template>
  <div class="layout">
    <AppNav />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNav from 'src/components/AppNav.vue';
import AppFooter from 'src/components/AppFooter.vue';
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background: var(--bg-base);
}
</style>
