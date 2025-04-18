<template>
  <a
    class="flex-shrink-0 flex flex-col items-center text-center no-underline group overflow-visible"
  >
    <div class="flex items-center justify-center overflow-visible">
      <div class="flex flex-col overflow-visible">
        <div class="relative w-24 h-24 sm:w-28 sm:h-28 overflow-visible">
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 bg-[#FEF4DB] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <img
            :src="getImageUrl(props.img)"
            :alt="props.img"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40"
          />
        </div>
        <span
          class="text-sm sm:text-[10px] roboto font-semibold leading-[1.2] uppercase text-gray-700 group-hover:text-gray-900 block w-20 sm:w-full text-center truncate-text"
        >
          {{ props.name }}
        </span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  img: string
  name: string
}>()

function getImageUrl(name: string): string {
  try {
    return new URL(`../../assets/categories/img/${name}`, import.meta.url).href
  } catch (e) {
    console.error(`Error loading image: ${name}`, e)
    return ''
  }
}
</script>

<style scoped>
.truncate-text {
  @apply overflow-hidden whitespace-nowrap;
  text-overflow: ellipsis;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0%;
  vertical-align: middle;
}
</style>
