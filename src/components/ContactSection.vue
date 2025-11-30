<template>
  <section id="contact" :dir="isRTL ? 'rtl' : 'ltr'" class="bg-blue-50 dark:bg-[#071235] py-16 sm:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-center items-center gap-12" :class="isRTL ? 'lg:flex-row-reverse' : ''">
      <div class="flex justify-center">
        <img  class="w-64 sm:w-80 md:w-[420px] lg:w-[489px]" src="/src/assets/img/ContactSection/assistant-bot.png" alt="Contact Illustration" />
      </div>
      <form class="contact-form-static rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md" :class="isRTL ? 'text-right' : 'text-left'">
        <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600/75 mb-4"> {{ $t('contact.title') }} </h3>
        <p class="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
          {{ $t('contact.description') }}
        </p>
        <div class="text-base font-medium text-gray-800 space-y-4">
          <p> {{ $t('contact.name') }}<span class="text-red-600"> *</span></p>
          <input type="text" :placeholder="$t('contact.name_placeholder')" required class="w-full p-3 rounded bg-indigo-50/25 border border-blue-300/25 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <p> {{ $t('contact.company') }} </p>
          <input type="text" :placeholder="$t('contact.company_placeholder')" class="w-full p-3 rounded bg-indigo-50/25 border border-blue-300/25 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <p> {{ $t('contact.email') }} <span class="text-red-600"> *</span></p>
          <input type="email" :placeholder="$t('contact.email_placeholder')" class="w-full p-3 rounded bg-indigo-50/25 border border-blue-300/25 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <p> {{ $t('contact.message') }} <span class="text-red-600"> *</span></p>
          <textarea :placeholder="$t('contact.message_placeholder')" rows="4" class="w-full p-3 rounded bg-indigo-50/25 border border-blue-300/25 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
          <div class="flex justify-center pt-2">
            <button class="bg-blue-600/75 text-white px-8 py-3 rounded-full hover:bg-blue-700 w-full max-w-[220px]">
              {{ $t('contact.button') }}
            </button>
          </div>
        </div>
      </form>
    </div>
    <footer class="w-full pt-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <div class="w-full border-t border-gray-300 dark:border-gray-600 mb-6" />
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-500 font-medium"> {{ $t('footer.copyright') }} </p>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n({ useScope: 'global' })
const isRTL = computed(() => locale.value === 'ar')
</script>