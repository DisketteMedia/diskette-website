<script setup lang="ts">
import KitchenIntro from "../components/KitchenIntro.vue";
import VideoFeed from "../components/VideoFeed.vue";
import ImageCard from "../components/ImageCard.vue";
</script>

<template>
  <div class="mx-5 mb-5 flex flex-col gap-5">
    <KitchenIntro />
    <VideoFeed/>
    <div class="card bg-base-300 p-10 flex flex-col gap-5">
      <h1 class="text-8xl font-calistoga">Design</h1>
      <p class="text-xl">
        Below are some of the projects I've worked on in the past, all of which you can make for yourself! Check out my <a href="https://www.printables.com/@diskette">Printables</a> profile for more designs.
      </p>
    </div>
    <div class="gap-5 grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
      <ImageCard
          title="Redesigned PS3 Slim"
          image="/images/projects/ps3.webp"
          description="Turing the boring PlayStation 3 Slim design into something better with the a combination of laser cutting and 3d printing."
          clickLink="https://www.youtube.com/watch?v=B34Np3TN8Rs">
        <a role="button" class="btn btn-primary" target="_blank" href="https://www.printables.com/model/1315364">Download files</a>
      </ImageCard>
      <ImageCard
          title="The Case"
          image="/images/projects/case.webp"
          description="A fully 3d printed, modular computer case optimized to be a NAS chassis. Accommodates a fully passively cooled ITX board, eight 2.5 in drives, and a full ATX sized PSU."
          downloadLink="https://www.printables.com/model/1073452"
          clickLink="https://www.youtube.com/watch?v=kKrAZ_lCJe4">
        <a role="button" class="btn btn-primary" target="_blank" href="https://www.printables.com/model/1073452">Download files</a>
      </ImageCard>
      <ImageCard
          title="iPod Shuffle Shadow Box"
          description="Retrofitting a dead iPod Shuffle to a gorgeous yet simple piece of wall art"
          clickLink="https://www.youtube.com/watch?v=pcYXZlmIuOg">
        <a role="button" class="btn btn-primary" target="_blank" href="https://www.printables.com/model/981437">Download files</a>
      </ImageCard>
      <!--
      <div class="card bg-base-300 p-4 w-full shadow-sm border border-dashed text-center justify-center text-2xl">See more on my
        <router-link to="/portfolio" class="underline">portfolio.</router-link>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>

</style>