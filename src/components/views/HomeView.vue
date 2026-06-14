<template>
    <main class="scroll-smooth">
        <div id="home" class="min-h-screen w-full relative flex items-center justify-center">

            <div class="absolute inset-0 z-0 w-full h-full">
                <MainHeroScene />
            </div>

        </div>

        <div class="h-[30vh] w-full"></div>
        <div id="about" class="w-full">
            <About />
        </div>
        <div id="projects" class="min-h-screen w-full pt-20">
            <Projects />
        </div>
    </main>
</template>

<script setup>
import MainHeroScene from '../3d/MainHeroScene.vue'
import About from '../About.vue'
import Projects from '../Projects.vue'
</script>