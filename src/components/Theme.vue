<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {Icon} from "@iconify/vue";

type Theme = 'light' | 'dark';

const currentTheme = ref<Theme>('light');

const applyTheme = (theme: Theme): void => {
  const themeToApply = theme === 'dark' ? 'synthwave' : 'emerald';
  document.documentElement.setAttribute('data-theme', themeToApply);
};

const toggleTheme = (): void => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme.value);
};

const updateFromSystemPreference = (): void => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  currentTheme.value = prefersDark ? 'dark' : 'light';
  applyTheme(currentTheme.value);
};

onMounted(() => {
  updateFromSystemPreference();

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', updateFromSystemPreference);

  return () => mediaQuery.removeEventListener('change', updateFromSystemPreference);
});
</script>

<template>
  <label class="toggle toggle-xl text-base-content">
    <input type="checkbox" :checked="currentTheme === 'dark'" @change="toggleTheme" aria-label="Toggle theme"/>
    <Icon icon="pixelarticons:sun-alt" aria-label="light" width="18" class="m-auto"/>
    <Icon icon="pixelarticons:moon" aria-label="dark" width="18" class="m-auto"/>
  </label>
</template>

<style scoped>

</style>