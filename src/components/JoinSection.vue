<template>
  <section id="join" class="relative py-20 sm:py-28 overflow-hidden"
           style="background: linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.08) 100%)">
    <!-- 装饰光晕 -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none animate-breathe"
         style="background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)"></div>

    <div ref="joinRef" class="reveal max-w-lg mx-auto px-6 text-center relative z-10">
      <!-- 章节标题 -->
      <div class="mb-10">
        <span class="text-sm font-bold tracking-widest uppercase gradient-text">Join Us</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4" style="color: var(--color-text)">
          加入我们
        </h2>
      </div>

      <!-- 二维码卡片 -->
      <div class="glass-card p-8 sm:p-10 animate-pulse-glow">
        <div class="w-52 h-52 mx-auto rounded-2xl overflow-hidden"
             style="border: 1px solid var(--color-border)">
          <img src="/qr-code.png" alt="招新群二维码" class="w-full h-full object-cover" />
        </div>
        <p class="mt-6 text-sm" style="color: var(--color-text-tertiary)">
          扫码加入招新群，了解更多信息
        </p>
      </div>

      <!-- CTA -->
      <p class="mt-10 text-2xl sm:text-3xl font-bold" style="color: var(--color-text)">
        一起探索无限可能 🚀
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const joinRef = ref(null)
useScrollReveal(joinRef)
</script>