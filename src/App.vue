<template>
  <div class="min-h-screen" :class="{ rtl: locale === 'ar' }">

    <div class="fixed top-15 right-6 z-50 flex gap-3 items-center transition-all duration-300" :class="locale === 'ar' ? 'left-6 flex-row-reverse' : 'right-6'">
      <button @click="toggleTheme" class="relative w-14 h-8 bg-gray-300 dark:bg-blue-800 rounded-full transition-all duration-300">
        <span class="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300" :class="{ 'translate-x-6': isDark }"></span>
      </button>
      <button @click="toggleLanguage" class="px-3 py-2 rounded-xl bg-blue-600/75 dark:bg-blue-500 text-white text-sm shadow">
        {{ locale === 'en' ? 'AR' : 'EN' }}
      </button>
    </div>
    <RouterView/>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isDark = ref(false)


const applyTheme = (dark) => {
  isDark.value = dark
  const html = document.documentElement
  
  if (dark) {
    html.setAttribute('data-theme', 'dark')
    html.classList.add('dark')
  } else {
    html.setAttribute('data-theme', 'light')
    html.classList.remove('dark')
  }
}


onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    applyTheme(savedTheme === 'dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
    localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
  }
})

const toggleTheme = () => {
  const newDarkMode = !isDark.value
  applyTheme(newDarkMode)
  localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
}


const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ar' : 'en'
}

watch(locale, (lang) => {
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
})
</script>