<template>
  <div class="carousel w-full">
    <!-- Slide 1 -->
    <div id="slide1" class="carousel-item relative w-full" :class="{ hidden: currentSlide !== 0 }">
      <img
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        class="w-full"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>

    <!-- Slide 2 -->
    <div id="slide2" class="carousel-item relative w-full" :class="{ hidden: currentSlide !== 1 }">
      <img :src="topBarImage" class="w-full" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>

    <!-- Slide 3 -->
    <div id="slide3" class="carousel-item relative w-full" :class="{ hidden: currentSlide !== 2 }">
      <img
        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        class="w-full"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>

    <!-- Slide 4 -->
    <div id="slide4" class="carousel-item relative w-full" :class="{ hidden: currentSlide !== 3 }">
      <img
        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        class="w-full"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import topBarImage from '@/assets/topbar/topbar.png'
const currentSlide = ref(0)
const totalSlides = 4
const intervalTime = 5000 // 5 segundos
let autoSlideInterval: number

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
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
