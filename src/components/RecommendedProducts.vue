<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Título de la sección -->
    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">Productos recomendados</h2>

    <!-- Lista de productos -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard v-for="product in recommendedProducts" :key="product.id" :product="product" />
    </div>

    <ShowMeAllTheProducts />
  </section>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'
import waterBottles from '@/assets/products/img/pomos-de-agua.png'
import especias_refinidas from '@/assets/products/img/especias_refinidas.png'
import molo_para_piza from '@/assets/products/img/molo_para_piza.png'
import pasta_barbicue from '@/assets/products/img/pasta_barbicue.png'
import rico_drato from '@/assets/products/img/rico_drato.png'
import ShowMeAllTheProducts from './ShowMeAllTheProducts.vue'

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
  {
    id: 1,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: especias_refinidas,
    freeShipping: true,
  },
  {
    id: 1,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: molo_para_piza,
    freeShipping: true,
  },
  {
    id: 1,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: pasta_barbicue,
    freeShipping: true,
  },
  {
    id: 1,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: rico_drato,
    freeShipping: true,
  },
])
</script>
