<template>
  <div class="carousel w-full h-96 relative">
    <!-- Slides dinámicos -->
    <div
      v-for="(image, index) in images"
      :key="index"
      class="carousel-item absolute w-full h-96"
      :class="{ hidden: currentSlide !== index }"
    >
      <img :src="image" class="w-full h-full object-cover" alt="Carousel image" />
      <div
        class="carousel-indicators absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden sm:flex space-x-3"
      >
        <button
          v-for="(image, index) in images"
          :key="`indicator-${index}`"
          @click="currentSlide = index"
          :class="[
            'w-4 h-4 rounded-full cursor-pointer',
            currentSlide === index ? 'bg-white' : 'bg-gray-400',
          ]"
        ></button>
      </div>
      <div
        class="absolute left-5 right-5 top-1/2 hidden sm:flex -translate-y-1/2 transform justify-between"
      >
        <button @click="prevSlide" class="bg-white/50 hover:bg-white w-10 h-10 rounded-sm">
          ❮
        </button>
        <button @click="nextSlide" class="bg-white/50 hover:bg-white w-10 h-10 rounded-sm">
          ❯
        </button>
      </div>
    </div>

    <!-- Indicadores de navegación -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ImgExample from '@/assets/topbar/img/Banner.png'

const images = [ImgExample, ImgExample, ImgExample, ImgExample]

const currentSlide = ref(0)
const intervalTime = 5000 // 5 segundos
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
