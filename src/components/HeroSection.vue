<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden hero-bg">
    <!-- 浮动装饰光晕 -->
    <div
      class="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none animate-float-blob-1"
      style="background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%); top: 10%; left: -10%;"
    ></div>
    <div
      class="absolute w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full pointer-events-none animate-float-blob-2"
      style="background: radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%); bottom: 15%; right: -8%;"
    ></div>
    <div
      class="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full pointer-events-none animate-float-blob-3"
      style="background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%);"
    ></div>

    <!-- 主内容 -->
    <div ref="contentRef" class="reveal max-w-4xl mx-auto text-center relative z-10">
      <!-- SK 标识 -->
      <div class="inline-flex items-center gap-3 mb-8 animate-pulse-glow rounded-2xl px-5 py-2.5"
           style="background: var(--color-bg-card); backdrop-filter: blur(10px); border: 1px solid var(--color-border)">
        <img src="/logo.jpg" alt="SK Logo" class="w-7 h-7 rounded-lg object-cover" />
        <span class="text-sm font-semibold tracking-wider gradient-text">SAIKE LAB</span>
      </div>

      <!-- 主标题 -->
      <h1 class="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-6"
          style="color: var(--color-text)">
        赛客实验室
      </h1>

      <!-- 中文标语 -->
      <p class="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 leading-relaxed"
         style="color: var(--color-text)">
        想，全是问题；做，全是答案。
      </p>

      <!-- 英文标语 -->
      <p class="text-base sm:text-lg mb-10 leading-relaxed tracking-wide"
         style="color: var(--color-text-tertiary)">
        Fork your future. Commit your passion.
      </p>

      <!-- 地址 -->
      <div class="flex items-center justify-center gap-2 mb-8" style="color: var(--color-text-tertiary)">
        <i class="fas fa-location-dot" style="color: #3B82F6"></i>
        <span class="text-sm">中北大学工程训练中心 A301</span>
      </div>

      <!-- 引导文案 -->
      <p class="text-base leading-relaxed max-w-lg mx-auto mb-10" style="color: var(--color-text-secondary)">
        我们在寻找志同道合的你，一起探索技术的无限可能
      </p>

      <!-- CTA 按钮 -->
      <a href="#join" class="btn-gradient inline-flex items-center gap-2 text-base px-8 py-3.5 shadow-xl">
        <span>加入我们</span>
        <i class="fas fa-arrow-right text-xs"></i>
      </a>
    </div>

    <!-- 底部滚动提示 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <span class="text-xs tracking-widest uppercase" style="color: var(--color-text-tertiary)">Scroll</span>
      <div class="w-5 h-8 rounded-full border flex items-start justify-center p-1"
           style="border-color: var(--color-border)">
        <div class="w-1.5 h-1.5 rounded-full animate-scroll-bounce"
             style="background: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))"></div>
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