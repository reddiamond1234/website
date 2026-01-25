<template>
  <header class="fixed top-0 left-0 w-full h-[90px] py-2 bg-primary-500 text-white flex flex-col justify-center items-center z-50 shadow-lg">
    <img
      src="/images/FEROCOM-LOGO-320x202.png"
      alt="FEROCOM d.o.o."
      @click="goHome"
      class="h-20 md:h-[75px] w-auto cursor-pointer hover:opacity-90 transition-opacity"
    />
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
