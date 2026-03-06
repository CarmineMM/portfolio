<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import feather from 'feather-icons'

const isAcid = ref(false)

/**
 * Applies the selected theme to the document and persists it.
 */
const applyTheme = (theme) => {
    const html = document.documentElement
    
    // DaisyUI data-theme attribute
    html.setAttribute('data-theme', theme)
    
    // Add conditional class theme-[theme] as requested
    html.classList.forEach(cls => {
        if (cls.startsWith('theme-')) {
            html.classList.remove(cls)
        }
    })
    html.classList.add(`theme-${theme}`)
    
    localStorage.setItem('theme', theme)
}

/**
 * Initializes feather icons.
 */
const initIcons = () => {
    nextTick(() => {
        feather.replace()
    })
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    const theme = savedTheme || 'abyss'
    
    isAcid.value = theme === 'acid'
    applyTheme(theme)
    initIcons()
})

// Watch for manual toggle
watch(isAcid, (newValue) => {
    const newTheme = newValue ? 'acid' : 'abyss'
    applyTheme(newTheme)
    initIcons()
})
</script>

<template>
    <label class="toggle text-base-content">
        <input 
            type="checkbox" 
            v-model="isAcid"
            class="theme-controller" 
        />
        
        <!-- Use native feather-icons attributes as requested -->
        <i data-feather="moon" class="w-5 h-5"></i>
        <i data-feather="sun" class="w-5 h-5"></i>
    </label>
</template>

<style scoped>
/* Ensure icons are correctly sized within the DaisyUI toggle */
.toggle i {
    width: 1.25rem;
    height: 1.25rem;
}
</style>