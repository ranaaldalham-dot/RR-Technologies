<template>
  <section class="relative w-full min-h-screen overflow-hidden bg-blue-50 dark:bg-[#060b23] transition-colors duration-500" >
    <div class="absolute inset-0 pointer-events-none z-0">      
      <div class="absolute bg-yellow-200 rounded-full blur-3xl opacity-40 w-40 h-40 top-10 left-50 md:w-[250px] md:h-[250px] md:top-[70px] md:left-[140px]" />       
      <div class="hero-blur-pink absolute rounded-full blur-3xl opacity-40 w-40 h-40 bottom-30 left-20 md:w-[230px] md:h-[230px] md:bottom-[120px] md:left-[100px]" />       
      <div class="hero-blur-blue absoluterounded-full blur-3xl opacity-40 w-28 h-28 top-5 right-40  md:w-[110px] md:h-[110px] md:top-5 md:right-40" />
      <div class="hero-blur-blue-dark absolute rounded-full blur-3xl opacity-50 w-28 h-28 top-20 left-140 md:w-[110px] md:h-[110px] md:top-20 md:right-[140px]" />      
      <div class="absolute bg-red-400 rounded-full blur-3xl opacity-40 w-48 h-48 bottom-30 right-10 md:w-[250px] md:h-[250px] md:bottom-[120px] md:right-10" />
      
      <span class="hero-dot-yellow absolute w-4 h-4 rounded-full top-[70px] left-[120px] md:w-4 md:h-4 md:top-[70px] md:left-[120px]" />
      <span class="hero-dot-red absolute w-4 h-4 rounded-full top-[150px] right-[220px] md:w-4 md:h-4 md:top-[150px] md:right-[220px]" />
      <span class="hero-dot-blue absolute w-2 h-2 rounded-full top-[100px] right-[110px] md:w-2 md:h-2 md:top-[100px] md:right-[110px]" />
      <span class="hero-dot-green absolute w-3 h-3 rounded-full top-[200px] right-[30px] md:w-3 md:h-3 md:top-[200px] md:right-[30px]" />
      <span class="hero-dot-yellow-small absolute w-3 h-3 rounded-full bottom-[110px] right-[200px] md:w-3 md:h-3 md:bottom-[110px] md:right-[200px]" />
      <span class="hero-dot-black absolute w-2 h-2 rounded-full bottom-[90px] left-[350px] md:w-2 md:h-2 md:bottom-[90px] md:left-[350px]" />
      
      <span class="hero-ring absolute w-7 h-7 border-4 rounded-full top-[340px] left-[120px] md:w-7 md:h-7 md:border-4 md:top-[340px] md:left-[120px]" />
    </div>

    <header class="w-full py-4 px-4 sm:px-6 flex items-center justify-between z-20 relative">
      <img src="/img/light-logo.png" alt="RR Technologies logo" class="w-10 sm:w-12 logo-light" />
      <img src="/img/dark-logo.png" alt="RR Technologies logo" class="w-10 sm:w-12 logo-dark" />
      <nav class="hidden md:flex gap-8 text-gray-700 dark:text-white font-medium text-sm">
        <a href="#services" class="hover:text-blue-500 dark:hover:text-blue-300"> {{ $t('nav.services') }} </a>
        <a href="#portfolio" class="hover:text-blue-500 dark:hover:text-blue-300"> {{ $t('nav.portfolio') }} </a>
        <a href="#about" class="hover:text-blue-500 dark:hove::text-blue-300"> {{ $t('nav.about') }} </a>
        <a href="#testimonials" class="hover:text-blue-500 dark:hover:text-blue-300"> {{ $t('nav.testimonials') }} </a>
      </nav>
      <button class="hidden md:block px-6 py-2 bg-blue-600/75 dark:bg-blue-500 text-white rounded-full text-sm font-medium">
        {{ $t('nav.contact') }}
      </button>
      <button class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-white/70 dark:text-white" @click="toggleMobileMenu" aria-label="Toggle navigation">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </header>
    <nav v-if="isMobileMenuOpen" class="md:hidden z-20 relative px-4 pb-4 space-y-2 text-sm font-medium text-gray-700 dark:text-white">
      <a href="#services" class="block py-2 rounded-md"> {{ $t('nav.services') }} </a>
      <a href="#portfolio" class="block py-2 rounded-md"> {{ $t('nav.portfolio') }} </a>
      <a href="#about" class="block py-2 rounded-md"> {{ $t('nav.about') }} </a>
      <a href="#testimonials" class="block py-2 rounded-md"> {{ $t('nav.testimonials') }} </a>
      <button class="mt-2 w-full px-4 py-2 bg-blue-600/75 dark:bg-blue-500 text-white rounded-full text-sm font-medium">
        {{ $t('nav.contact') }}
      </button>
    </nav>
 
    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 text-center mt-10 sm:mt-16 lg:mt-20 z-10">
      <div class="relative w-full flex justify-center items-center h-56 sm:h-64 lg:h-[300px]">
        <img src="/src/assets/Img/HeroSection/swirl.png" alt="Orbit swirl" class="absolute z-0 w-[450px] sm:w-[750px] lg:w-[1050px] translate-y-6 sm:translate-y-8 lg:translate-y-10" />
        <img src="/src/assets/Img/HeroSection/globe.png" alt="Globe" class="absolute z-10 w-36 sm:w-52 lg:w-[310px] rotate-[-10deg]" />
        <h1 class="absolute z-20 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-bold text-gray-900 dark:text-white leading-tight px-4">
          {{ $t('hero.welcome') }} <span class="relative inline-block text-blue-700/65">RR
           <img src="/src/assets/Img/HeroSection/title_line.png"  alt="underline" class="absolute left-1/2 -translate-x-1/2 -bottom-1 w-16 md:w-24" /></span><br />
             {{ $t('hero.tech') }}
        </h1>
      </div>
      <p class="hero-difficulties capitalize max-w-xl mx-auto mt-6 text-sm sm:text-base">
        {{ $t('hero.difficulties') }}
      </p>
      <button class="mt-8 px-8 py-3 bg-gray-800 dark:bg-blue-500 text-white rounded-lg shadow-md text-sm sm:text-base">
        {{ $t('hero.button') }}
      </button>
      <img src="/src/assets/Img/HeroSection/mouse.png" alt="Mouse icon" class="w-8 sm:w-10 mx-auto mt-10 mb-12" />
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
