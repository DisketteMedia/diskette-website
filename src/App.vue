<script setup lang="ts">
import Landing from './components/Landing.vue';
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation>
    <template v-slot:items>
      <nav>
        <ul class="flex font-ubuntu gap-2 text-lg">
          <li><RouterLink to="/kitchen">Kitchen</RouterLink></li>
          <li><RouterLink to="/media">Media</RouterLink></li>
          <li><RouterLink to="/glow">Glow</RouterLink></li>
          <li><a href="https://store.diskette.tv">Store</a></li>
        </ul>
      </nav>
    </template>
  </Navigation>
  <Landing />
  <section id="content">
    <RouterView />
  </section>
  <Footer v-if="$route.path !== '/'"/>
</template>

<style>
html, body {
  scroll-behavior: smooth;
}
</style>
