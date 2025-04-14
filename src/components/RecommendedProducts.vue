<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Título de la sección -->
    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">Productos recomendados</h2>

    <!-- Lista de productos -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard v-for="product in recommendedProducts" :key="product.id" :product="product" />
    </div>

    <!-- Botón para ver todos los productos -->
    <div class="mt-8 flex justify-center md:justify-end">
      <router-link
        to="/productos"
        class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
      >
        <span>Ver todos los productos</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'
import waterBottles from '@/assets/products/img/pomos-de-agua.png'

// Datos de ejemplo (reemplazar con datos reales)
const recommendedProducts = ref([
  {
    id: 1,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: waterBottles,
    freeShipping: true,
  },
  // ... Otros productos (agregar más objetos aquí)
])
</script>
