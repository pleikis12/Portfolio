<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    const cards = document.querySelectorAll('.about-card')

    gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.2,
        force3D: false,
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
        }
    })
})
</script>

<template>
    <section id="projects" class="projects-section">
        <div class="projects-inner">
            <h2 class="text-3xl font-bold mb-10 text-white">Featured Projects</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="md:col-span-2 md:row-span-2 bg-secondary rounded-xl p-6 border border-border">
                    <h3 class="text-xl font-semibold mb-2">Primary Project</h3>
                    <p class="text-muted-foreground">A Project...</p>
                </div>

                <div class="bg-secondary rounded-xl p-6 border border-border">
                    <h3 class="text-xl font-semibold mb-2">Project Two</h3>
                    <p class="text-muted-foreground">Short description here.</p>
                </div>

                <div class="bg-secondary rounded-xl p-6 border border-border">
                    <h3 class="text-xl font-semibold mb-2">Project Three</h3>
                    <p class="text-muted-foreground">Short description here.</p>
                </div>
            </div>
        </div>
    </section>
</template>