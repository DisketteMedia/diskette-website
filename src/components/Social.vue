<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  iconSize: {
    type: String,
    default: '35px'
  }
})
</script>

<template>
  <div class="flex join">
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://youtube.com/@diskettekitchen">
      <Icon :size="props.iconSize" icon="mdi:youtube"/>
    </a>
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://bsky.app/profile/diskette.tv">
      <Icon :size="props.iconSize" icon="ri:bluesky-fill"/>
    </a>
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://instagram.com/diskettekitchen">
      <Icon :size="props.iconSize" icon="mdi:instagram"/>
    </a>
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://printables.com/@diskette">
      <Icon :size="props.iconSize" icon="simple-icons:printables"/>
    </a>
  </div>
</template>