<template>
  <div
    class="card group"
    :class="isClickable ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default opacity-80'"
    @click="selectProduct"
  >
    <div class="w-full h-48 md:h-56 bg-neutral-200 rounded-lg mb-4 overflow-hidden">
      <img
        :src="product.image"
        :alt="getProductName()"
        loading="lazy"
        class="w-full h-full object-cover transition-all duration-300 ease-out"
        :class="[imageLoaded ? 'opacity-100' : 'opacity-0', isClickable ? 'group-hover:scale-105' : '']"
        @load="onImageLoad"
        @error="onImageError"
      />
    </div>
    <div class="space-y-2">
      <h3
        class="text-lg md:text-xl font-semibold transition-colors"
        :class="isClickable ? 'text-primary-600 group-hover:text-primary-700' : 'text-neutral-700'"
      >
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
const isClickable = Boolean(props.product.pdfPath)

const onImageLoad = () => {
  imageLoaded.value = true
}

const onImageError = (e) => {
  e.target.src = '/images/placeholder.svg'
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
  if (!isClickable) {
    return
  }

  emit('select', props.product)
}
</script>
