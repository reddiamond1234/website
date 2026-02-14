<template>
  <div>
    <ProductDetail v-if="product" :product="product" />

    <!-- Not Found State -->
    <div v-else class="card text-center py-12">
      <h2 class="text-2xl font-bold text-primary-600 mb-3">
        {{ $t('products.notFound') }}
      </h2>
      <p class="text-neutral-600 mb-6">
        {{ $t('products.notFound') }}
      </p>
      <button class="btn-primary" @click="goBack">
        {{ $t('products.backToProducts') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductDetail from '@/components/product/ProductDetail.vue'
import { products } from '@/data/products'

const route = useRoute()
const router = useRouter()

const product = computed(() => {
  const id = parseInt(route.params.id)
  return products.find(p => p.id === id)
})

const goBack = () => {
  router.push('/')
}
</script>
