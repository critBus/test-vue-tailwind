<script setup lang="ts">
import BestSellingProducts from './components/BestSellingProducts.vue'
import CategoryNavigation from './components/CategoryNavigation.vue'
import FooterSection from './components/FooterSection.vue'
import HeaderComponent2 from './components/HeaderComponent2.vue'
import LatestAdditions from './components/LatestAdditions.vue'
import RecommendedProducts from './components/RecommendedProducts.vue'
import SecurePaymentImg from './components/SecurePaymentImg.vue'
import ShippingCuba from './components/ShippingCuba.vue'
import Subscriptions from './components/SubscriptionsSection.vue'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <HeaderComponent2 />
  <TopBar />
  <CategoryNavigation />
  <RecommendedProducts />
  <SecurePaymentImg />
  <BestSellingProducts />
  <LatestAdditions />
  <ShippingCuba />
  <Subscriptions />
  <FooterSection />
  <RouterView />
</template>

<style scoped></style>
