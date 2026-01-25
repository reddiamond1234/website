<template>
  <div class="space-y-6">
    <h2 class="section-heading">{{ $t('home.title') }}</h2>
    <ProductGrid :products="products" @select="selectProduct" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProductGrid from '@/components/product/ProductGrid.vue'
import { products } from '@/data/products'

const router = useRouter()

const selectProduct = (product) => {
  router.push(`/product/${product.id}`)
}
</script>
