<template>
    <TresCanvas shadows alpha class="h-full w-full">
        <TresPerspectiveCamera :position="cameraPosition" :look-at="[0, 0, 0]" />

        <OrbitControls @start="heroSceneRef?.handleStart" @end="heroSceneRef?.handleEnd" :enable-pan="false"
            :enable-zoom="false" />

        <Suspense>
            <HeroScene ref="heroSceneRef" />
        </Suspense>

        <TresAmbientLight :intensity="0.8" />
        <TresDirectionalLight :position="[2, 3, 2]" :intensity="1.5" cast-shadow />
    </TresCanvas>
</template>

<script setup>
import { ref, computed } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import HeroScene from './HeroScene.vue'

// 1. Determine if mobile
const isMobile = window.innerWidth < 900

// 2. Compute the camera position array based on isMobile
const cameraPosition = computed(() => [12, 7, isMobile ? 8 : 5])

const heroSceneRef = ref()
</script>