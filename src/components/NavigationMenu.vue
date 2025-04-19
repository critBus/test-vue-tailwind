<template>
  <div
    class="max-sm:hidden bg-[#E5EAF0] h-12 flex flex-row text-[#7A7474] text-sm roboto gap-5 justify-center items-center"
  >
    <button type="button" class="hover:text-black text-[#405774]">Inicio</button>
    <button type="button" class="hover:text-black">Todos los productos</button>
    <button type="button" class="hover:text-black">Tiendas</button>
    <button type="button" class="flex flex-row hover:text-black">
      <span>Categorías</span>
      <img :src="IconArrow" alt="" class="w-4 h-4" />
    </button>
    <button type="button" class="hover:text-black">Vende con Nosotros</button>
    <button type="button" class="hover:text-black">Contáctenos</button>
    <button type="button" class="hover:text-black">Preguntas frecuentes</button>
  </div>
</template>
<script setup lang="ts">
import IconArrow from '@/assets/navigation_desk/icons/arrow-right.svg'
</script>
