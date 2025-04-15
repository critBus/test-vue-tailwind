<template>
  <section
    :class="[
      props.gray_background ? 'bg-[#F8F8F8]' : 'bg-white',
      'pt-6 pb-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    ]"
  >
    <!-- Título de la sección  bg-[#F8F8F8]-->
    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">{{ props.title }}</h2>

    <!-- Lista de productos -->
    <div
      v-if="products && props.products.length > 0"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard v-for="product in props.products" :key="product.id" :product="product" />
    </div>
    <div v-else class="text-center text-gray-500 py-8">
      No hay productos para mostrar en esta sección.
    </div>

    <ShowMeAllTheProducts />
  </section>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import ProductCard from '@/components/ProductCard.vue' // Asume que ProductCard acepta una prop 'product'
import ShowMeAllTheProducts from './ShowMeAllTheProducts.vue' // Mantenemos este componente

// --- Definición de Tipos (TypeScript) ---
// Es buena práctica definir la estructura esperada para cada producto
// Puedes mover esto a un archivo `types.ts` si lo usas en más lugares
interface Product {
  id: number | string // Permitir IDs numéricos o de cadena
  name: string
  price: number
  originalPrice?: number // Marcar como opcional si no siempre está presente
  discountPercentage?: number // Opcional
  image: string | object // Puede ser una URL (string) o un módulo de imagen importado (object)
  freeShipping?: boolean // Opcional
  // Añade aquí cualquier otra propiedad que tus objetos 'product' puedan tener
}

// --- Definición de Props ---
// Definimos las propiedades que este componente aceptará
const props = withDefaults(
  defineProps<{
    title: string // Título para la sección (ej. "Productos recomendados")
    products: Product[] // Array de objetos de producto
    gray_background?: boolean
  }>(),
  {
    gray_background: true,
  },
)
</script>
