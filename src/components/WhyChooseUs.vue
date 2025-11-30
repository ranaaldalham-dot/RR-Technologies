<template>
  <section class="relative py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#060b23] overflow-hidden">
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <img src="/img/light-abstract-yellow.png" class="image-light absolute w-[350px] sm:w-[500px] lg:w-[634px] top-10 sm:top-20 -left-40 opacity-80" alt="light yellow abstract" />
      <img src="/img/light-abstract-pink.png" class="image-light absolute w-[350px] sm:w-[500px] lg:w-[634px] bottom-20 -right-40 opacity-80" alt="light pink abstract" />
      <img src="/img/dark-abstract-yellow.png" class="image-dark absolute w-[250px] sm:w-[400px] lg:w-[434px] top-10 sm:top-35 -left-10 opacity-50" alt="dark yellow abstract" />
      <img src="/img/dark-abstract-blue.png" class="image-dark absolute w-[250px] sm:w-[400px] lg:w-[434px] bottom-55 right-20 opacity-60" alt="dark blue abstract" />
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-blue-600/75 dark:text-blue-600 text-lg sm:text-xl font-bold capitalize"> {{ $t('why.title') }} </h2>
      <p class="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize text-gray-900 dark:text-white mt-2 mb-4">
        {{ $t('why.subtitle') }}
      </p>
      <p class="why-paragraph text-sm sm:text-base leading-relaxed capitalize mb-12 max-w-5xl mx-auto" :class="isRTL ? 'text-center' : 'text-center'">
        {{ $t('why.paragraph1') }} <br class="hidden sm:block" />
        {{ $t('why.paragraph2') }} <br class="hidden sm:block" />
        {{ $t('why.paragraph3') }}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <div class="why-card-static w-full max-w-[360px] min-h-[386px] shadow-md rounded-xl p-6 sm:p-8 hover:shadow-lg transition">
          <img src="/src/assets/Img/WhyUsSection/experience-icon.png" class="w-12 mx-auto mb-2" />
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2"> {{ $t('why.cards.experience.title') }} </h3>
          <p class="text-gray-600 text-sm text-left capitalize leading-relaxed" :class="isRTL ? 'text-right' : 'text-left'">
            {{ $t('why.cards.experience.text') }}
          </p>
        </div>
        <div class="why-card-static w-full max-w-[360px] min-h-[386px] shadow-md rounded-xl p-6 sm:p-8 hover:shadow-lg transition">
          <img src="/src/assets/Img/WhyUsSection/team-icon.png" class="w-12 mx-auto mb-4" />
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 capitalize mb-2"> {{ $t('why.cards.team.title') }} </h3>
          <p class="text-gray-600 text-sm text-left capitalize leading-relaxed" :class="isRTL ? 'text-right' : 'text-left'">
             {{ $t('why.cards.team.text') }}
          </p>
        </div>
        <div class="why-card-static w-full max-w-[360px] min-h-[386px] shadow-md rounded-xl p-6 sm:p-8 hover:shadow-lg transition">
          <img src="/src/assets/Img/WhyUsSection/time-icon.png" class="w-12 mx-auto mb-4" />
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 capitalize mb-2"> {{ $t('why.cards.time.title') }} </h3>
          <p class="text-gray-600 text-sm text-left capitalize leading-relaxed" :class="isRTL ? 'text-right' : 'text-left'">
            {{ $t('why.cards.time.text') }}
          </p>  
        </div>
      </div>
      <div class="why-card-static w-full max-w-[360px] min-h-[386px] shadow-md rounded-xl p-6 sm:p-8 hover:shadow-lg transition sm:col-span-2 lg:col-span-1 lg:col-start-2 justify-self-center mt-2">
        <img src="/src/assets/Img/WhyUsSection/pricing-icon.png" class="w-12 mx-auto mb-4" />
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 capitalize mb-2"> {{ $t('why.cards.price.title') }} </h3>
        <p class="text-gray-600 text-sm text-left capitalize leading-relaxed" :class="isRTL ? 'text-right' : 'text-left'">
          {{ $t('why.cards.price.text') }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

const isRTL = computed(() => locale.value === 'ar')
</script>
