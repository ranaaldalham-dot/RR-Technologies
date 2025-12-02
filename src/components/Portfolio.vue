<template>
  <section id="portfolio" class="portfolio-border-top portfolio-border-bottom py-16 sm:py-20 lg:py-24 bg-[#f5f8ff] dark:bg-black dark:border-hidden">
     <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-blue-600 text-center mb-2"> {{ $t('portfolio.title') }} </h2>
        <img class="image-light mx-auto w-40 sm:w-52 h-6 mb-12 sm:mb-16 object-contain" src="/img/light-line.png" alt="light mood line" />
        <img class="image-dark mx-auto w-40 sm:w-52 h-6 mb-12 sm:mb-16 object-contain" src="/img/dark-line.png" alt="dark mood line" />
      </div>
      <div :class="['flex flex-col lg:flex-row items-start', isRTL ? 'text-right' : 'text-left']">
        <div class="w-full lg:w-1/4">
          <ul :class="['text-gray-900 dark:text-white text-lg sm:text-xl font-medium space-y-4 sm:space-y-6', isRTL ? 'text-right' : 'text-left']">
            <li class="text-blue-600/75 hover:text-blue-600 dark:text-blue-400/95 dark:hover:dark:text-blue-300 transition cursor-pointer">
              {{ $t('portfolio.ecommerce') }}
              <svg class="w-6 h-6 inline-block ml-2" :class="isRTL ? 'mr-2 rotate-180' : 'ml-2'" fill="none" stroke-width="1.5" stroke="currentColor"
                viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </li>
            <li class="hover:text-blue-600 dark:hover:dark:text-blue-300 transition cursor-pointer"> {{ $t('portfolio.wordpress') }} </li>
            <li class="hover:text-blue-600 dark:hover:dark:text-blue-300 transition cursor-pointer"> {{ $t('portfolio.logos') }} </li>
            <li class="hover:text-blue-600 dark:hover:dark:text-blue-300 transition cursor-pointer"> {{ $t('portfolio.graphics') }} </li>
          </ul>
        </div>
        <div class="w-full lg:w-3/4">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            <div v-for="(image, index) in repeatedImages" :key="index" class="w-full">
              <img :src="image" alt="Portfolio item" class="w-full aspect-169/148 object-cover rounded-xl hover:scale-[1.02] hover:shadow-lg transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

const isRTL = computed(() => locale.value === 'ar')

const images = import.meta.glob('/src/assets/Img/Portfolio/*.png', { eager: true, import: 'default' }) 
const portfolioImages = [
 images [ "/src/assets/Img/Portfolio/portfolio-1.png"],
 images [ "/src/assets/Img/Portfolio/portfolio-2.png"],
 images [ "/src/assets/Img/Portfolio/portfolio-3.png"],
 images [ "/src/assets/Img/Portfolio/portfolio-4.png"],
 images [ "/src/assets/Img/Portfolio/portfolio-5.png"],
 images [ "/src/assets/Img/Portfolio/portfolio-6.png"],
 images [ "/src/assets/Img/Portfolio/portfolio-7.png"],
 images [ "/src/assets/Img/Portfolio/portfolio-8.png"]
]


const repeatedImages = Array.from({ length: 16 }, (_, i) => portfolioImages[i % 8])
</script>
