<script setup lang="ts">
import CaseCard from "./CaseCard.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="card flex flex-col gap-5">
    <div class="alert bg-base-300">
      <Icon icon="mingcute:star-fill" width="50"></Icon>
      <span class="text-xl">Glows are customizable! you can choose patterns with various case shapes to fit your own style or space</span>
    </div>
    <div class="tabs tabs-border justify-center tabs-xl bg-base-300 rounded-2xl">
      <input type="radio" name="tabs" class="tab" aria-label="Box Case" checked="true"/>
      <div class="tab-content bg-base-300 p-5">
        <div class="w-full gap-5 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <CaseCard
              pattern="Flower"
              description="Inspired by wild clematis flowers, Flower brings a touch of nature mixed with technology to the room."
              purchaseAssembled="https://store.diskettekitchen.com/products/box-case-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/box-case-glow-kit"/>
          <CaseCard
              pattern="Alhambra"
              description="Based on a tile pattern at the Alhambra in Spain, Alhambra is a delightful tribute to symmetry."
              purchaseAssembled="https://store.diskettekitchen.com/products/box-case-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/box-case-glow-kit?Pattern=alhambra"/>
        </div>
        <div class="alert my-5">
          <Icon icon="solar:tag-price-bold" width="40"></Icon>
          <span class="text-4xl font-ubuntu">Assembled: $90 | Kit: $60</span>
        </div>
        <h1 class="text-xl">Both finished products are identical and support is available for either type.</h1>
      </div>

      <input type="radio" name="tabs" class="tab" aria-label="Arrowhead Case"/>
      <div class="tab-content bg-base-300 p-5">
        <div class="w-full gap-5 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <CaseCard
              pattern="Feather"
              description="Creating a fan of symmetrical shapes, Feather evokes a feeling of natural uniformity and uniqueness."
              purchaseAssembled="https://store.diskettekitchen.com/products/arrowhead-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/arrowhead-glow-kit"/>
          <CaseCard
              pattern="Leaf"
              description="Inspired by the treetops, Leaf creates a sense of tranquility and harmony."
              purchaseAssembled="https://store.diskettekitchen.com/products/arrowhead-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/arrowhead-glow-kit"/>
        </div>
        <div class="alert my-5">
          <Icon icon="solar:tag-price-bold" width="40"></Icon>
          <span class="text-4xl font-ubuntu">Assembled: $110 | Kit: $75</span>
        </div>
        <h1 class="text-xl">Both finished products are identical and support is available for either type.</h1>
      </div>

      <input type="radio" name="tabs" class="tab" aria-label="Teardrop Case"/>
      <div class="tab-content bg-base-300 p-5">
        <div class="w-full gap-5 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <CaseCard
              pattern="Bubble"
              description="Similar to a Voronoi pattern, Bubble creates a sense of order combined with random whimsy."
              purchaseAssembled="https://store.diskettekitchen.com/products/teardrop-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/teardrop-glow-kit"/>
          <CaseCard
              pattern="Leaf"
              description="Inspired by the treetops, Leaf creates a sense of tranquility and harmony."
              purchaseAssembled="https://store.diskettekitchen.com/products/teardrop-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/teardrop-glow-kit"/>
        </div>
        <div class="alert my-5">
          <Icon icon="solar:tag-price-bold" width="40"></Icon>
          <span class="text-4xl font-ubuntu">Assembled: $120 | Kit: $85</span>
        </div>
        <h1 class="text-xl">Both finished products are identical and support is available for either type.</h1>
      </div>

      <input type="radio" name="tabs" class="tab" aria-label="Gothic Case"/>
      <div class="tab-content bg-base-300 p-5">
        <div class="w-full gap-5 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <CaseCard
              pattern="Leaf"
              description="Inspired by the treetops, Leaf creates a sense of tranquility and harmony."
              purchaseAssembled="https://store.diskettekitchen.com/products/gothic-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/gothic-glow-kit"/>
          <CaseCard
              pattern="Bubble"
              description="Similar to a Voronoi pattern, Bubble creates a sense of order combined with random whimsy."
              purchaseAssembled="https://store.diskettekitchen.com/products/gothic-glow-assembled"
              purchaseKit="https://store.diskettekitchen.com/products/gothic-glow-kit"/>
        </div>
        <div class="alert my-5">
          <Icon icon="solar:tag-price-bold" width="40"></Icon>
          <span class="text-4xl font-ubuntu">Assembled: $110 | Kit: $70</span>
        </div>
        <h1 class="text-xl">Both finished products are identical and support is available for either type.</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>