<script setup lang="ts">

</script>

<template>
<div class="w-full">
  <div class="card bg-base-300 p-5 md:p-10 lg:p-5">
    <div class="flex flex-col lg:flex-row gap-5">
      <div class="pb-5 lg:p-10">
        <img src="/kitchenWide.svg" class="mb-5" alt="Diskette Kitchen logo">
        <h2 class="text-4xl font-bold font-calistoga mb-5">High quality videos about technology from past to present</h2>
        <p class="lg:w-200 md:w-full sm:w-full flex flex-col gap-3 md:pe-20 pe-10 text-2xl py-5 font-ubuntu">
          <!--
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
            placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
            inceptos himenaeos.
            -->
        </p>
        <div class="flex gap-5">
          <a role="button" class="btn btn-neutral dark:btn-primary" href="https://youtube.com/@diskettekitchen">Watch now</a>
          <router-link to="/media#contact" class="btn btn-neutral dark:btn-primary">Contact Wren</router-link>
        </div>
      </div>
      <iframe class="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/3pPMfbZNEho?si=v8ExNBTb9uLWQ3Ji&amp;controls=0" title="Diskette Kitchen Trailer" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>