// src/components/TopBar.vue

<template>
  <div class="w-full">
    <img
      :src="topBarImage"
      alt="Barra superior con oferta: Delivery GRATIS en pedidos desde $15"
      class="w-full h-auto block"
    />
  </div>
</template>

<script setup lang="ts">
import topBarImage from '@/assets/topbar/topbar.png'
</script>
