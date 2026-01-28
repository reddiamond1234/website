<template>
  <div class="space-y-6">
    <!-- Product Name -->
    <h2 class="text-2xl lg:text-3xl font-bold text-primary-600 text-center mb-6">
      {{ getProductName() }}
    </h2>

    <!-- Split View Container -->
    <div class="flex flex-col md:flex-row min-h-0 md:min-h-[70vh] gap-0">
      <!-- Left Half: Image -->
      <div class="md:w-1/2 bg-neutral-100 flex items-center justify-center p-4">
        <img
          :src="product.image"
          :alt="getProductName()"
          loading="lazy"
          class="w-full h-full object-contain transition-opacity duration-300"
          :class="imageLoaded ? 'opacity-100' : 'opacity-0'"
          @load="imageLoaded = true"
          @error="onImageError"
        />
      </div>

      <!-- Right Half: Description (empty for now) -->
      <div class="md:w-1/2 bg-white flex flex-col p-6">
        <div class="flex-1">
          <!-- Description content will go here -->
        </div>

        <!-- Back Button at bottom -->
        <div class="mt-auto pt-6">
          <button
            class="btn-primary w-full md:w-auto"
            @click="goBack"
          >
            {{ $t('products.backToProducts') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const imageLoaded = ref(false)

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const { t, te } = useI18n()

const translationKey = computed(() => props.product.translationKey)

const getProductName = () => {
  const key = `productData.${translationKey.value}.name`
  return te(key) ? t(key) : props.product.name
}

const onImageError = (e) => {
  e.target.src = '/images/placeholder.svg'
}

const goBack = () => {
  router.push('/')
}
</script>
