<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart' // Asumiendo que tienes una store para el carrito

// Estado local para la búsqueda
const searchQuery = ref('')

// Función para realizar la búsqueda
const performSearch = () => {
  console.log('Búsqueda:', searchQuery.value)
  // Aquí puedes integrar Axios para hacer una solicitud HTTP
}

// Store de Pinia para el carrito
const cartStore = useCartStore()
const cartItemCount = cartStore.itemCount // Suponiendo que tienes un getter itemCount en tu store
</script>

<template>
  <header class="bg-white shadow-md">
    <!-- Barra superior -->
    <div class="flex items-center justify-between px-4 py-2">
      <!-- Logo y texto "Entregar en" -->
      <div class="flex items-center space-x-2">
        <img src="/public/logo.png" alt="Logo" class="h-8 w-auto" />
        <span class="text-gray-600">Entregar en:</span>
        <span class="font-medium text-blue-500">Arroyo Naranjo</span>
      </div>

      <!-- Campo de búsqueda -->
      <div class="flex-grow flex items-center">
        <input
          type="text"
          placeholder="Busca chuleta de cerdo"
          v-model="searchQuery"
          class="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-yellow-500"
        />
        <button @click="performSearch" class="bg-yellow-500 text-white px-4 py-2 rounded-r-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Buscar
        </button>
      </div>

      <!-- Opciones de moneda, usuario y carrito -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center">
          <span class="text-gray-600">USD</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414l3-3A1 1 0 0110 3zm-3.707 9c.467-.467.467-1.25 0-1.707s-1.25-.467-1.707 0L4 14v2h6a1 1 0 110 2H4a1 1 0 01-1-1v-2l7.293-7.293zm3.414 2l6-6V6a1 1 0 011-1h2a1 1 0 110 2v6l-6 6z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a2 2 0 002 2v4l-2-2v-4a2 2 0 00-2-2zm0 0v4a2 2 0 01-2 2v-4a2 2 0 012-2zm2 4v-4a2 2 0 012-2v4a2 2 0 01-2 2zm0 0v4a2 2 0 002 2v-4a2 2 0 00-2-2z"
            />
          </svg>
        </div>
        <div class="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M21 21h-2a2 2 0 01-2-2v-5.4M15 7a2 2 0 012 2v6a2 2 0 01-2 2h-5"
            />
          </svg>
          <span
            class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 -mt-1 -mr-1 text-center leading-tight"
            >{{ cartItemCount }}</span
          >
        </div>
      </div>
    </div>

    <!-- Menú inferior -->
    <nav class="flex justify-center space-x-4 p-4">
      <router-link to="/" class="text-gray-600 hover:text-black">Inicio</router-link>
      <router-link to="/productos" class="text-gray-600 hover:text-black"
        >Todos los productos</router-link
      >
      <router-link to="/categorias" class="text-gray-600 hover:text-black">Categorías</router-link>
      <router-link to="/vende-con-nosotros" class="text-gray-600 hover:text-black"
        >Vende con Nosotros</router-link
      >
      <router-link to="/contactenos" class="text-gray-600 hover:text-black"
        >Contáctenos</router-link
      >
      <router-link to="/preguntas-frecuentes" class="text-gray-600 hover:text-black"
        >Preguntas frecuentes</router-link
      >
    </nav>
  </header>
</template>
