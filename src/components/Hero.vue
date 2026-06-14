<template>
    <div class="relative h-screen w-full bg-[#020202]">
        <div class="absolute inset-0 z-0">
            <TresCanvas clear-color="#020202" shadows>
                <TresPerspectiveCamera :position="[0, 2, 6]" :look-at="[0, 0, 0]" />

                <TresAmbientLight :intensity="0.5" />

                <HeroOrb />
            </TresCanvas>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroOrb from './3d/HeroOrb.vue' 
</script>