import { onMounted, onUnmounted } from 'vue'

/**
 * 滚动渐入动画组合式函数
 * 使用 Intersection Observer 监听元素进入视口，
 * 自动添加 .visible class 触发 CSS 过渡动画。
 *
 * 用法：
 *   <div ref="el" class="reveal">内容</div>
 *   useScrollReveal(el)
 */
export function useScrollReveal(elementRef) {
  let observer = null

  onMounted(() => {
    const el = elementRef.value
    if (!el) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // 元素进入视口后取消观察，避免重复触发
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}