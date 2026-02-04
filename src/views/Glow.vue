<script setup lang="ts">
import GlowLanding from "../components/GlowLanding.vue";
import CaseCompare from "../components/CaseCompare.vue";
import KitSubscribe from "../components/KitSubscribe.vue";
</script>

<template>
  <div class="mx-5 mb-5 flex flex-col gap-5">
    <GlowLanding />
    <CaseCompare />
    <section id="story">
    </section>
    <div class="w-full overflow-hidden card bg-base-300 items-center">
      <div class="hero-content flex-col lg:flex-row gap-20 px-20 p-5 lg:py-20">
        <img class="w-full md:w-150 px-10" src="/envelopeFlipped.svg" alt="wren"/>
        <div class="ms-10 ">
          <h1 class="text-6xl mb-5 font-bold font-calistoga">Updates</h1>
          <div class="lg:w-150 md:w-full sm:w-full flex flex-col gap-3 md:pe-20 pe-10">
            <p class="text-xl font-ubuntu font-bold">
              Sign up for the mailing list for updates on new patterns, firmware updates and other Glow extras.
            </p>
            <KitSubscribe />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>