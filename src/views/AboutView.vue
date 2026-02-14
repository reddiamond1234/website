<template>
  <div class="space-y-6">
    <h2 class="section-heading">{{ $t('about.title') }}</h2>

    <!-- Extended Introduction Card -->
    <div class="card">
      <p class="text-neutral-700 leading-relaxed text-lg">
        {{ $t('about.extendedIntro') }}
      </p>
    </div>

    <!-- Key Benefits Grid -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Fast Delivery -->
      <div class="card">
        <h3 class="text-xl font-semibold text-primary-600 mb-3">
          {{ $t('about.fastDeliveryTitle') }}
        </h3>
        <p class="text-neutral-700 leading-relaxed">
          {{ $t('about.fastDelivery') }}
        </p>
      </div>

      <!-- Quality -->
      <div class="card">
        <h3 class="text-xl font-semibold text-primary-600 mb-3">
          {{ $t('about.qualityTitle') }}
        </h3>
        <p class="text-neutral-700 leading-relaxed">
          {{ $t('about.quality') }}
        </p>
      </div>

      <!-- Support -->
      <div class="card">
        <h3 class="text-xl font-semibold text-primary-600 mb-3">
          {{ $t('about.supportTitle') }}
        </h3>
        <p class="text-neutral-700 leading-relaxed">
          {{ $t('about.support') }}
        </p>
      </div>
    </div>

    <!-- Products & Details Card -->
    <div class="card space-y-6">
      <!-- Usage Areas -->
      <div>
        <h3 class="text-lg font-semibold text-primary-600 mb-3">
          {{ $t('about.usageAreasTitle') }}
        </h3>
        <ul class="space-y-3">
          <li class="bg-neutral-50 rounded-lg p-3">
            <strong class="text-primary-700">{{ $t('about.usageAreas.b125.class') }}:</strong>
            <span class="text-neutral-600"> {{ $t('about.usageAreas.b125.description') }}</span>
          </li>
          <li class="bg-neutral-50 rounded-lg p-3">
            <strong class="text-primary-700">{{ $t('about.usageAreas.c250.class') }}:</strong>
            <span class="text-neutral-600"> {{ $t('about.usageAreas.c250.description') }}</span>
          </li>
          <li class="bg-neutral-50 rounded-lg p-3">
            <strong class="text-primary-700">{{ $t('about.usageAreas.d400.class') }}:</strong>
            <span class="text-neutral-600"> {{ $t('about.usageAreas.d400.description') }}</span>
          </li>
        </ul>
      </div>

      <!-- Inscriptions -->
      <div>
        <h3 class="text-lg font-semibold text-primary-600 mb-3">
          {{ $t('about.inscriptionsTitle') }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
            {{ $t('about.inscriptions.sewage') }}
          </span>
          <span class="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
            {{ $t('about.inscriptions.water') }}
          </span>
          <span class="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
            {{ $t('about.inscriptions.phone') }}
          </span>
          <span class="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
            {{ $t('about.inscriptions.electricity') }}
          </span>
          <span class="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
            {{ $t('about.inscriptions.none') }}
          </span>
        </div>
      </div>

      <!-- Protection -->
      <p class="text-neutral-700 leading-relaxed font-medium bg-neutral-50 p-4 rounded-lg">
        {{ $t('about.protection') }}
      </p>
    </div>
  </div>
</template>

<script setup>
</script>
