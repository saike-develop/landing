<template>
  <section class="hero-bg min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
    <!-- 背景装饰光晕 -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
         style="background: radial-gradient(circle, var(--color-accent-start) 0%, transparent 70%)">
    </div>
    <div class="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
         style="background: radial-gradient(circle, var(--color-accent-end) 0%, transparent 70%)">
    </div>

    <div ref="contentRef" class="reveal max-w-3xl mx-auto text-center relative z-10">
      <!-- 主标题 -->
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4" style="color: var(--color-text)">
        赛客实验室
      </h1>
      <p class="text-lg sm:text-xl font-medium mb-2 gradient-text">
        SAIKE LAB
      </p>

      <!-- 分隔线 -->
      <div class="w-16 h-0.5 mx-auto my-8 rounded-full"
           style="background: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))">
      </div>

      <!-- 中文标语 -->
      <p class="text-2xl sm:text-3xl font-semibold mb-4 leading-relaxed" style="color: var(--color-text)">
        想，全是问题；做，全是答案。
      </p>

      <!-- 英文标语 -->
      <p class="text-lg sm:text-xl mb-10 leading-relaxed" style="color: var(--color-text-secondary)">
        Fork your future. Commit your passion.
      </p>

      <!-- 地址 -->
      <div class="flex items-center justify-center gap-2 mb-6" style="color: var(--color-text-tertiary)">
        <i class="fas fa-location-dot text-brand-blue"></i>
        <span class="text-sm">中北大学工程训练中心 A301</span>
      </div>

      <!-- 引导文案 -->
      <p class="text-base leading-relaxed max-w-lg mx-auto" style="color: var(--color-text-secondary)">
        我们在寻找志同道合的你，一起探索技术的无限可能
      </p>

      <!-- CTA 按钮 -->
      <div class="mt-10">
        <a href="#join" class="btn-gradient inline-flex items-center gap-2 text-base px-8 py-3">
          <span>加入我们</span>
          <i class="fas fa-arrow-down text-xs"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const contentRef = ref(null)
useScrollReveal(contentRef)
</script>