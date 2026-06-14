<template>
    <nav :class="mode === 'sidebar' ? 'flex flex-col gap-16' : 'flex gap-8'">
        <router-link to="/#home" :class="linkClass">1. Home</router-link>
        <router-link to="/#about" :class="linkClass">2. About</router-link>
        <router-link to="/#projects" :class="linkClass">3. Projects</router-link>
    </nav>
</template>

<script setup>
defineProps({
    mode: { type: String, default: 'sidebar' },
    linkClass: { type: String, default: '' }
})
</script>