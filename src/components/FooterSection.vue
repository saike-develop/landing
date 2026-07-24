<template>
  <footer class="border-t py-8 px-6" style="border-color: var(--color-border)">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- 左侧版权 -->
      <div class="flex items-center gap-2 text-sm" style="color: var(--color-text-tertiary)">
        <img src="/logo.jpg" alt="SK Logo" class="w-6 h-6 rounded-md object-cover" />
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