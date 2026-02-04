<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {computed} from "vue";

const props = defineProps({
  purchaseAssembled : {
    type: String,
    default: 'https://store.diskette.tv/collections/assembled-glow'
  },
  purchaseKit : {
    type: String,
    default: 'https://store.diskette.tv/collections/kit-glow'
  },
  caseName: {
    type: String,
    default: 'Case Title'
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla magna vulputate.'
  },
  imagePath: {
    type: String,
    default: '/images/missing.webp'
  },
  patternsAvailable: {
    type: Array,
    default: () => ['Pattern 1', 'Pattern 2']
  },
  assembledPrice: {
    type: String,
    default: 100
  },
  kitPrice: {
    type: String,
    default: 100
  }
})

const patternChips = computed(() => {
  return [...new Set(props.patternsAvailable)];
});
</script>

<template>
  <div class="w-full aspect-square image-full">
    <div class="opacity-60">
      <img class="rounded-2xl" :src="imagePath" :alt="caseName + 'case image'" />
    </div>
    <div class="card-body p-5">
      <h2 class="md:text-8xl text-4xl font-calistoga md:pt-10 md:px-10">{{caseName}}</h2>
      <p class="md:text-4xl text-md font-space md:px-10">{{description}}</p>
      <div class="text-xl font-space flex gap-3 items-center justify-end md:px-2">
        <span class="md:text-lg text-sm">Available patterns:</span>
        <div class="badge badge-primary md:badge-md badge-sm" v-for="patternChip in patternChips" key="tag">{{ patternChip }}</div>
      </div>
      <div class="flex justify-end md:flex sm:block gap-5 mt-3">
        <a role="button" :href="purchaseAssembled" class="btn btn-sm btn-primary">Buy Assembled - ${{assembledPrice}}</a>
        <a role="button" :href="purchaseKit" class="btn btn-sm btn-secondary">Buy Kit - ${{kitPrice}}</a>
      </div>
    </div>
  </div>
</template>