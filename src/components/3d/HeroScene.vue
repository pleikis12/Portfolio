<template>
  <primitive v-if="sceneRef" :object="sceneRef" :rotation="[0, autoRotate, 0]" />
</template>

<script setup lang="ts">
import { shallowRef, onUnmounted, ref, watch } from 'vue'
import { useGLTF } from '@tresjs/cientos'
import { useLoop } from '@tresjs/core'
import { AnimationMixer, Box3, Vector3 } from 'three'

const sceneRef = shallowRef<any>(null)
const autoRotate = ref(0)
const mixer = ref<AnimationMixer | null>(null)

// New State for Idle Resume
const isInteracting = ref(false)
const idleTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

const { state } = useGLTF('/models/tiny_isometric_room.glb')

// Expose these functions for the Parent
const handleStart = () => {
  isInteracting.value = true
  if (idleTimeout.value) clearTimeout(idleTimeout.value)
}

const handleEnd = () => {
  idleTimeout.value = setTimeout(() => {
    isInteracting.value = false
  }, 3000) // 3 second delay before resuming
}

defineExpose({ handleStart, handleEnd })

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta }) => {
  mixer.value?.update(delta)

  // Only rotate if not being dragged
  if (!isInteracting.value) {
    autoRotate.value += delta * 0.05
  }
})

watch(state, (gltf) => {
  if (!gltf) return

  const scene = gltf.scene
  const bounds = new Box3().setFromObject(scene)
  const size = bounds.getSize(new Vector3())
  const maxDim = Math.max(size.x, size.y, size.z, 1)

  const isMobile = window.innerWidth < 900
  const fitSize = isMobile ? 3.5 : 3.0
  scene.scale.setScalar(fitSize / maxDim)

  // Center logic...
  bounds.setFromObject(scene)
  const center = bounds.getCenter(new Vector3())
  scene.position.sub(center)

  sceneRef.value = scene
}, { immediate: true })

onUnmounted(() => {
  mixer.value?.stopAllAction()
  if (idleTimeout.value) clearTimeout(idleTimeout.value)
})
</script>