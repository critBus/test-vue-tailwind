<template>
  <div class="">
    <div
      v-for="row_categorie in row_categories"
      :key="row_categorie.id"
      class="flex overflow-x-auto whitespace-nowrap px-4 gap-4 scrollbar-hide h-52"
    >
      <a
        v-for="category in row_categorie.categories"
        :key="category.id"
        :to="category.link"
        class="flex-shrink-0 flex flex-col items-center w-20 sm:w-32 text-center no-underline group overflow-visible"
      >
        <div class="flex items-center justify-center h-screen">
          <div class="relative w-52 h-52">
            <div
              class="w-28 h-28 bg-[#FEF4DB] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></div>
            <img
              :src="getImageUrl(category.imageFile)"
              alt="Verduras"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40"
            />
          </div>
        </div>
      </a>
    </div>
    <ShowMeAllTheProducts />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShowMeAllTheProducts from './ShowMeAllTheProducts.vue'

interface RowCategory {
  id: string
  categories: Category[]
}

interface Category {
  id: string
  name: string
  imageFile: string
  link: string
}

const row_categories = ref<RowCategory[]>([
  {
    id: '1',
    categories: [
      { id: 'carnicos', name: 'Cárnicos', imageFile: 'carnicos.png', link: '/categorias/carnicos' },
      {
        id: 'pescados',
        name: 'Pescados y Mariscos',
        imageFile: 'pescados y mariscos.png',
        link: '/categorias/pescados',
      },
      {
        id: 'huevos',
        name: 'Huevos y Lácteos',
        imageFile: 'huevos.png',
        link: '/categorias/huevos',
      },
      {
        id: 'agro',
        name: 'Del Agro',
        imageFile: 'del agro.png',
        link: '/categorias/agro',
      },
      {
        id: 'ferreteria',
        name: 'Ferretería',
        imageFile: 'ferreteria.png',
        link: '/categorias/ferreteria',
      },
      {
        id: 'helados',
        name: 'Cakes, Helados y Dulces',
        imageFile: 'helados.png',
        link: '/categorias/ferreteria',
      },
    ],
  },
  {
    id: '2',
    categories: [
      {
        id: 'infantiles',
        name: 'Infantiles y Escolares',
        imageFile: 'infantiles y escolares.png',
        link: '/categorias/infantiles',
      },
      { id: 'bebidas', name: 'Bebidas', imageFile: 'bebidas.png', link: '/categorias/bebidas' },
      { id: 'farmacia', name: 'Farmacia', imageFile: 'farmacia.png', link: '/categorias/farmacia' },
      { id: 'buffet', name: 'Buffet', imageFile: 'buffet.png', link: '/categorias/buffet' },
      {
        id: 'electro',
        name: 'Electro',
        imageFile: 'electrodomesticos.png',
        link: '/categorias/electro',
      },
    ],
  },
])

function getImageUrl(name: string): string {
  try {
    return new URL(`../assets/categories/${name}`, import.meta.url).href
  } catch (e) {
    console.error(`Error loading image: ${name}`, e)
    return ''
  }
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.truncate-text {
  @apply overflow-hidden whitespace-nowrap;
  text-overflow: ellipsis;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0%;
  vertical-align: middle;
}
</style>
