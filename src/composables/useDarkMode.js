import { ref, watch } from 'vue'

/**
 * 深色模式组合式函数
 * - 优先读取 localStorage 保存的用户偏好
 * - 其次匹配系统 prefers-color-scheme
 * - 切换时同步更新 <html> 的 dark class 并持久化
 */
export function useDarkMode() {
  const getInitial = () => {
    const stored = localStorage.getItem('saike-theme')
    if (stored === 'dark') return true
    if (stored === 'light') return false
    // 跟随系统
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const isDark = ref(getInitial())

  // 初始化时同步到 DOM
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleDark() {
    isDark.value = !isDark.value
  }

  watch(isDark, (val) => {
    document.documentElement.classList.toggle('dark', val)
    localStorage.setItem('saike-theme', val ? 'dark' : 'light')
  })

  return { isDark, toggleDark }
}