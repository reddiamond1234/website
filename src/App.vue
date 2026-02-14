<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import TheNavigation from './components/layout/TheNavigation.vue'
import TheFooter from './components/layout/TheFooter.vue'
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col bg-neutral-50">
    <TheHeader />
    <TheNavigation />
    <main class="container-main flex-1 pt-[108px] md:pt-[150px] pb-4">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style>
/* Minimal global overrides - most styling handled by Tailwind */
</style>
