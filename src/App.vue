<template>
  <div class="min-h-screen" :class="{ dark: isDark }">
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

// 自定义光标
const cursorRing = ref(null)
const cursorDot = ref(null)
let mouseX = 0, mouseY = 0
let ringX = 0, ringY = 0
let cursorRaf = null

function onMouseMove(e) {
  mouseX = e.clientX
  mouseY = e.clientY
  // 中心点即时跟随
  if (cursorDot.value) {
    cursorDot.value.style.left = mouseX + 'px'
    cursorDot.value.style.top = mouseY + 'px'
  }
}

function animateCursor() {
  // 圆环平滑跟随（弹簧效果）
  if (cursorRing.value) {
    ringX += (mouseX - ringX) * 0.15
    ringY += (mouseY - ringY) * 0.15
    cursorRing.value.style.left = ringX + 'px'
    cursorRing.value.style.top = ringY + 'px'
  }
  cursorRaf = requestAnimationFrame(animateCursor)
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
  // 光标事件
  document.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseover', onMouseOver, { passive: true })
  document.addEventListener('mouseout', onMouseOut, { passive: true })
  // 初始位置
  mouseX = window.innerWidth / 2
  mouseY = window.innerHeight / 2
  ringX = mouseX
  ringY = mouseY
  if (cursorRing.value) {
    cursorRing.value.style.left = mouseX + 'px'
    cursorRing.value.style.top = mouseY + 'px'
  }
  if (cursorDot.value) {
    cursorDot.value.style.left = mouseX + 'px'
    cursorDot.value.style.top = mouseY + 'px'
  }
  cursorRaf = requestAnimationFrame(animateCursor)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseover', onMouseOver)
  document.removeEventListener('mouseout', onMouseOut)
  if (scrollTimer) cancelAnimationFrame(scrollTimer)
  if (cursorRaf) cancelAnimationFrame(cursorRaf)
})
</script>