<template>
  <section id="about" class="py-20 sm:py-28">
    <div ref="aboutRef" class="reveal max-w-6xl mx-auto px-6">
      <!-- 章节标题 -->
      <div class="text-center mb-16">
        <span class="text-sm font-bold tracking-widest uppercase gradient-text">About Us</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-6" style="color: var(--color-text)">
          关于我们
        </h2>
        <!-- 装饰线 -->
        <div class="w-20 h-1 mx-auto rounded-full"
             style="background: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))"></div>
      </div>

      <!-- 内容卡片 -->
      <div class="max-w-3xl mx-auto">
        <div class="glass-card p-10 sm:p-14 space-y-6 text-center">
          <p class="text-lg sm:text-xl leading-relaxed" style="color: var(--color-text-secondary)">
            赛客实验室致力于探索前沿技术，聚焦<strong style="color: var(--color-text)">安全</strong>与<strong style="color: var(--color-text)">开发</strong>两大方向，
            以开源精神为核心，推动技术创新与知识共享。
          </p>
          <p class="text-lg sm:text-xl leading-relaxed" style="color: var(--color-text-secondary)">
            在这里，你可以学习、实践、成长，和一群优秀的人一起，把想法变为现实。
          </p>
          <p class="text-2xl sm:text-3xl font-bold pt-6 gradient-text">
            想，全是问题；做，全是答案。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const aboutRef = ref(null)
useScrollReveal(aboutRef)
</script>