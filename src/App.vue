<script setup lang="ts">
import BestSellingProducts from './components/BestSellingProducts.vue'
import CategoryNavigation from './components/CategoryNavigation.vue'
import CopyrightSection from './components/CopyrightSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeaderComponent2 from './components/HeaderComponent2.vue'
import LatestAdditions from './components/LatestAdditions.vue'
import LinkingYourPurchases from './components/LinkingYourPurchases.vue'
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
  <LinkingYourPurchases />
  <FooterSection />
  <CopyrightSection />
  <RouterView />
</template>

<style scoped></style>
