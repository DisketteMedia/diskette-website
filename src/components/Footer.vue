<script setup lang="ts">
import Social from "./Social.vue";
</script>

<template>
  <div class="mx-5 mb-5 rounded-2xl flex bg-base-300 justify-between p-4">
    <div class="flex items-center">
      <a role="button" href="#content" class="btn">Back to top</a>
      <p class="ms-4">Copyright ©2026 Diskette Media</p>
    </div>
    <div class="flex items-center gap-3">
      <a href="https://github.com/DisketteMedia/website" target="_blank" class="me-2 text-primary underline">View source</a>
      <Social class="hidden md:flex"/>
    </div>
  </div>
</template>

<style scoped>

</style>