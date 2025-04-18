<script setup lang="ts">
import CopyrightSection from './components/CopyrightSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeaderComponent2 from './components/HeaderComponent2.vue'
</script>

<template>
  <HeaderComponent2 />
  <RouterView />
  <FooterSection />
  <CopyrightSection />
</template>

<style scoped></style>
