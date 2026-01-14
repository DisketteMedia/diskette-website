<script setup lang="ts">
import {useYouTube} from '../composables/YouTube.ts'

const {videos, error} = useYouTube()
</script>

<template>
  <div v-if="error" class="text-center card bg-base-300 py-10">
    <h1 class="font-bold text-xl mb-2">Error loading video feed: </h1>
    <p>{{ error }}</p>
  </div>
  <div v-else class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5">
    <a class="hover-3d cursor-pointer" v-for="video in videos" :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank">
      <div class="card bg-base-300 shadow-sm">
        <img class="w-full aspect-video object-cover" :src="video.thumbnail" :alt="video.title"/>
        <div class="card-body">
          <h1 class="card-title mb-2">{{ video.title }}</h1>
          <div class="flex mt-auto join">
            <div class="badge join-item badge-primary">{{ video.duration }}</div>
            <div class="badge join-item badge-outline my-auto">{{ video.viewCount }}</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>

</style>