<script setup>
const props = defineProps({
    lang: String,
    homeUrl: String,
})
</script>

<template>
    <nav class="text-secondary mt-8 leading-8 xl:mt-12 xl:leading-10">
        <h4>
            <a :href="homeUrl">/Home</a>
        </h4>
        <ul class="pl-4">
            <li><a href="#about" class="">About Me</a></li>
            <li><a href="#projects" class="">Projects</a></li>
            <li><a href="#contact" class="">Contact</a></li>
        </ul>
    </nav>
</template>
