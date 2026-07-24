<template>
  <div class="min-h-screen" :class="{ dark: isDark }">
    <!-- 全页面星辰大海 -->
    <div id="starfield"></div>

    <!-- 自定义光标 -->
    <div ref="cursorRing" class="cursor-ring"></div>
    <div ref="cursorDot" class="cursor-dot"></div>

    <NavBar :scrolled="scrolled" :is-dark="isDark" @toggle-dark="toggleDark" />
    <main class="snap-container">
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

// 滚动状态
const scrolled = ref(false)
let scrollTimer = null

function onScroll() {
  if (scrollTimer) return
  scrollTimer = requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 20
    scrollTimer = null
  })
}

// 自定义光标 — 圆环和点同时跟随，无延迟
const cursorRing = ref(null)
const cursorDot = ref(null)

function onMouseMove(e) {
  // 圆环和中心点同时即时跟随
  if (cursorRing.value) {
    cursorRing.value.style.left = e.clientX + 'px'
    cursorRing.value.style.top = e.clientY + 'px'
  }
  if (cursorDot.value) {
    cursorDot.value.style.left = e.clientX + 'px'
    cursorDot.value.style.top = e.clientY + 'px'
  }
}

// 悬停检测
function onMouseOver(e) {
  const target = e.target
  if (target.closest('a, button, [role="button"], .glass-card, .btn-gradient, .icon-grid-item')) {
    cursorRing.value?.classList.add('hover')
    cursorDot.value?.classList.add('hover')
  }
}

function onMouseOut(e) {
  const target = e.target
  if (target.closest('a, button, [role="button"], .glass-card, .btn-gradient, .icon-grid-item')) {
    cursorRing.value?.classList.remove('hover')
    cursorDot.value?.classList.remove('hover')
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseover', onMouseOver, { passive: true })
  document.addEventListener('mouseout', onMouseOut, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseover', onMouseOver)
  document.removeEventListener('mouseout', onMouseOut)
  if (scrollTimer) cancelAnimationFrame(scrollTimer)
})
</script>