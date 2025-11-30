<template>
  <section id="about" class="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-lg sm:text-xl text-blue-500 dark:text-blue-400 font-bold tracking-wide mb-4">
        {{ $t('about.title1') }}
        <br class="hidden sm:block" />
        {{ $t('about.title2') }}
      </h2>
      <h3 class="text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white font-bold mb-6 leading-tight">
        {{ $t('about.heading1') }}
        <br class="hidden sm:block" />
        {{ $t('about.heading2') }}
        <span class="about-design-development"> {{ $t('about.design') }} </span>
        {{ $t('about.and') }}
        <span class="about-design-development">
          {{ $t('about.development') }}
          <br class="hidden sm:block" />
        </span>
        {{ $t('about.heading3') }}
      </h3>
      <p class="about-text text-sm sm:text-base leading-relaxed capitalize mb-8 max-w-5xl mx-auto">
        {{ $t('about.paragraph1') }} <br class="hidden sm:block" />
        {{ $t('about.paragraph2') }} <br class="hidden sm:block" />
        {{ $t('about.paragraph3') }} <br class="hidden sm:block" />
        {{ $t('about.paragraph4') }}
      </p>
      <div class="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center mt-12 px-16">
        <div :class="[ 'about-text text-sm sm:text-base capitalize leading-relaxed order-2 md:order-1', locale === 'ar' ? 'text-right md:order-2' : 'text-left md:order-1']">
          <p class="mb-6">
            {{ $t('about.text1') }} <br class="hidden sm:block" />
            {{ $t('about.text2') }} <br class="hidden sm:block" />
            {{ $t('about.text3') }} <br class="hidden sm:block" />
            {{ $t('about.text4') }} <br class="hidden sm:block" />
            {{ $t('about.text5') }} <br class="hidden sm:block" />
            {{ $t('about.text6') }} <br class="hidden sm:block" />
            {{ $t('about.text7') }} <br class="hidden sm:block" />
            {{ $t('about.text8') }}
          </p>
          <div class="max-w-[520px] mx-auto text-center">
            <p :class="['mb-4 about-text', locale === 'ar' ? 'text-right' : 'text-left']">
              {{ $t('about.more1') }} <br class="hidden sm:block" />
              {{ $t('about.more2') }} <br class="hidden sm:block" />
              {{ $t('about.more3') }}
            </p>
            <transition name="fade">
              <p v-if="showMore" :class="['mb-4 about-text', locale === 'ar' ? 'text-right' : 'text-left']">
                {{ $t('about.more4') }} <br class="hidden sm:block" />
                {{ $t('about.more5') }}
              </p>
            </transition>
            <div class="flex justify-center">
              <button @click="showMore = !showMore" class="about-more-button mt-4 px-6 py-2 text-sm hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg font-medium shadow-md transition">
                {{ showMore ? $t('about.less') : $t('about.more') }}
              </button>
            </div>
          </div>
        </div>
        <div :class="['flex justify-center order-1 md:order-2', locale === 'ar' ? 'md:order-1' : 'md:order-2']">
          <img src="/src/assets/img/AboutSection/about-illustration.png" alt="About Illustration" class="w-[90%] h-[298px] sm:max-w-[420px]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showMore = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
