<script setup>
const props = defineProps({
  lang: String
})
</script>

<template>
    <nav class="mt-8 xl:mt-12">
        <!-- Usa lang aquí, por ejemplo: -->
        <p>Idioma: {{ props.lang }}</p>
    </nav>
</template> 