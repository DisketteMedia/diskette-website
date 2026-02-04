<script setup lang="ts">
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import MediaIntro from "../components/MediaIntro.vue";
</script>

<template>
  <div class="mx-5 mb-5 flex flex-col gap-5">
    <MediaIntro />
    <About />
    <section id="contact">
      <Contact />
    </section>
  </div>
</template>

<style scoped>

</style>