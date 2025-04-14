<template>
  <div class="relative inline-block text-left">
    <!-- Botón del selector -->
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="bg-[#F8F8F8] flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
    >
      {{ selectedCurrency }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Menú desplegable -->
    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <button
          v-for="currency in currencies"
          :key="currency"
          @click="selectCurrency(currency)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {{ currency }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Opciones de monedas disponibles
const currencies = ['USD', 'EUR', 'GBP', 'MXN', 'ARS']

// Estado local
const isOpen = ref(false) // Controla si el menú está abierto o cerrado
const selectedCurrency = ref('USD') // Moneda seleccionada inicialmente

// Función para seleccionar una moneda
const selectCurrency = (currency: string) => {
  selectedCurrency.value = currency
  isOpen.value = false // Cierra el menú después de seleccionar
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
