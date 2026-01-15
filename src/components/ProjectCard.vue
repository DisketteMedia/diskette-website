<script setup lang="ts">
const props = defineProps({
  videoLink: {
    type: String,
    default: 'https://youtube.com'
  },
  downloadLink: {
    type: String,
    default: 'https://www.printables.com/@diskette'
  },
  title: {
    type: String,
    default: 'Project Title'
  },
  description: {
    type: String,
    default: 'Project description'
  },
  image: {
    type: String,
    default: '/images/missing.webp'
  }
})
</script>

<template>
  <a target="_blank" :href="videoLink" class="hover-3d">
    <div class="card bg-base-100 image-full w-full shadow-sm hover:drop-shadow-xl">
      <figure>
        <img :src="image" class="aspect-video" :alt="title" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ description }}</p>
        <a role="button" class="card-actions justify-end" target="_blank" :href="downloadLink">
          <button class="btn btn-primary">Download files</button>
        </a>
      </div>
    </div>
  </a>
</template>