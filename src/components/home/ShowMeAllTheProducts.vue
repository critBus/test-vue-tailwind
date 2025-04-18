<template>
  <div class="my-8 px-4 flex justify-center">
    <a
      to="/categorias"
      class="inline-flex items-center justify-center gap-1 leading-100% hover:text-gray-900 no-underline py-1 custom-link roboto-condensed-bold"
    >
      <span class="mr-2">Ver todos los productos</span>
      <div class="bg-[#d0cbcb] rounded-full p-1">
        <img :src="arrowIcon" alt="" class="h-3 w-3 align-middle" />
      </div>
    </a>
  </div>
</template>
<script setup lang="ts">
import arrowIcon from '@/assets/categories/Vector.svg'
</script>
<style scoped></style>
