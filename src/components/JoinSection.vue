<template>
  <section id="join" class="max-w-6xl mx-auto px-6 py-20 sm:py-28">
    <div ref="joinRef" class="reveal max-w-lg mx-auto text-center">
      <!-- 章节标题 -->
      <div class="mb-10">
        <span class="text-sm font-semibold tracking-widest uppercase gradient-text">Join Us</span>
        <h2 class="text-3xl sm:text-4xl font-bold mt-3" style="color: var(--color-text)">加入我们</h2>
      </div>

      <!-- 二维码卡片 -->
      <div class="glass-card p-8 sm:p-10">
        <!-- 二维码图片容器 -->
        <div class="w-48 h-48 mx-auto rounded-2xl flex items-center justify-center overflow-hidden"
             style="background: var(--color-bg); border: 1px solid var(--color-border)">
          <img src="/qr-code.png" alt="招新群二维码" class="w-full h-full object-cover" />
        </div>

        <p class="mt-6 text-sm" style="color: var(--color-text-tertiary)">
          扫码加入招新群，了解更多信息
        </p>
      </div>

      <!-- 底部 CTA 文字 -->
      <p class="mt-10 text-xl font-semibold" style="color: var(--color-text)">
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