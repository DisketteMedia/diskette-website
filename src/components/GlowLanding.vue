<script setup lang="ts">

</script>

<template>
  <div class="w-full flex items-center">
    <img src="/images/glow/glowAll.webp" class="rounded-2xl md:h-200 object-cover h-150" alt="All diskette lanterns in a row">
    <div class="me-5 absolute flex justify-center items-center ">
      <div class="w-full px-15">
        <picture>
          <source srcset="/images/glow/GlowWide.svg" media="(max-width: 200px)">
          <source srcset="/images/glow/GlowStack.svg" media="(max-width: 1200px)">
          <img src="/images/glow/GlowWide.svg" alt="Diskette glow" class="drop-shadow-xl/30 drop-shadow-amber-100 w-full">
        </picture>
        <div class="gap-2 justify-center flex my-5">
          <a href="#glow" role="button" class="btn btn-neutral sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Learn More</a>
          <a href="https://store.diskettekitchen.com/collections/assembled-lanterns"
             role="button" class="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Buy Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>