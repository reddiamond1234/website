<template>
  <div class="card cursor-pointer group" @click="selectProduct">
    <img
      :src="product.image"
      :alt="getProductName()"
      loading="lazy"
      class="w-full h-48 md:h-56 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
    />
    <div class="space-y-2">
      <h3 class="text-lg md:text-xl font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
        {{ getProductName() }}
      </h3>
      <p class="text-neutral-600 text-sm md:text-base leading-relaxed">
        {{ getProductDetails() }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])
const { t, te } = useI18n()

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
