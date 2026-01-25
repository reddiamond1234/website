<template>
  <div class="space-y-6">
    <h2 class="section-heading">{{ $t('contact.title') }}</h2>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Contact Info Card -->
      <div class="card">
        <h3 class="text-xl font-semibold text-primary-600 mb-4">
          {{ $t('contact.title') }}
        </h3>

        <div class="space-y-4">
          <div>
            <p class="text-sm text-neutral-500 mb-1">{{ $t('contact.emailLabel') }}</p>
            <a
              :href="'mailto:' + contact.email"
              class="text-primary-600 hover:text-primary-700 font-medium"
            >
              {{ contact.email }}
            </a>
          </div>

          <div>
            <p class="text-sm text-neutral-500 mb-1">{{ $t('contact.phoneLabel') }}</p>
            <div class="space-x-2">
              <a
                :href="'tel:' + contact.phone1.replace(/[^0-9+]/g, '')"
                class="text-primary-600 hover:text-primary-700 font-medium"
              >
                {{ contact.phone1 }}
              </a>
              <span class="text-neutral-400">|</span>
              <a
                :href="'tel:' + contact.phone2.replace(/[^0-9+]/g, '')"
                class="text-primary-600 hover:text-primary-700 font-medium"
              >
                {{ contact.phone2 }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Working Hours Card -->
      <div class="card">
        <h3 class="text-xl font-semibold text-primary-600 mb-4">
          {{ $t('contact.workingHoursTitle') }}
        </h3>

        <ul class="space-y-3">
          <li class="flex items-center gap-3 text-neutral-700">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            {{ $t('contact.weekdays') }}
          </li>
          <li class="flex items-center gap-3 text-neutral-700">
            <span class="w-2 h-2 bg-red-500 rounded-full"></span>
            {{ $t('contact.weekends') }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { contactInfo } from '@/data/contact'

const contact = contactInfo
</script>
