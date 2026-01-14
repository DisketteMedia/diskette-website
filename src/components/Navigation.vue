<script setup lang="ts">
import {onMounted, ref} from 'vue'

const props = defineProps({
  disketteText : {
    type: String,
    default: 'TV'
  },
})

const showNavbar = ref(false);

const handleScroll = () => {
  showNavbar.value = window.scrollY > 550;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>

  <div :class="{ 'navbarVisible': showNavbar }" class="navbarMoving fixed z-2">
    <div class="w-screen">
      <div class="navbar bg-base-300 px-5 shadow-sm">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <nav>
              <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <slot name="items"></slot>
              </ul>
            </nav>
          </div>
          <RouterLink to="/" class="flex">
            <img src="/disk.svg" class="h-9" alt="Diskette://Logo">
            <div class="text-4xl font-calistoga">{{ $route.name }}</div>
          </RouterLink>
        </div>
        <div class="navbar-center hidden lg:flex">
          <nav>
            <ul class="menu menu-horizontal gap-1 font-bold">
              <slot name="items"></slot>
            </ul>
          </nav>
        </div>
        <div class="navbar-end hidden lg:flex">
          <Social icon-size="20px"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.navbarMoving {
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
}

.navbarVisible {
  transform: translateY(0);
}
</style>