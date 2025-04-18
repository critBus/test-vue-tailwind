<template>
  <div class="w-full">
    <img
      :src="securePaymentImage"
      alt="Barra superior con oferta: Delivery GRATIS en pedidos desde $15"
      class="sm:hidden w-full h-auto block"
    />
    <img
      :src="securePaymentImageDesk"
      alt="Barra superior con oferta: Delivery GRATIS en pedidos desde $15"
      class="max-sm:hidden w-full h-auto block"
    />
  </div>
</template>

<script setup lang="ts">
import securePaymentImage from '@/assets/secure_payment/secure_payment.png'
import securePaymentImageDesk from '@/assets/secure_payment/secure_payment_desk.png'
</script>
