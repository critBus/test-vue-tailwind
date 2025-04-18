<template>
  <a
    class="flex-shrink-0 flex flex-col items-center w-20 sm:w-32 text-center no-underline group overflow-visible"
  >
    <div class="flex items-center justify-center">
      <div class="flex flex-col">
        <div class="relative w-32 h-32">
          <div
            class="w-28 h-28 bg-[#FEF4DB] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <img
            :src="getImageUrl(props.img)"
            :alt="props.img"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40"
          />
        </div>
        <span
          class="text-[10px] roboto font-semibold leading-[1.2] uppercase text-gray-700 group-hover:text-gray-900 block w-full text-center truncate-text"
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
    return new URL(`../assets/categories/img/${name}`, import.meta.url).href
  } catch (e) {
    console.error(`Error loading image: ${name}`, e)
    return ''
  }
}
</script>
