<script setup lang="ts">
defineProps({
  purchaseAssembled : {
    type: String,
    default: 'https://store.diskette.tv/collections/assembled-glow'
  },
  purchaseKit : {
    type: String,
    default: 'https://store.diskette.tv/collections/kit-glow'
  },
  pattern: {
    type: String,
    default: 'Pattern Title'
  },
  description: {
    type: String,
    default: 'Pattern description'
  },
  image: {
    type: String,
    default: '/images/missing.webp'
  }
})
</script>

<template>
  <div class="rounded-t-md rounded-b-2xl bg-base-200 w-full shadow-sm">
    <figure>
      <img class="aspect-video overflow-hidden" :src="image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{pattern}}</h2>
      <p>{{description}}</p>
      <div class="card-actions justify-end mt-5">
        <a role="button" :href="purchaseAssembled" class="btn btn-neutral">Buy Assembled</a>
        <a role="button" :href="purchaseKit" class="btn btn-neutral">Buy Kit</a>
      </div>
    </div>
  </div>
</template>