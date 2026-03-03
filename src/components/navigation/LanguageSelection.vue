<script setup>
import { onMounted, ref, watch } from 'vue'
import { languages, defaultLanguage } from '@config/i18n'

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
    const savedLang = localStorage.getItem('user-lang')
    const browserLang = navigator.language.split('-')[0]
    const currentLang = props.lang

    let targetLang = null

    // 1. Check localStorage preference
    if (savedLang && languages[savedLang]) {
        if (savedLang !== currentLang) {
            targetLang = savedLang
        }
    } 
    // 2. Check browser language if no preference saved
    else if (!savedLang) {
        if (browserLang === 'es' && currentLang !== 'es') {
            targetLang = 'es'
        } else if (browserLang !== 'es' && currentLang === 'es') {
            targetLang = 'en'
        }
    }

    if (targetLang) {
        // Prevent redirect loop if we are already there (though logic above should handle it)
        if (targetLang !== currentLang) {
             window.location.replace(getTargetUrl(targetLang))
        }
    }
})

watch(langSelected, (newLang) => {
    if (newLang === props.lang) return
    
    // Save preference
    localStorage.setItem('user-lang', newLang)
    
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
