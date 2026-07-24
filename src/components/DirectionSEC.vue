<template>
  <section id="sec" class="section-alt py-20 sm:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div ref="secRef" class="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- 左侧：文字内容 -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white text-xl shadow-lg shadow-brand-blue/20">
              <i class="fas fa-shield-halved"></i>
            </div>
            <span class="text-xs font-bold tracking-widest uppercase gradient-text">Security</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight" style="color: var(--color-text)">
            守护网络<br />安全
          </h2>

          <ul class="space-y-5 mb-10">
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

          <p class="comment-text">
            // 安全不是一个人的战斗，一起学，一起进步！
          </p>
        </div>

        <!-- 右侧：装饰图标网格 -->
        <div class="icon-grid lg:pl-8">
          <div class="icon-grid-item"><i class="fas fa-bug" style="color: #3B82F6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-lock" style="color: #8B5CF6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-shield-halved" style="color: #6366F1"></i></div>
          <div class="icon-grid-item"><i class="fas fa-terminal" style="color: #3B82F6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-magnifying-glass" style="color: #8B5CF6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-brain" style="color: #6366F1"></i></div>
          <div class="icon-grid-item"><i class="fas fa-fire" style="color: #3B82F6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-network-wired" style="color: #8B5CF6"></i></div>
          <div class="icon-grid-item"><i class="fas fa-fingerprint" style="color: #6366F1"></i></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const secRef = ref(null)
useScrollReveal(secRef)
</script>