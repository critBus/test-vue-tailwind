<template>
  <div class="flex flex-col px-2 lg:mt-6 lg:mb-16 pt-10 text-center roboto-condensed-bold">
    <h3 class="mx-2 mt-2 text-xl lg:text-3xl text-[#D09504] font-bold">
      Más de 1500 productos en el almacén
    </h3>
    <h1 class="mx-2 mt-2 mb-8 text-5xl lg:text-7xl font-bold">Envíos hacia toda Cuba</h1>
    <div class="lg:flex lg:justify-center lg:items-center">
      <div class="lg:flex lg:flex-row max-w-[1100px]">
        <div v-for="item in infos" :key="item.title" class="lg:flex lg:flex-row">
          <InfoShipping :icono="item.icono" :title="item.title" :contenct="item.contenct" />
          <div
            v-if="!item.last"
            class="max-lg:hidden inline-block h-[70%] mx-8 min-h-[1em] w-0.5 self-stretch bg-[#CFCECE]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCar from '@/assets/shipping_cuba/group.svg'
import IconBag from '@/assets/shipping_cuba/bag.svg'
import IconLocation from '@/assets/shipping_cuba/location-tick.svg'
import InfoShipping from '@/components/home/InfoShipping.vue'
interface Info {
  icono: string
  title: string
  contenct: string
  last: boolean
}
const infos: Info[] = [
  {
    icono: IconCar,
    title: 'Entrega rápida',
    contenct: 'Nos aseguramos de que su entrega llegue en el menor tiempo posible.',
    last: false,
  },
  {
    icono: IconBag,
    title: 'Variedad de productos',
    contenct: 'Contamos con una amplia y completa variedad de productos.',
    last: false,
  },
  {
    icono: IconLocation,
    title: 'Envíos a toda Cuba',
    contenct: 'Contamos con servicios de entrega a lo largo y ancho de la isla.',
    last: true,
  },
]
</script>
