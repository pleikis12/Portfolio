<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
    await nextTick()

    gsap.set('.about-card', { opacity: 0, y: 60 })

    gsap.to('.about-card', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.2,
        force3D: false,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 85%',
        }
    })
    ScrollTrigger.refresh()
})
</script>

<template>
    <section id="about" class="about-section min-h-screen flex items-center justify-center">
        <div class="about-inner max-w-3xl px-6">
            <p class="label">02 / ABOUT</p>
            <h2 class="about-title">
                lorem300 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.
            </h2>
            <p class="about-text">
                lorem400 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptas, doloremque.
            </p>
            <p class="about-text">
                lorem500 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptas, doloremque.
            </p>
        </div>
    </section>
</template>
