<template>
  <footer class="bg-primary-500 text-white text-center py-6 mt-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]">
    <p class="m-0 text-sm md:text-base">
      {{ $t('footer.copyright', { year: currentYear }) }}
    </p>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
