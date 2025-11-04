<script setup>
const props = defineProps({
    lang: {
        type: String,
        default: 'es',
    },
    links: {
        type: Array,
        default: () => [],
    },
})
</script>

<template>
    <div class="dock lg:hidden">
        <a
            :href="link.href"
            v-for="link in props.links"
            :key="link.href"
            class="inline-flex items-center gap-2"
        >
            <span class="dock-label">{{ link.label }}</span>
        </a>
    </div>
</template>
