<template>
  <div class="flex flex-col px-2 pt-10 text-center roboto-condensed-bold">
    <h3 class="mx-2 mt-2 text-xl text-[#D09504] font-bold">Más de 1500 productos en el almacén</h3>
    <h1 class="mx-2 mt-2 mb-8 text-5xl font-bold">Envíos hacia toda Cuba</h1>
    <InfoShipping
      v-for="item in infos"
      :key="item.title"
      :icono="item.icono"
      :title="item.title"
      :contenct="item.contenct"
    />
  </div>
</template>
<script setup lang="ts">
import IconCar from '@/assets/shipping_cuba/group.svg'
import IconBag from '@/assets/shipping_cuba/bag.svg'
import IconLocation from '@/assets/shipping_cuba/location-tick.svg'
import InfoShipping from './InfoShipping.vue'
interface Info {
  icono: string
  title: string
  contenct: string
}
const infos: Info[] = [
  {
    icono: IconCar,
    title: 'Entrega rápida',
    contenct: 'Nos aseguramos de que su entrega llegue en el menor tiempo posible.',
  },
  {
    icono: IconBag,
    title: 'Variedad de productos',
    contenct: 'Contamos con una amplia y completa variedad de productos.',
  },
  {
    icono: IconLocation,
    title: 'Envíos a toda Cuba',
    contenct: 'Contamos con servicios de entrega a lo largo y ancho de la isla.',
  },
]
</script>
