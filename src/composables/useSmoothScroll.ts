import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'

export function useSmoothScroll() {
  let lenis: Lenis

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  onUnmounted(() => {
    if (lenis) lenis.destroy()
  })
}