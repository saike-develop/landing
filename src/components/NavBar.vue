<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-500"
    :class="scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto w-full px-6 flex items-center justify-between">
      <!-- 左侧 Logo + 名称 -->
      <a href="#" class="flex items-center gap-3 group" @click.prevent="scrollToTop">
        <img src="/logo.jpg" alt="SK Logo" class="w-9 h-9 rounded-xl object-cover shadow-md shadow-brand-blue/20 transition-transform duration-300 group-hover:scale-105" />
        <span class="text-base font-semibold tracking-tight hidden sm:inline" style="color: var(--color-text)">
          赛客实验室 <span class="font-normal" style="color: var(--color-text-secondary)">SAIKE LAB</span>
        </span>
      </a>

      <!-- 右侧导航链接（桌面端） -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-2 text-sm rounded-lg transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
          style="color: var(--color-text-secondary)"
        >
          {{ link.label }}
        </a>
        <!-- 招新入口按钮 -->
        <a href="#join" class="btn-gradient ml-2 text-sm">招新入口</a>
        <!-- 深色模式切换 -->
        <button
          @click="$emit('toggleDark')"
          class="ml-2 w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
          style="color: var(--color-text-secondary)"
          :title="isDark ? '切换浅色模式' : '切换深色模式'"
        >
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </div>

      <!-- 移动端：深色切换 + 菜单按钮 -->
      <div class="flex md:hidden items-center gap-1">
        <button
          @click="$emit('toggleDark')"
          class="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
          style="color: var(--color-text-secondary)"
        >
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <button
          @click="mobileOpen = !mobileOpen"
          class="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
          style="color: var(--color-text-secondary)"
        >
          <i :class="mobileOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- 移动端下拉菜单 -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="absolute top-16 left-0 right-0 glass-card rounded-t-none rounded-b-2xl mx-4 p-4 flex flex-col gap-1 md:hidden"
      >
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="mobileOpen = false"
           class="px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
           style="color: var(--color-text-secondary)">{{ link.label }}</a>
        <a href="#join" @click="mobileOpen = false" class="btn-gradient text-center mt-2">招新入口</a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ scrolled: Boolean, isDark: Boolean })
defineEmits(['toggleDark'])

const mobileOpen = ref(false)

const navLinks = [
  { label: '关于我们', href: '#about' },
  { label: 'SEC 安全', href: '#sec' },
  { label: 'CODING 开发', href: '#coding' },
  { label: '招新入口', href: '#join' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>