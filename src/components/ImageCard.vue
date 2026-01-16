<script setup lang="ts">
defineProps({
  clickLink: {
    type: String,
  },
  actionTitle: {
    type: String,
    default: 'Download files'
  },
  title: {
    type: String,
    default: 'Project Title'
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: '/images/missing.webp'
  }
})
</script>

<template>
  <a target="_blank" :href="clickLink" class="hover-3d">
    <div class="card bg-base-100 image-full w-full shadow-sm hover:drop-shadow-xl">
      <figure>
        <img :src="image" class="aspect-video" :alt="title" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ description }}</p>
        <div class="card-actions justify-end mt-5"><slot></slot></div>
      </div>
    </div>
  </a>
</template>