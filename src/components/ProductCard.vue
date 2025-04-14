<template>
  <div class="relative w-full h-40 inline-block bg-white shadow-md rounded-lg">
    <div class="p-2 h-full flex flex-row gap-1">
      <div class="relative w-[40%] inline-block">
        <img class="block w-full h-auto" :src="product.image" alt="Paquete de agua Niagara" />
        <span
          class="absolute bottom-0 right-0 px-3 py-1 z-10 bg-[#FAFAFA] bg-opacity-90 text-[#655F5F] text-[10px] font-medium rounded-md"
        >
          Mercadito TSO
        </span>
      </div>
      <div class="flex w-[60%] flex-col gap-2">
        <span class="font-semibold text-[#4E4949]">{{ product.name }}</span>
        <div class="flex flex-row gap-2">
          <span class="font-bold text-[17px]">${{ product.originalPrice }}</span>
          <span class="text-sm line-through text-red-500">${{ product.price }}</span>
          <span class="rounded-sm text-[12px] text-[#0B7B69] bg-[#DBFEE3] p-1">Envio Gratis</span>
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex flex-row justify-center items-center">
            <button
              @click="quantity -= 1"
              class="border-2 border-[#E5EAF0] rounded-md px-2 py-1 flex items-center justify-center"
            >
              <img src="@/assets/products/icons/less.svg" alt="Tag" class="h-4 w-4" />
            </button>
            <div
              class="w-4 bg-[#CFCECE] border-[#CFCECE] border-t-1 border-b-1 h-[60%] flex justify-center items-center"
            >
              <span class="text-[10px] font-bold">{{ quantity }}</span>
            </div>
            <button
              @click="quantity += 1"
              class="border-2 border-black rounded-md px-2 py-1 flex items-center justify-center"
            >
              <img src="@/assets/products/icons/add.svg" alt="Tag" class="h-4 w-4" />
            </button>
          </div>
          <button
            @click="addToCart"
            class="bg-[#FCD26D] flex flex-row gap-2 items-center justify-center bg-[#F6F6F6] border-2 border-[#E5EAF0] rounded-md px-2 py-1"
          >
            <img src="@/assets/products/icons/shopping-cart.svg" alt="Tag" class="h-4 w-4" />
            <span class="text-[#624602]">Añadir</span>
          </button>
        </div>
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
