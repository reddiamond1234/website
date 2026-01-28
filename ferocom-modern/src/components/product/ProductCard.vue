<template>
  <div class="card cursor-pointer group active:scale-[0.98]" @click="selectProduct">
    <div class="w-full h-48 md:h-56 bg-neutral-200 rounded-lg mb-4 overflow-hidden">
      <img
        :src="product.image"
        :alt="getProductName()"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-out"
        :class="imageLoaded ? 'opacity-100' : 'opacity-0'"
        @load="onImageLoad"
        @error="onImageError"
      />
    </div>
    <div class="space-y-2">
      <h3 class="text-lg md:text-xl font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
        {{ getProductName() }}
      </h3>
      <p v-if="getProductDetails()" class="text-neutral-600 text-sm md:text-base leading-relaxed">
        {{ getProductDetails() }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])
const { t, te } = useI18n()

const imageLoaded = ref(false)

const onImageLoad = () => {
  imageLoaded.value = true
}

const onImageError = (e) => {
  e.target.src = '/images/placeholder.png'
}

const getProductName = () => {
  const key = `productData.${props.product.translationKey}.name`
  return te(key) ? t(key) : props.product.name
}

const getProductDetails = () => {
  const key = `productData.${props.product.translationKey}.details`
  return te(key) ? t(key) : props.product.details
}

const selectProduct = () => {
  emit('select', props.product)
}
</script>
