<script setup>
import { ref, watch } from 'vue'
import { languages, defaultLanguage } from '@config/i18n'

const props = defineProps({
    lang: {
        type: String,
        default: 'es',
    },
})

const languageCollection = {
    es: 'Español',
    en: 'English',
}

const langSelected = ref(props.lang)

watch(langSelected, (newLang) => {
    if (newLang === props.lang) return
    window.location.href = newLang === defaultLanguage ? '/' : `/${newLang}/`
})
</script>

<template>
    <select class="select select-sm w-full" v-model="langSelected">
        <option :value="key" v-for="key in Object.keys(languages)" :key="key">
            {{ languageCollection[key] }}
        </option>
    </select>
</template>
