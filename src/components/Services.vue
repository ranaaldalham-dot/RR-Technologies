<template>
  <section id="services" class="relative py-16 sm:py-20 lg:py-24 bg-[#f5f8ff] dark:bg-black overflow-hidden">
    <div class="absolute top-14 left-130 w-2 h-2 bg-blue-500 rounded-full" />
    <div class="absolute bottom-47 left-10 w-3 h-3 bg-red-500 rounded-full" />
    <div class="absolute bottom-20 right-8 w-3 h-3 bg-green-500 rounded-full" />
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">
      <div  :class="['text-center', locale === 'ar' ? 'lg:text-right' : 'lg:text-left']">
        <h2 class="text-lg sm:text-xl text-blue-600/75 dark:text-blue-600 font-bold capitalize leading-snug mb-4">
          {{ $t('services.subTitle') }}
        </h2>
        <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white capitalize leading-snug">
          {{ $t('services.title1') }} <br class="hidden sm:block" />
          {{ $t('services.title2') }} <br class="hidden sm:block" />
          {{ $t('services.title3') }} <span class="services-customers"> {{ $t('services.customers') }}</span>
          {{ $t('services.title4') }} <br class="hidden sm:block" />
          {{ $t('services.title5') }} <br class="hidden sm:block" />
          {{ $t('services.title6') }} <br class="hidden sm:block" />
          {{ $t('services.title7') }}<br class="hidden sm:block" />
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
         <div v-for="(card, index) in cards" :key="index" :class="`relative w-full max-w-[260px] min-h-[170px] rounded-md shadow-md border-t-[5px] border-blue-600/75 flex flex-col justify-start p-4 cursor-pointer hover:shadow-lg transition ${card.staticClass}`">
          <img :src="card.icon" alt="icon" class="w-5 h-5 mb-2" />
          <h3 :class="`text-sm sm:text-base font-bold leading-snug ${card.textClass}`">
            {{ $t(card.title) }}
          </h3>
          <div class="absolute bottom-4 right-4 w-7 h-7 bg-blue-500/80 flex items-center justify-center rounded" :class="{'left-4 right-auto': $i18n.locale === 'ar'}">
            <img src="/src/assets/img/ServicesSection/arrow.png" alt="arrow" class="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const images = import.meta.glob('/src/assets/img/ServicesSection/*.png', { eager: true, import: 'default' }) 
const cards = [
  {
    title: 'services.cards.design',
    icon: images ['/src/assets/img/ServicesSection/design-icon.png'],
    staticClass: 'service-card-design', 
    textClass: 'text-white',
  },
  {
    title: 'services.cards.solutions',
    icon: images ['/src/assets/img/ServicesSection/solutions-icon.png'],
    staticClass: 'service-card-other', 
    textClass: 'text-gray-800',
  },
  {
    title: 'services.cards.custom',
    icon: images ['/src/assets/img/ServicesSection/development-icon.png'],
    staticClass: 'service-card-other', 
    textClass: 'text-gray-800',
  },
  {
    title: 'services.cards.search',
    icon: images ['/src/assets/img/ServicesSection/search-icon.png'],
    staticClass: 'service-card-other', 
    textClass: 'text-gray-800',
  },
]
</script>
