<script setup lang="ts">
import LatestAdditions from '@/components/home/LatestAdditions.vue'
import LinkingYourPurchases from '@/components/home/LinkingYourPurchases.vue'
import RecommendedProducts from '@/components/home/RecommendedProducts.vue'
import SecurePaymentImg from '@/components/home/SecurePaymentImg.vue'
import ShippingCuba from '@/components/home/ShippingCuba.vue'
import Subscriptions from '@/components/home/SubscriptionsSection.vue'
import TopBar from '@/components/home/TopBar.vue'
import BestSellingProducts from '@/components/home/BestSellingProducts.vue'
import CategoryNavigation from '@/components/home/CategoryNavigation.vue'
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
