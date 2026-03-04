<script setup>
import { onMounted, ref, watch } from 'vue'
import { languages, defaultLanguage, i18next } from '@config/i18n'

const props = defineProps({
    lang: {
        type: String,
        default: 'en',
    },
})

const languageCollection = {
    es: 'Español',
    en: 'English',
}

const langSelected = ref(props.lang)

const getTargetUrl = (targetLang) => {
    return targetLang === defaultLanguage ? '/' : `/${targetLang}/`
}

onMounted(() => {
    // i18next has already run its detection logic via the imported configuration
    const detectedLang = i18next.language
    const currentLang = props.lang

    // i18next handles localStorage (key: 'i18nextLng') and navigator detection automatically
    // We just need to check if the detected language matches the current URL language
    
    // Ensure detectedLang is supported (it should be due to supportedLngs config, but safety check)
    if (detectedLang && languages[detectedLang] && detectedLang !== currentLang) {
        window.location.replace(getTargetUrl(detectedLang))
    }
})

watch(langSelected, async (newLang) => {
    if (newLang === props.lang) return
    
    // Update i18next state which updates localStorage ('i18nextLng')
    await i18next.changeLanguage(newLang)
    
    window.location.href = getTargetUrl(newLang)
})
</script>

<template>
    <select class="select select-sm w-full" v-model="langSelected">
        <option :value="key" v-for="key in Object.keys(languages)" :key="key">
            {{ languageCollection[key] }}
        </option>
    </select>
</template>
