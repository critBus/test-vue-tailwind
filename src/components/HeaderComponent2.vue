<template>
  <div class="flex flex-col gap-2 p-2">
    <div class="flex place-content-between items-center">
      <img src="/src/assets/header/image 3.png" alt="Logo Recortado" class="h-8 w-auto" />
      <CurrencySelector />
    </div>
    <div class="w-full flex flex-row items-center gap-2">
      <img :src="IconLocation" alt="Logo de la empresa" class="h-8 w-auto flex-shrink-0" />
      <input
        type="text"
        id="search-input"
        placeholder="Busca chuleta de cerdo"
        class="flex-grow px-3 py-2 border border-gray-300 rounded-md text-xs font-normal font-roboto leading-snug align-middle text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button
        type="button"
        aria-label="Buscar"
        class="flex-shrink-0 p-2 bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center"
      >
        <img :src="IconSearchNormal" alt="" class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CurrencySelector from './CurrencySelector.vue'
import IconLocation from '@/assets/header/location.svg'
import IconSearchNormal from '@/assets/header/search-normal.svg'
</script>
