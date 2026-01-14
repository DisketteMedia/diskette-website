<script setup lang="ts">
import Social from './Social.vue';
</script>

<template>
    <div class="w-full overflow-hidden card bg-base-300 items-center">
      <div class="hero-content flex-col lg:flex-row gap-20 p-15">
        <label class="swap swap-flip">
          <input type="checkbox"/>
          <div class="swap-on hover-3d">
            <img class="w-lg rounded-lg shadow-2xl mask mask-hexagon" src="/images/headshot-unhinged.webp" alt="unhinged Wren"/>
          </div>
          <div class="swap-off hover-3d">
            <img class="w-lg rounded-lg shadow-2xl mask mask-hexagon" src="/images/headshot.webp" alt="wren"/>
          </div>
        </label>
        <div class="ms-5">
          <h1 class="text-6xl mb-3 font-bold font-calistoga">About</h1>
          <h2 class="text-4xl mb-1 font-bold font-calistoga">Wren Allison-Bunnell</h2>
          <h2 class="text-2xl font-bold font-calistoga mb-5">(They/them)</h2>
          <div class="lg:w-150 md:w-full sm:w-full flex flex-col gap-3 md:pe-20 pe-10">
            <p class="py-5 font-ubuntu">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
              placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
              vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
              inceptos himenaeos.
            </p>
            <div class="lg:mt-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5">
              <Social />
              <a role="button" class="btn btn-neutral w-full dark:btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>