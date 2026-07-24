<template>
  <section class="snap-section py-16 sm:py-20">
    <div ref="statsRef" class="reveal max-w-4xl mx-auto px-6">
      <div class="grid grid-cols-3 gap-6 sm:gap-10 text-center">
        <!-- 核心方向 -->
        <div class="glass-card p-6 sm:p-8">
          <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text mb-2">2</div>
          <div class="text-sm sm:text-base font-medium" style="color: var(--color-text)">核心方向</div>
          <div class="text-xs mt-1" style="color: var(--color-text-tertiary)">安全 + 开发</div>
        </div>

        <!-- 无限可能 -->
        <div class="glass-card p-6 sm:p-8">
          <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text mb-2">∞</div>
          <div class="text-sm sm:text-base font-medium" style="color: var(--color-text)">无限可能</div>
          <div class="text-xs mt-1" style="color: var(--color-text-tertiary)">探索技术前沿</div>
        </div>

        <!-- 开源精神 -->
        <div class="glass-card p-6 sm:p-8">
          <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text mb-2">开源</div>
          <div class="text-sm sm:text-base font-medium" style="color: var(--color-text)">核心精神</div>
          <div class="text-xs mt-1" style="color: var(--color-text-tertiary)">共享与协作</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const statsRef = ref(null)
useScrollReveal(statsRef)
</script>