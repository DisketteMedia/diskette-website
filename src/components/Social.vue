<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps({
  iconSize: {
    type: String,
    default: '25px'
  }
})
</script>

<template>
  <div class="flex join">
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://youtube.com/@diskettekitchen">
      <Icon :width="iconSize" :height="iconSize" icon="mdi:youtube"/>
    </a>
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://bsky.app/profile/diskette.tv">
      <Icon :width="iconSize" :height="iconSize" icon="ri:bluesky-fill"/>
    </a>
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://instagram.com/diskettekitchen">
      <Icon :width="iconSize" :height="iconSize" icon="mdi:instagram"/>
    </a>
    <a role="button" class="btn btn-neutral dark:btn-primary join-item" href="https://printables.com/@diskette">
      <Icon :width="iconSize" :height="iconSize" icon="simple-icons:printables"/>
    </a>
  </div>
</template>