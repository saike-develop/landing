<template>
  <div class="min-h-screen" :class="{ dark: isDark }">
    <NavBar :scrolled="scrolled" :is-dark="isDark" @toggle-dark="toggleDark" />
    <main>
      <HeroSection />
      <StatsBanner />
      <DirectionSEC />
      <DirectionCoding />
      <AboutSection />
      <JoinSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBanner from './components/StatsBanner.vue'
import DirectionSEC from './components/DirectionSEC.vue'
import DirectionCoding from './components/DirectionCoding.vue'
import AboutSection from './components/AboutSection.vue'
import JoinSection from './components/JoinSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useDarkMode } from './composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()

const scrolled = ref(false)
let scrollTimer = null

function onScroll() {
  if (scrollTimer) return
  scrollTimer = requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 20
    scrollTimer = null
  })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (scrollTimer) cancelAnimationFrame(scrollTimer)
})
</script>