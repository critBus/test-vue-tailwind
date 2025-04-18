<script setup lang="ts">
import LatestAdditions from '@/components/LatestAdditions.vue'
import LinkingYourPurchases from '@/components/LinkingYourPurchases.vue'
import RecommendedProducts from '@/components/RecommendedProducts.vue'
import SecurePaymentImg from '@/components/SecurePaymentImg.vue'
import ShippingCuba from '@/components/ShippingCuba.vue'
import Subscriptions from '@/components/SubscriptionsSection.vue'
import TopBar from '@/components/TopBar.vue'
import BestSellingProducts from '@/components/BestSellingProducts.vue'
import CategoryNavigation from '@/components/CategoryNavigation.vue'
</script>

<template>
  <main>
    <TopBar />
    <CategoryNavigation />
    <RecommendedProducts />
    <SecurePaymentImg />
    <BestSellingProducts />
    <LatestAdditions />
    <ShippingCuba />
    <Subscriptions />
    <LinkingYourPurchases />
  </main>
</template>
