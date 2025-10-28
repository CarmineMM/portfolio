<script setup>
const props = defineProps({
    lang: String,
    homeUrl: String,
})
</script>

<template>
    <nav class="text-secondary/70 mt-12 leading-8 xl:mt-16 xl:leading-10">
        <ul>
            <li><a href="#about" class="hover:text-secondary">About Me</a></li>
            <li><a href="#experience" class="hover:text-secondary">Experience</a></li>
            <li><a href="#education" class="hover:text-secondary">Education</a></li>
        </ul>
    </nav>
</template>
