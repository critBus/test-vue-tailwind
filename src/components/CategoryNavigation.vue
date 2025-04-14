<template>
  <div class="py-4">
    <div
      v-for="row_categorie in row_categories"
      :key="row_categorie.id"
      class="flex overflow-x-auto whitespace-nowrap py-2 px-4 gap-4 scrollbar-hide"
    >
      <a
        v-for="category in row_categorie.categories"
        :key="category.id"
        :to="category.link"
        class="flex-shrink-0 flex flex-col items-center w-20 text-center no-underline group"
      >
        <div
          class="bg-[#f7e5c1] rounded-full h-16 w-16 flex items-center justify-center mb-1 overflow-hidden group-hover:bg-gray-200"
        >
          <img
            :src="getImageUrl(category.imageFile)"
            :alt="category.name"
            class="h-8 w-8 object-contain"
          />
        </div>

        <span
          class="text-[10px] font-semibold leading-[1.2] uppercase text-gray-700 group-hover:text-gray-900 block w-full text-center px-1 truncate-text"
        >
          {{ category.name }}
        </span>
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
      { id: 'agro', name: 'Del Agro', imageFile: 'del agro.png', link: '/categorias/agro' },
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
/* Opcional: Si necesitas cargar Roboto Condensed manualmente */

.custom-link {
  letter-spacing: 0%;
  vertical-align: middle;
  text-decoration: none !important; /* Elimina subrayado por defecto */
}

/* Estilos personalizados */
.roboto-condensed-bold {
  font-family: 'RobotoCondensed-Bold', sans-serif !important;
  letter-spacing: 0%;
  vertical-align: middle;
  text-decoration: none !important;
}
</style>
