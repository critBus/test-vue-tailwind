<template>
  <div class="relative inline-block bg-white shadow-md rounded-lg">
    <div class="p-4 flex flex-row gap-1">
      <div class="relative inline-block">
        <img class="block w-full h-auto" :src="product.image" alt="Paquete de agua Niagara" />
        <span
          class="absolute bottom-0 right-0 mb-2 mr-2 z-10 bg-[#FAFAFA] bg-opacity-90 text-[#655F5F] text-[10px] font-medium px-3 py-1 rounded-md"
        >
          Mercadito TSO
        </span>
      </div>
    </div>

    <div class="absolute top-0 left-0 flex flex-col space-y-1 z-10">
      <div
        class="bg-[#FBDDE5] px-2.5 py-1 rounded-r-lg shadow flex flex-row items-center justify-center"
      >
        <img src="@/assets/products/icons/tag.svg" alt="Tag" class="h-4 w-4" />
        <span class="text-red-500 text-xs font-bold"> -10% </span>
      </div>

      <div class="bg-[#FEF4DB] w-8 p-1 rounded-md shadow flex items-center justify-center">
        <img src="@/assets/products/icons/select.svg" alt="Tag" class="h-4 w-4" />
      </div>

      <div class="bg-[#E5EAF0] w-8 p-1 rounded-md shadow flex items-center justify-center">
        <img src="@/assets/products/icons/calendar-edit.svg" alt="Tag" class="h-4 w-4" />
      </div>
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
