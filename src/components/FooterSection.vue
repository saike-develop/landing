<template>
  <footer class="border-t py-8 px-6" style="border-color: var(--color-border)">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- 左侧版权 -->
      <div class="flex items-center gap-2 text-sm" style="color: var(--color-text-tertiary)">
        <div class="w-6 h-6 rounded-md bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white text-[10px] font-bold">
          SK
        </div>
        <span>Saike Lab 赛客实验室</span>
      </div>

      <!-- 中间标语 -->
      <p class="text-sm" style="color: var(--color-text-tertiary)">
        Fork your future. Commit your passion.
      </p>

      <!-- 右侧预留 -->
      <div class="text-xs" style="color: var(--color-text-tertiary)">
        &copy; {{ year }} Saike Lab
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>