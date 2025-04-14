<script setup lang="ts">
import CategoryNavigation from './components/CategoryNavigation.vue'
import HeaderComponent2 from './components/HeaderComponent2.vue'
import RecommendedProducts from './components/RecommendedProducts.vue'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <HeaderComponent2 />
  <TopBar />
  <CategoryNavigation />
  <RecommendedProducts />
  <RouterView />
</template>

<style scoped></style>
