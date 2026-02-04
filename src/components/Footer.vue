<script setup lang="ts">
import Social from "./Social.vue";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import {Icon} from "@iconify/vue";

const router = useRouter();
const route = useRoute();

const scrollToTop = () => {
  router.push(route.path);
}
</script>

<template>
  <div class="mx-5 mb-5 rounded-2xl flex bg-base-300 justify-between p-4">
    <div class="flex items-center">
      <button @click="scrollToTop" class="btn btn-dash">
        <Icon icon="pixel:arrow-circle-up-solid"/>Back to top
      </button>
      <p class="ms-4">Copyright ©2026 Diskette Media</p>
    </div>
    <div class="flex items-center gap-3">
      <a href="https://github.com/DisketteMedia/website" target="_blank" class="me-2.5 underline">View source</a>
      <Social class="hidden md:flex"/>
    </div>
  </div>
</template>

<style scoped>

</style>