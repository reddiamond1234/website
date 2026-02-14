<template>
  <div class="space-y-4">
    <h2 class="section-heading">{{ $t('location.title') }}</h2>

    <!-- Address Card -->
    <div class="card">
      <h3 class="text-lg font-semibold text-primary-600 mb-2">
        {{ $t('location.addressLabel') }}
      </h3>
      <div class="text-neutral-700 space-y-1">
        <p class="font-medium">{{ $t('location.address') }}</p>
        <p>{{ $t('location.zip') }} {{ $t('location.city') }}</p>
        <p>{{ $t('location.country') }}</p>
      </div>
    </div>

    <!-- Map Container - Full Viewport Width -->
    <div class="full-width-map">
      <h3 class="text-lg font-semibold text-primary-600 px-4 py-3 bg-white text-center">
        {{ $t('location.mapTitle') }}
      </h3>
      <iframe
        :src="mapUrl"
        width="100%"
        height="400"
        class="border-0 block"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
// Google Maps embed for Brnčičeva ulica 45, Ljubljana
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.524!2d14.528743!3d46.093889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d1e9c9c3c4d%3A0x8e1e1e1e1e1e1e1e!2sBrn%C4%8Di%C4%8Deva%20ulica%2045%2C%201231%20Ljubljana%20-%20%C4%8Crnu%C4%8De!5e0!3m2!1sen!2ssi!4v1234567890"
</script>

<style scoped>
.full-width-map {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
