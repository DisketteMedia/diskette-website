<script setup lang="ts">
import Landing from './components/Landing.vue'
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation>
    <template v-slot:items>
      <li>
        <RouterLink to="/">Kitchen</RouterLink>
      </li>
    </template>
  </Navigation>
  <Landing />
  <section id="content">
    <RouterView />
  </section>
  <Footer />
</template>

<style>
root {scroll-behavior: smooth;}
</style>
