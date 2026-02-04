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
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla magna vulputate libero consequat luctus in eget sem.'
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
      <h2 class="text-8xl font-calistoga pt-10 px-10">{{caseName}}</h2>
      <p class="text-2xl font-space px-10">{{description}}</p>
      <div class="text-xl font-space flex gap-3 items-center px-2">
        <span >Available patterns:</span>
        <div class="badge badge-primary badge-md" v-for="patternChip in patternChips" key="tag">{{ patternChip }}</div>
      </div>
      <div class="flex justify-between md:flex sm:block gap-5 mt-3">
        <div class="alert alert-vertical md:alert-horizontal w-full">
          <Icon icon="solar:tag-price-bold" width="25"></Icon>
          <span class="font-space">Assembled: ${{assembledPrice}} | Kit: ${{kitPrice}}</span>
          <div class="gap-2 flex">
            <a role="button" :href="purchaseAssembled" class="btn btn-sm btn-primary">Buy Assembled</a>
            <a role="button" :href="purchaseKit" class="btn btn-sm btn-secondary">Buy Kit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>