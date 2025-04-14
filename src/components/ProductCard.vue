<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <!-- Imagen del producto -->
    <img :src="product.image" alt="Imagen del producto" class="w-full h-48 object-cover mb-4" />

    <!-- Detalles del producto -->
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-lg font-semibold">{{ product.name }}</h2>
      <span v-if="product.discountPercentage" class="bg-yellow-500 text-white px-2 py-1 rounded"
        >-{{ product.discountPercentage }}%</span
      >
    </div>

    <!-- Precio original y precio con descuento -->
    <div class="mb-4">
      <del class="text-gray-500">${{ product.originalPrice }}</del>
      <span class="text-green-600 font-bold ml-2">${{ product.price }}</span>
    </div>

    <!-- Botones de cantidad y agregar al carrito -->
    <div class="flex items-center space-x-4">
      <!-- Botón para disminuir la cantidad -->
      <button
        @click="quantity = Math.max(quantity - 1, 1)"
        class="bg-gray-200 hover:bg-gray-300 p-2 rounded"
      >
        <img src="@/assets/products/icons/less.svg" alt="Restar" class="h-5 w-5" />
      </button>

      <!-- Mostrar cantidad actual -->
      <span class="text-lg font-semibold">{{ quantity }}</span>

      <!-- Botón para aumentar la cantidad -->
      <button @click="quantity += 1" class="bg-gray-200 hover:bg-gray-300 p-2 rounded">
        <img src="@/assets/products/icons/add.svg" alt="Agregar" class="h-5 w-5" />
      </button>

      <!-- Botón principal para agregar al carrito -->
      <button
        @click="addToCart"
        class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
      >
        <img src="@/assets/products/icons/shopping-cart.svg" alt="Carrito" class="h-5 w-5" />
        <span>Añadir</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

// Propiedades del componente
const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      name: '',
      price: 0,
      originalPrice: 0,
      discountPercentage: 0,
      image: '',
    }),
  },
})

// Estado local para manejar la cantidad
const quantity = ref(1)

// Acceso al store de Pinia
const cartStore = useCartStore()

// Método para agregar al carrito
const addToCart = () => {
  const newItem = {
    id: props.product.id,
    name: props.product.name,
    quantity: quantity.value,
  }
  cartStore.addItem(newItem)
}
</script>
