<template>
  <div
    class="flex justify-center items-center bg-cover bg-center bg-no-repeat h-[354px]"
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
  >
    <div
      class="h-[186px] lg:h-[230px] max-w-[340px] lg:max-w-[650px] bg-white/50 flex flex-col p-4 lg:px-8 lg:pt-8 lg:pb-2 text-center rounded-md lg:items-center"
    >
      <div class="roboto-bold text-[#D09504] text-xl lg:text-3xl">Suscríbete a nuestro boletín</div>
      <div class="roboto">
        Mantente al tanto de todas las novedades ofertas y descuentos. ¡Suscríbete!
      </div>
      <div class="flex flex-row mt-4 lg:mt-8 h-[48px] lg:w-[80%]">
        <input
          class="grow border-[#CAD4E2] border-2 rounded-l-md placeholder:pl-4 placeholder:text-[#BAB8B8] placeholder:font-[Roboto]"
          type="text"
          placeholder="Correo Electrónico"
        />
        <button class="bg-[#4F6A8E] roboto-bold text-lg text-white px-4">Suscribirse</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import imageUrl from '@/assets/suscriptions/bg.jpg' // Ajusta la ruta
</script>
