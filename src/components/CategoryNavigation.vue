<template>
  <div class="py-4">
    <div
      v-for="row_categorie in row_categories"
      :key="row_categorie.id"
      class="flex /* Activa Flexbox */ overflow-x-auto /* Permite scroll horizontal si el contenido se desborda */ whitespace-nowrap /* Evita que los items salten a la línea siguiente */ py-2 /* Padding vertical interno */ px-4 /* Padding horizontal para que no pegue a los bordes */ gap-4 /* Espacio entre cada item de categoría */ scrollbar-hide /* Opcional: Oculta la barra de scroll visualmente (requiere plugin o CSS) */"
    >
      <a
        v-for="category in row_categorie.categories"
        :key="category.id"
        :to="category.link"
        class="flex-shrink-0 /* Evita que los items se encojan */ flex flex-col items-center w-20 /* Ancho fijo para cada item */ text-center no-underline /* Quita el subrayado del enlace */ group /* Para efectos hover si los añades */"
      >
        <div
          class="bg-gray-100 /* Color de fondo del círculo */ rounded-full /* Lo hace completamente redondo */ h-16 w-16 /* Tamaño del círculo (ajusta) */ flex items-center justify-center mb-1 /* Margen inferior antes del texto */ overflow-hidden /* Asegura que la imagen no se salga del círculo */ group-hover:bg-gray-200 /* Opcional: cambio de color al pasar el ratón */"
        >
          <img
            :src="getImageUrl(category.imageFile)"
            :alt="category.name"
            class="h-8 w-8 object-contain /* Tamaño de la imagen interna (ajusta) */"
          />
        </div>

        <span class="text-xs font-medium text-gray-700 group-hover:text-gray-900">
          {{ category.name }}
        </span>
      </a>
    </div>

    <div class="mt-2 px-4 flex justify-center">
      <a
        to="/categorias"
        class="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 /* Ajusta color */ hover:text-blue-800 py-1"
      >
        Ver todos los productos
        <img :src="arrowIcon" alt="" class="h-3 w-3" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import arrowIcon from '@/assets/categories/Vector.svg' // Importa el icono de flecha

interface RowCategory {
  id: string
  categories: Category[]
}
// Interfaz Category
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
        name: 'Pescados y M...',
        imageFile: 'pescados y mariscos.png',
        link: '/categorias/pescados',
      },
      {
        id: 'huevos',
        name: 'Huevos y Láct...',
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
        name: 'Cakes, Helados y  Dulces',
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
        name: 'Infantiles y Es...',
        imageFile: 'infantiles y escolares.png',
        link: '/categorias/infantiles',
      }, // Ajusta el nombre
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

// Función para obtener URL de imagen
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
/* Opcional: para ocultar la barra de scroll si usas la clase scrollbar-hide */
/* Requiere instalar y configurar `tailwind-scrollbar-hide` o usar CSS */
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari y Chrome */
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE y Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
