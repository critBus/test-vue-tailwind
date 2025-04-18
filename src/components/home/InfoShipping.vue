<template>
  <div class="flex flex-col items-center mb-4">
    <div class="bg-[#FEF4DB] mb-2 flex items-center justify-center p-3 rounded-full">
      <img :src="props.icono" alt="Tag" class="h-10 w-10" />
    </div>

    <span class="roboto-bold font-bold text-xl mb-1">{{ props.title }}</span>
    <span class="roboto f text-base">{{ props.contenct }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  icono: string
  title: string
  contenct: string
}>()
// bg-[#FEF4DB]
</script>
