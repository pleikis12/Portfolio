<template>
  <div class="md:hidden fixed top-6 right-6 z-[100]">
    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
      class="text-white p-3 bg-black/50 backdrop-blur-md rounded-lg border border-border">
      <span v-if="!isMobileMenuOpen">Menu</span>
      <span v-else>Close</span>
    </button>
  </div>

  <div v-if="isMobileMenuOpen"
    class="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center md:hidden">
    <Navigation mode="mobile" @click="isMobileMenuOpen = false"
      class="flex flex-col items-center gap-8 text-2xl font-bold uppercase tracking-widest text-white" />
  </div>

  <div class="grid min-h-screen transition-all duration-500 ease-in-out"
    :class="isScrolled ? 'grid-cols-1' : 'grid-cols-[3fr_7fr]'">

    <aside v-show="!isScrolled"
      class="hidden md:flex sticky top-0 h-screen border-r border-border justify-center items-center max-h-screen overflow-y-auto">
      <div class="flex flex-col items-start gap-20">
        <div class="text-6xl font-bold">1/4</div>
        <Navigation mode="sidebar"
          linkClass="text-4xl font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-all duration-300 hover:pl-4" />
      </div>
    </aside>

    <nav v-show="isScrolled"
      class="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center p-6 bg-black/90 backdrop-blur-md border-b border-border">
      <Navigation mode="top" linkClass="text-sm font-bold uppercase tracking-widest hover:text-accent" />
    </nav>

    <main class="w-full">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import Navigation from './components/Navigation.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const { y } = useWindowScroll()

// Sync scroll trigger
watch(y, (newY) => {
  isScrolled.value = newY > (window.innerHeight * 0.8)
})

// Prevent body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})
</script>