<template>
  <div class="overflow-visible">
    <div class="sm:hidden ml-4 overflow-visible">
      <div
        v-for="row_categorie in row_categories"
        :key="row_categorie.id"
        class="sm:hidden flex overflow-x-auto whitespace-nowrap gap-1 overflow-visible scrollbar-hide"
      >
        <CategoryImageLink
          v-for="category in row_categorie.categories"
          :key="category.id"
          :to="category.link"
          :img="category.imageFile"
          :name="category.name"
        />
      </div>
      <ShowMeAllTheProducts />
    </div>

    <div class="max-sm:hidden mt-3 flex flex-col items-center justify-center">
      <div class="flex flex-row flex-wrap max-sm:h-52">
        <CategoryImageLink
          v-for="category in all_categories"
          :key="category.id"
          :to="category.link"
          :img="category.imageFile"
          :name="category.name"
        />
      </div>
      <ShowMeAllTheProducts />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShowMeAllTheProducts from '@/components/home/ShowMeAllTheProducts.vue'
import CategoryImageLink from '@/components/home/CategoryImageLink.vue'
import { splitList } from '@/utils/arrayUtils'

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

const all_categories: Category[] = [
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
]

const [firstHalf, secondHalf] = splitList(all_categories)

const row_categories = ref<RowCategory[]>([
  {
    id: '1',
    categories: firstHalf,
  },
  {
    id: '2',
    categories: secondHalf,
  },
])
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
