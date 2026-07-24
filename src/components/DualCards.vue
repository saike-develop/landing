<template>
  <section class="max-w-6xl mx-auto px-6 py-20 sm:py-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      <!-- 左侧卡片：SEC 安全方向 -->
      <div id="sec" ref="secCardRef" class="reveal glass-card p-8 sm:p-10 flex flex-col">
        <!-- 卡片头部标签 -->
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white text-lg shadow-md">
            <i class="fas fa-shield-halved"></i>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold" style="color: var(--color-text)">
            SEC 守护网络安全
          </h2>
        </div>

        <!-- 内容列表 -->
        <ul class="space-y-4 flex-1">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))"></span>
            <span style="color: var(--color-text-secondary)">
              <strong style="color: var(--color-text)">学点安全知识：</strong>Web 安全、基础防护
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))"></span>
            <span style="color: var(--color-text-secondary)">
              一起打 <strong style="color: var(--color-text)">CTF</strong>，提升实战能力
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))"></span>
            <span style="color: var(--color-text-secondary)">
              研究前沿方向：<strong style="color: var(--color-text)">AI 安全、漏洞分析</strong>
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))"></span>
            <span style="color: var(--color-text-secondary)">
              做点小工具：<strong style="color: var(--color-text)">写脚本、开发工具</strong>解决实际问题
            </span>
          </li>
        </ul>

        <!-- 底部注释文本 -->
        <p class="comment-text mt-8 pt-6 border-t" style="border-color: var(--color-border)">
          // 安全不是一个人的战斗，一起学，一起进步！
        </p>
      </div>

      <!-- 右侧卡片：CODING 开发方向 -->
      <div id="coding" ref="codingCardRef" class="reveal glass-card p-8 sm:p-10 flex flex-col" style="animation-delay: 0.15s">
        <!-- 卡片头部标签 -->
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white text-lg shadow-md">
            <i class="fas fa-code"></i>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold" style="color: var(--color-text)">
            CODING 用代码创造想法
          </h2>
        </div>

        <!-- 内容列表 -->
        <ul class="space-y-4 flex-1">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
            <span style="color: var(--color-text-secondary)">
              做点<strong style="color: var(--color-text)">小项目</strong>，用想法实现有趣的作品
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
            <span style="color: var(--color-text-secondary)">
              学习开发技术：<strong style="color: var(--color-text)">Java、前端、移动端</strong>均可
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
            <span style="color: var(--color-text-secondary)">
              练习编程能力，完整体验从<strong style="color: var(--color-text)">需求到实现</strong>
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--color-accent-end), var(--color-accent-start))"></span>
            <span style="color: var(--color-text-secondary)">
              一起探索 <strong style="color: var(--color-text)">AI</strong>，尝试制作 AI 应用
            </span>
          </li>
        </ul>

        <!-- 底部注释文本 -->
        <p class="comment-text mt-8 pt-6 border-t" style="border-color: var(--color-border)">
          // 代码让想法变成现实，我们一起把想法写出来！
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const secCardRef = ref(null)
const codingCardRef = ref(null)

useScrollReveal(secCardRef)
useScrollReveal(codingCardRef)
</script>