<script setup lang="ts">
import GlowLanding from "../GlowLanding.vue";
import CaseCompare from "../CaseCompare.vue";
import MailSignup from "../MailSignup.vue";
</script>

<template>
  <div class="mx-5 mb-5">
    <GlowLanding class="mb-5"/>
    <section id="glow" class="flex flex-col gap-5">
      <CaseCompare />
      <MailSignup />
    </section>
  </div>
</template>

<style scoped>

</style>