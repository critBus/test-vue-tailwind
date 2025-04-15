<template>
  <div class="hidden md:flex md:flex-row md:justify-between p-2">
    <div class="flex flex-row ml-4 items-center">
      <img src="/src/assets/header/TSOTienda.png" alt="Logo Recortado" class="h-8 w-auto" />
      <div class="flex flex-row ml-4 items-center">
        <img class="h-8 w-auto flex-shrink-0 mr-2" :src="IconLocation" alt="Logo de la empresa" />
        <div class="flex flex-col">
          <span class="roboto text-[#7A7474]">Entregar en:</span>
          <span class="roboto-bold text-[#405774] underline">Arroyo Naranjo</span>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap flex-row items-stretch gap-2 p-3">
      <!-- Input -->
      <input
        type="text"
        id="search-input"
        placeholder="Busca chuleta de cerdo"
        class="h-full grow px-3 border border-gray-300 rounded-md text-xs font-normal font-roboto leading-snug text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 shadow-md"
      />
      <!-- Botón -->
      <button
        type="button"
        aria-label="Buscar"
        class="h-full flex-shrink-0 p-2 bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center"
      >
        <img :src="IconSearchNormal" alt="" class="h-5 w-5" />
        <span class="roboto-bold text-[#624602] ml-2">Buscar</span>
      </button>
    </div>
    <div class="flex flex-row items-center gap-3 mr-3">
      <CurrencySelector />
      <img src="@/assets/header/icono base.svg" alt="" class="h-8 w-8" />
      <div class="relative flex items-center cursor-pointer">
        <!-- Ícono del carrito -->
        <img
          src="@/assets/header/shopping-cart.svg"
          alt=""
          class="h-8 w-10 text-gray-500 hover:text-gray-700 transition-colors"
        />

        <!-- Burbuja de cantidad -->
        <div
          v-if="cartCount > 0"
          class="absolute top-0 right-0 mt-[-8px] mr-[-8px] bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1"
        >
          <span class="text-[12px]">{{ cartCount }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="md:hidden flex flex-col gap-2 p-2">
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
import { ref } from 'vue'
const cartCount = ref(3)
</script>
