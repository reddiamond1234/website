<template>
  <div class="space-y-6">
    <h2 class="section-heading">{{ $t('home.title') }}</h2>
    <ProductGrid :products="products" @select="selectProduct" />
  </div>
</template>

<script setup>
import ProductGrid from '@/components/product/ProductGrid.vue'
import { products } from '@/data/products'

const selectProduct = (product) => {
  if (!product.pdfPath) {
    return
  }

  window.open(product.pdfPath, '_blank', 'noopener,noreferrer')
}
</script>
