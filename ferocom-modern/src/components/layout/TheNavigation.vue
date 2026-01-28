<template>
  <nav class="fixed top-[60px] md:top-[90px] left-0 w-full bg-primary-600 flex items-center z-40 shadow-md flex-wrap">
    <!-- Mobile hamburger menu -->
    <button
      class="md:hidden text-2xl py-2 px-3 text-white w-full text-center hover:bg-primary-700 active:bg-primary-800 transition-colors"
      @click="toggleMenu"
      :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
    >
      <span
        class="inline-block transition-transform duration-300"
        :class="menuOpen ? 'rotate-90 scale-110' : ''"
      >
        <template v-if="!menuOpen">&#9776;</template>
        <template v-else>&#10005;</template>
      </span>
    </button>

    <!-- Navigation menu -->
    <ul
      :class="[
        'w-full m-0 p-0 list-none md:flex md:justify-around overflow-hidden transition-all duration-300 ease-in-out',
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 md:max-h-none opacity-0 md:opacity-100'
      ]"
    >
      <li
        v-for="item in menuItems"
        :key="item.path"
        :class="[
          'flex-1 text-center py-3 md:py-4 cursor-pointer text-white border-r border-primary-700 last:border-r-0 transition-colors',
          isActive(item.path) ? 'bg-primary-700' : 'hover:bg-primary-700'
        ]"
        @click="navigate(item.path)"
      >
        {{ $t(item.labelKey) }}
      </li>

      <!-- Language Dropdown -->
      <li class="relative flex-1 text-center text-white border-r-0 hover:bg-primary-700 transition-colors">
        <button
          @click="toggleLangDropdown"
          class="flex items-center justify-center gap-2 w-full h-full py-3 md:py-4 px-4"
        >
          <span>{{ currentLocale.flag }}</span>
          <span>{{ currentLocale.name }}</span>
          <svg
            :class="['w-4 h-4 transition-transform', langDropdownOpen ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          v-if="langDropdownOpen"
          class="absolute top-full left-0 w-full bg-white rounded-b-lg shadow-card-hover overflow-hidden z-50"
        >
          <button
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="changeLocale(locale.code)"
            :class="[
              'w-full px-4 py-3 flex items-center gap-2 hover:bg-neutral-100 transition-colors text-neutral-700',
              locale.code === currentLocale.code ? 'bg-neutral-50 font-medium' : ''
            ]"
          >
            <span>{{ locale.flag }}</span>
            <span>{{ locale.name }}</span>
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { setLocale, availableLocales } from '@/i18n'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

const menuOpen = ref(false)
const langDropdownOpen = ref(false)

const menuItems = [
  { path: '/about', labelKey: 'nav.about' },
  { path: '/', labelKey: 'nav.home' },
  { path: '/location', labelKey: 'nav.location' },
  { path: '/contact', labelKey: 'nav.contact' }
]

const currentLocale = computed(() => {
  return availableLocales.find(l => l.code === locale.value) || availableLocales[0]
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  langDropdownOpen.value = false
}

const toggleLangDropdown = () => {
  langDropdownOpen.value = !langDropdownOpen.value
}

const navigate = (path) => {
  router.push(path)
  menuOpen.value = false
  langDropdownOpen.value = false
}

const changeLocale = (code) => {
  setLocale(code)
  langDropdownOpen.value = false
}

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/' || route.path.startsWith('/product')
  }
  return route.path === path
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('nav')) {
    langDropdownOpen.value = false
    menuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
