<template>
  <div class="sm:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
      <button
        v-for="menu_button in buttons"
        :key="menu_button.name"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
      >
        <img
          :src="menu_button.icon"
          alt=""
          class="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600"
        />

        <span class="text-sm text-gray-500 group-hover:text-blue-600">{{ menu_button.name }}</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconMenu from '@/assets/cell_phone_navigation/icons/menu.svg'
import IconProduct from '@/assets/cell_phone_navigation/icons/products.svg'
import IconProfile from '@/assets/cell_phone_navigation/icons/profile.svg'
import IconShop from '@/assets/cell_phone_navigation/icons/shop.svg'
import IconShoppingCart from '@/assets/cell_phone_navigation/icons/shopping-cart.svg'
interface ButtonData {
  icon: string
  name: string
  selected: boolean
}
const buttons: ButtonData[] = [
  {
    icon: IconMenu,
    name: 'Menú',
    selected: false,
  },
  {
    icon: IconShop,
    name: 'Tiendas',
    selected: true,
  },
  {
    icon: IconProduct,
    name: 'Productos',
    selected: false,
  },
  {
    icon: IconShoppingCart,
    name: 'Carrito',
    selected: false,
  },
  {
    icon: IconProfile,
    name: 'Perfil',
    selected: false,
  },
]
</script>
