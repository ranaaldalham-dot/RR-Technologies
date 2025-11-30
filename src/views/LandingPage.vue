<template>
  <div class="w-full overflow-hidden">
    <HeaderHeroSection  />
    <main>
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <ContactSection />
    </main>
  </div>
</template>

<script setup>
import HeaderHeroSection from '../components/HeaderHeroSection.vue'
import About from '../components/About.vue'
import Stats from '../components/Stats.vue'
import Services from '../components/Services.vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'
import Portfolio from '../components/Portfolio.vue'
import Testimonials from '../components/Testimonials.vue'
import ContactSection from '../components/ContactSection.vue'
</script>