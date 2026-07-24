<template>
  <section id="about" class="max-w-6xl mx-auto px-6 py-20 sm:py-28">
    <div ref="aboutRef" class="reveal max-w-3xl mx-auto">
      <!-- 章节标题 -->
      <div class="text-center mb-12">
        <span class="text-sm font-semibold tracking-widest uppercase gradient-text">About Us</span>
        <h2 class="text-3xl sm:text-4xl font-bold mt-3" style="color: var(--color-text)">关于我们</h2>
      </div>

      <!-- 磨砂玻璃卡片包裹内容 -->
      <div class="glass-card p-8 sm:p-12 space-y-6">
        <p class="text-lg leading-relaxed" style="color: var(--color-text-secondary)">
          赛客实验室致力于探索前沿技术，聚焦<strong style="color: var(--color-text)">安全</strong>与<strong style="color: var(--color-text)">开发</strong>两大方向，
          以开源精神为核心，推动技术创新与知识共享。
        </p>
        <p class="text-lg leading-relaxed" style="color: var(--color-text-secondary)">
          在这里，你可以学习、实践、成长，和一群优秀的人一起，把想法变为现实。
        </p>
        <p class="text-xl font-semibold text-center pt-4" style="color: var(--color-text)">
          想，全是问题；做，全是答案。
        </p>
      </div>

      <!-- 底部统计数字（装饰） -->
      <div class="grid grid-cols-3 gap-8 mt-12 text-center">
        <div class="reveal" ref="stat1Ref">
          <div class="text-3xl sm:text-4xl font-bold gradient-text">2</div>
          <div class="text-sm mt-1" style="color: var(--color-text-tertiary)">核心方向</div>
        </div>
        <div class="reveal" ref="stat2Ref" style="animation-delay: 0.1s">
          <div class="text-3xl sm:text-4xl font-bold gradient-text">∞</div>
          <div class="text-sm mt-1" style="color: var(--color-text-tertiary)">无限可能</div>
        </div>
        <div class="reveal" ref="stat3Ref" style="animation-delay: 0.2s">
          <div class="text-3xl sm:text-4xl font-bold gradient-text">开源</div>
          <div class="text-sm mt-1" style="color: var(--color-text-tertiary)">核心精神</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const aboutRef = ref(null)
const stat1Ref = ref(null)
const stat2Ref = ref(null)
const stat3Ref = ref(null)

useScrollReveal(aboutRef)
useScrollReveal(stat1Ref)
useScrollReveal(stat2Ref)
useScrollReveal(stat3Ref)
</script>