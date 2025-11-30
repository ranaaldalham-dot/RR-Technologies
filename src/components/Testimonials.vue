<template>
  <section id="testimonials" :dir="isRTL ? 'rtl' : 'ltr'" class="relative py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#060b23] overflow-hidden">
    <div class="absolute inset-0 pointer-events-none"> 
      <div class="testimonial-blur-left absolute rounded-full blur-3xl opacity-50 w-32 h-32 sm:w-40 sm:h-40 md:w-[200px] md:h-[200px] left-6 sm:left-16 bottom-10" />
      <div class="testimonial-blur-right absolute rounded-full blur-3xl opacity-50 w-32 h-32 sm:w-40 sm:h-40 md:w-[200px] md:h-[200px] right-6 sm:right-16 top-10 sm:top-20" />
    </div>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex justify-center items-center gap-2 sm:gap-3 mb-10"  :class="isRTL ? 'flex-row-reverse' : ''">
        <img src="/src/assets/Img/TestimonialsSection/quote-open.png" class="w-4 sm:w-5 h-4 sm:h-5 relative -top-2 sm:-top-3" />
        <h2 class="text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-blue-600 font-bold capitalize"> {{ $t('testimonials.title') }} </h2>
        <img src="/src/assets/Img/TestimonialsSection/quote-close.png" class="w-4 sm:w-5 h-4 sm:h-5 relative -bottom-2 sm:-bottom-3" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center mt-10 sm:mt-16">
        <div class="relative bg-white/20 dark:bg-white/10 backdrop-blur-md border-4 border-white rounded-xl shadow-lg w-full max-w-[450px] min-h-[220px] p-6 sm:p-8" :class="isRTL ? 'text-right' : 'text-left'">
          <div class="flex items-center mb-4" :class="isRTL ? 'flex-row-reverse justify-end' : 'justify-start'">
            <img class="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover" :class="isRTL ? 'order-2' : 'order-1'" src="/src/assets/Img/TestimonialsSection/user1.jpg" alt="user image" />
            <h3 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white ml-2" :class="[isRTL ? 'mr-2 order-1 text-right' : 'order-2 text-left']"> {{ $t('testimonials.user1') }} </h3>
          </div>
          <p class="testimonial-text text-sm leading-relaxed capitalize" :class="isRTL ? 'pr-16 sm:pr-[70px]' : 'pl-16 sm:pl-[70px]'">
             {{ $t('testimonials.text1_line') }}
          </p>
        </div>
        <div class="relative bg-white/20 dark:bg-white/10 backdrop-blur-md border-4 border-white rounded-xl shadow-lg w-full max-w-[450px] min-h-[220px] p-6 sm:p-8" :class="isRTL ? 'text-right' : 'text-left'">
          <div class="flex items-center mb-4" :class="isRTL ? 'flex-row-reverse justify-end' : 'justify-start'">
            <img class="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover" :class="isRTL ? 'order-2' : 'order-1'" src="/src/assets/Img/TestimonialsSection/user2.jpg" alt="user image" />
            <h3 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white ml-2" :class="[isRTL ? 'mr-2 order-1 text-right' : 'order-2 text-left']"> {{ $t('testimonials.user2') }} </h3>
          </div>
          <p class="testimonial-text text-sm leading-relaxed capitalize" :class="isRTL ? 'pr-16 sm:pr-[70px]' : 'pl-16 sm:pl-[70px]'">
             {{ $t('testimonials.text2_line') }} 
          </p>  
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
</script>
