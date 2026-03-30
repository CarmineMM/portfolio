<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
    images: {
        type: Array,
        required: true,
        default: () => []
    },
    projectName: {
        type: String,
        required: true
    },
    classList: {
        type: String,
        default: ''
    }
})

const activeIndex = ref(0)
let intervalId = null

const isVideo = (url) => {
    return typeof url === 'string' && url.match(/\.(mp4|webm|ogg)$/i)
}

const hasVideo = computed(() => props.images.some(url => isVideo(url)))
const intervalDuration = computed(() => hasVideo.value ? 10000 : 3000)

const startAutoplay = () => {
    if (props.images.length <= 1) return
    stopAutoplay() // Ensure no multiple intervals
    intervalId = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % props.images.length
    }, intervalDuration.value)
}

const stopAutoplay = () => {
    if (intervalId) clearInterval(intervalId)
}

onMounted(() => {
    startAutoplay()
})

onUnmounted(() => {
    stopAutoplay()
})
</script>

<template>
    <div :class="['project-carousel relative overflow-hidden group', classList]">
        <!-- Renderizamos todos los elementos para SEO y UX -->
        <div 
            v-for="(item, index) in images" 
            :key="index"
            class="project-carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out"
            :class="[activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0']"
        >
            <!-- Soporte para Video -->
            <video
                v-if="isVideo(item)"
                :src="item"
                class="w-full h-full object-cover object-top"
                autoplay
                muted
                loop
                playsinline
                disableremoteplayback
            ></video>
            
            <!-- Soporte para Imagen -->
            <img
                v-else
                :src="item"
                :alt="`${projectName} screenshot ${index + 1}`"
                class="w-full h-full object-cover object-top"
                loading="lazy"
            />
        </div>

        <!-- Indicadores -->
        <div v-if="images.length > 1" class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            <button
                v-for="(_, index) in images"
                :key="index"
                @click="activeIndex = index; startAutoplay();"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="activeIndex === index ? 'bg-white w-4' : 'bg-white/50'"
                :aria-label="`Go to slide ${index + 1}`"
            ></button>
        </div>
    </div>
</template>

<style scoped>
.project-carousel {
    background-color: color-mix(in srgb, currentColor 5%, transparent);
}
</style>