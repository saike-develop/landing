<template>
  <section id="coding" class="py-20 sm:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div ref="codingRef" class="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- 左侧：装饰图标网格（与 SEC 交错） -->
        <div class="icon-grid lg:pr-8 order-2 lg:order-1">
          <div class="icon-grid-item"><i class="fas fa-code" style="color: #8B5CF6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-cube" style="color: #6366F1"></i></div>
          <div class="icon-grid-item"><i class="fas fa-mobile-screen" style="color: #3B82F6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-gear" style="color: #8B5CF6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-robot" style="color: #6366F1"></i></div>
          <div class="icon-grid-item"><i class="fas fa-paint-brush" style="color: #3B82F6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-layer-group" style="color: #8B5CF6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-rocket" style="color: #6366F1"></i></div>
          <div class="icon-grid-item"><i class="fas fa-wand-magic-sparkles" style="color: #3B82F6"></i></div>
        </div>

        <!-- 右侧：文字内容 -->
        <div class="order-1 lg:order-2">
          <div class="flex items-center gap-3 mb-5 lg:justify-end">
            <span class="text-xs font-bold tracking-widest uppercase gradient-text">Development</span>
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white text-xl shadow-lg shadow-brand-purple/20">
              <i class="fas fa-code"></i>
            </div>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight lg:text-right" style="color: var(--color-text)">
            用代码创造<br />想法
          </h2>

          <ul class="space-y-5 mb-10 lg:text-right">
            <li class="flex items-start gap-3 lg:flex-row-reverse">
              <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                    style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
              <span style="color: var(--color-text-secondary)">
                做点<strong style="color: var(--color-text)">小项目</strong>，用想法实现有趣的作品
              </span>
            </li>
            <li class="flex items-start gap-3 lg:flex-row-reverse">
              <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                    style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
              <span style="color: var(--color-text-secondary)">
                学习开发技术：<strong style="color: var(--color-text)">Java、前端、移动端</strong>均可
              </span>
            </li>
            <li class="flex items-start gap-3 lg:flex-row-reverse">
              <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                    style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
              <span style="color: var(--color-text-secondary)">
                练习编程能力，完整体验从<strong style="color: var(--color-text)">需求到实现</strong>
              </span>
            </li>
            <li class="flex items-start gap-3 lg:flex-row-reverse">
              <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                    style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
              <span style="color: var(--color-text-secondary)">
                一起探索 <strong style="color: var(--color-text)">AI</strong>，尝试制作 AI 应用
              </span>
            </li>
          </ul>

          <p class="comment-text lg:text-right">
            // 代码让想法变成现实，我们一起把想法写出来！
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const codingRef = ref(null)
useScrollReveal(codingRef)
</script>