<template>
  <div class="carousel w-full">
    <!-- Slides dinámicos -->
    <div
      v-for="(image, index) in images"
      :key="index"
      class="carousel-item relative w-full h-96"
      :class="{ hidden: currentSlide !== index }"
    >
      <img :src="image" class="w-full h-full object-cover" alt="Carousel image" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="bg-white/50 hover:bg-white rounded-sm w-10 h-10">
          ❮
        </button>
        <button @click="nextSlide" class="bg-white/50 hover:bg-white rounded-sm w-10 h-10">
          ❯
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
  'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
  'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
  'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
]

const currentSlide = ref(0)
const intervalTime = 10 * 1000 // segundos
let autoSlideInterval: number

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, intervalTime)
}

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval)
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>
