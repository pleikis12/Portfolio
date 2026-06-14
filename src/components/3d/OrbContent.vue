<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

const orbRef = shallowRef()

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
    if (orbRef.value) {
        orbRef.value.rotation.y = elapsed * 0.2
        orbRef.value.rotation.x = Math.sin(elapsed * 0.5) * 0.2
    }
})
</script>

<template>
    <TresMesh ref="orbRef">
        <TresIcosahedronGeometry :args="[1.5, 30]" />
        <TresMeshPhysicalMaterial color="#E11D48" :transmission="0.9" :roughness="0.1" :thickness="1.5"
            :envMapIntensity="1" />
    </TresMesh>
</template>