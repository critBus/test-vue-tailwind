<template>
  <ProductsSection title="Productos más Vendidos" :products="products" :gray_background="false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import waterBottles from '@/assets/products/img/pomos-de-agua.png'
import especias_refinidas from '@/assets/products/img/especias_refinidas.png'
import molo_para_piza from '@/assets/products/img/molo_para_piza.png'
import pasta_barbicue from '@/assets/products/img/pasta_barbicue.png'
import rico_drato from '@/assets/products/img/rico_drato.png'

import ProductsSection from './ProductsSection.vue'

// Datos de ejemplo (reemplazar con datos reales)
const products = ref([
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
