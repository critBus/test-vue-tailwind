<template>
  <div class="bg-[#232F3F] flex flex-col text-left p-4">
    <div class="flex flex-col text-left">
      <span class="roboto text-[#B2B2B2] text-base">WhatsApp</span>
      <span class="source-sans-pro text-white mt-2 text-lg">+(34) 624 60 67 70</span>
      <span class="roboto text-[#B2B2B2] mt-2 text-base">Envíanos un mensaje</span>
      <span class="source-sans-pro text-white mt-2 text-lg">contacto@tsotienda.com</span>
    </div>

    <div class="flex flex-col text-left">
      <span class="roboto text-[#B2B2B2] mt-4 text-base">¿Cómo podemos ayudarte?</span>
      <span class="source-sans-pro text-white mt-2 text-lg"
        >Ponte en contacto con nosotros en cualquier momento</span
      >
    </div>
    <div class="flex flex-col text-left">
      <span class="source-sans-pro text-white mt-4 text-lg">Suscríbase a nuestro boletín</span>
      <div class="flex flex-row mt-2 h-[48px]">
        <input
          class="grow border-[#DF194C] bg-white border-2 rounded-l-md placeholder:pl-4 placeholder:text-[#BAB8B8] placeholder:font-['Arial']"
          type="text"
          placeholder="Correo"
        />
        <button class="bg-[#DF194C] rounded-r-md heebo text-lg text-white px-4">Suscribirse</button>
      </div>
    </div>

    <span class="source-sans-pro text-[#B2B2B2] mt-4 text-lg">Síguenos</span>
    <div class="flex flex-row justify-start gap-3 mt-3">
      <img src="@/assets/footer/facebook.svg" alt="Tag" class="h-6 w-6" />
      <img src="@/assets/footer/usuarios.svg" alt="Tag" class="h-6 w-6" />
      <img src="@/assets/footer/instagram.svg" alt="Tag" class="h-6 w-6" />
    </div>

    <div class="my-8">
      <hr class="border-t-2 border-gray-500 w-full mx-auto" />
    </div>

    <div class="flex flex-col text-left mt-2">
      <span class="roboto text-[#B2B2B2] text-base">Enlaces de interés</span>
      <span class="source-sans-pro text-white mt-4 text-lg">Inicio</span>
      <span class="source-sans-pro text-white mt-1 text-lg">Términos de los Servicios</span>
      <span class="source-sans-pro text-white mt-1 text-lg">Conviértete en vendedor</span>
    </div>
    <div class="flex flex-col text-left mt-6">
      <span class="roboto text-[#B2B2B2] text-base">Legal</span>
      <span class="source-sans-pro text-white mt-4 text-lg">Política de envíos</span>
      <span class="source-sans-pro text-white mt-1 text-lg">Política de privacidad</span>
      <span class="source-sans-pro text-white mt-1 text-lg"
        >Política de garantía y devoluciones</span
      >
    </div>
    <div class="flex flex-col text-left mt-6">
      <span class="roboto-bold text-white text-4xl">Pago seguro</span>
      <div class="flex flex-row gap-1 justify-start py-4">
        <img src="@/assets/footer/mastecardrecortado.png" alt="Tag" class="" />
        <img src="@/assets/footer/visa.png" alt="Tag" class="" />
        <img src="@/assets/footer/americaexpresajustado.png" alt="Tag" class="" />
        <img src="@/assets/footer/discoverajustado.png" alt="Tag" class="" />
        <img src="@/assets/footer/tropipay.png" alt="Tag" class="" />
      </div>
    </div>
  </div>
</template>
