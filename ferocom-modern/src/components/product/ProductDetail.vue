<template>
  <div class="space-y-6">
    <!-- Mobile Product Name -->
    <h2 class="md:hidden text-2xl font-bold text-primary-600 underline">
      {{ getProductName() }}
    </h2>

    <div class="flex flex-col md:flex-row gap-6 md:gap-8">
      <!-- Left Column: Image -->
      <div class="md:w-1/2">
        <img
          :src="product.image"
          :alt="getProductName()"
          loading="lazy"
          class="w-full max-w-md rounded-xl shadow-card"
        />
      </div>

      <!-- Right Column: Details -->
      <div class="md:w-1/2 card">
        <!-- Desktop Product Name -->
        <h2 class="hidden md:block text-2xl lg:text-3xl font-bold text-primary-600 underline mb-6">
          {{ getProductName() }}
        </h2>

        <h3 class="text-xl font-semibold text-primary-600 mb-3">
          {{ $t('products.description') }}
        </h3>
        <p class="text-neutral-700 leading-relaxed mb-6">
          {{ getProductLongDescription() }}
        </p>

        <h4 class="text-lg font-semibold text-primary-600 mb-3">
          {{ $t('products.specifications') }}:
        </h4>
        <ul class="list-disc list-inside space-y-2 mb-6 text-neutral-700">
          <li v-for="(value, key) in getProductStats()" :key="key">
            <span class="font-medium">{{ key }}:</span> {{ value }}
          </li>
        </ul>

        <!-- Variants Section -->
        <div v-if="product.variants && product.variants.length" class="mb-6">
          <h4 class="text-lg font-semibold text-primary-600 mb-3">
            {{ $t('products.variants') }}:
          </h4>
          <ul class="space-y-3">
            <li
              v-for="(variant, index) in getProductVariants()"
              :key="index"
              class="bg-neutral-50 rounded-lg p-3 text-neutral-700"
            >
              <span class="font-semibold text-primary-700">{{ variant.size }}</span>
              <span v-if="variant.material" class="text-neutral-600">
                - {{ $t('products.material') }}: {{ variant.material }}
              </span>
              <span v-if="variant.description" class="block mt-1 text-sm text-neutral-600">
                {{ variant.description }}
              </span>
            </li>
          </ul>
        </div>

        <button
          class="btn-primary"
          @click="goBack"
        >
          {{ $t('products.backToProducts') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const { t, te, tm } = useI18n()

const translationKey = computed(() => props.product.translationKey)

const getProductName = () => {
  const key = `productData.${translationKey.value}.name`
  return te(key) ? t(key) : props.product.name
}

const getProductLongDescription = () => {
  const key = `productData.${translationKey.value}.longDescription`
  return te(key) ? t(key) : props.product.longDescription
}

const getProductStats = () => {
  const statsKey = `productData.${translationKey.value}.stats`
  const labelsKey = 'productData.statsLabels'

  if (te(statsKey)) {
    const stats = tm(statsKey)
    const labels = tm(labelsKey)
    const result = {}

    // Map internal keys to translated labels and values
    const keyMap = {
      standard: 'standard',
      loadClasses: 'loadClasses',
      material: 'material',
      protection: 'protection',
      usage: 'usage',
      advantages: 'advantages'
    }

    for (const [internalKey, labelKey] of Object.entries(keyMap)) {
      if (stats[internalKey]) {
        const label = labels[labelKey] || labelKey
        result[label] = stats[internalKey]
      }
    }

    return result
  }

  return props.product.stats || {}
}

const getProductVariants = () => {
  const variantsKey = `productData.${translationKey.value}.variants`

  if (te(variantsKey)) {
    const variants = tm(variantsKey)
    return Object.values(variants).map(v => ({
      size: v.size,
      material: v.material,
      description: v.description
    }))
  }

  return props.product.variants || []
}

const goBack = () => {
  router.push('/')
}
</script>
