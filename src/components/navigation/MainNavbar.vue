<script setup>
const props = defineProps({
    lang: {
        type: String,
        default: 'es',
    },
    homeUrl: {
        type: String,
        default: '#',
    },
    label: {
        type: String,
        default: 'Navigation',
    },
    homeLabel: {
        type: String,
        default: 'Home',
    },
    links: {
        type: Array,
        default: () => [],
    },
})
</script>

<template>
    <nav
        class="text-secondary/70 mt-12 hidden leading-8 lg:block xl:mt-16 xl:leading-10"
        :aria-label="props.label"
    >
        <h2 class="sr-only">{{ props.label }}</h2>
        <ul>
            <li class="hidden">
                <a :href="props.homeUrl" class="hover:text-secondary">
                    {{ props.homeLabel }}
                </a>
            </li>
            <li v-for="link in props.links" :key="link.href">
                <a :href="link.href" class="hover:text-secondary">
                    {{ link.label }}
                </a>
            </li>
        </ul>
    </nav>
</template>
