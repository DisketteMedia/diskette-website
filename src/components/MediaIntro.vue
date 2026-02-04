<script setup lang="ts">
import {Icon} from '@iconify/vue'
</script>

<template>
  <div class="w-full flex items-center">
    <div class="md:h-200 h-150 relative">
      <div class="rounded-2xl md:h-200 object-cover h-150 carousel carousel-center">
        <img src="/images/portfolio/bike.webp" alt="bike equipment unloading">
        <img src="/images/portfolio/tub.webp" alt="the bathroom with ">
        <img src="/images/portfolio/studio.webp" alt="diskette studio">
        <img src="/images/portfolio/camSetup.webp" alt="Wren setting up a camera for shooting">
      </div>
      <div class="absolute right-3 bottom-3 flex gap-3 items-center">
        <span class="font-black text-2xl text-white">Scroll</span>
        <Icon icon="pixel:arrow-circle-right-solid" color="white" height="35px"/>
      </div>
    </div>
    <div class="me-5 absolute flex justify-center items-center ">
      <div class="w-full px-15">
        <picture>
          <source srcset="/mediaWide.svg" media="(max-width: 200px)">
          <source srcset="/mediaStack.svg" media="(max-width: 1200px)">
          <img src="/mediaWide.svg" alt="Diskette Media" class="drop-shadow-md/30 drop-shadow-amber-100 w-full">
        </picture>
        <div class="gap-2 justify-center flex my-5">
          <router-link to="#contact" role="button" class="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Let's talk</router-link>
          <!--
          <router-link to="#contact" role="button" class="btn btn-neutral sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">What we've done</router-link>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>