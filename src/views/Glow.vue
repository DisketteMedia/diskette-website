<script setup lang="ts">
import GlowLanding from "../components/GlowLanding.vue";
import CaseCompare from "../components/CaseCompare.vue";
import KitSubscribe from "../components/KitSubscribe.vue";
</script>

<template>
  <div class="mx-5 mb-5 flex flex-col gap-5">
    <GlowLanding />
    <section id="story">
      <div class="card bg-base-300 p-5 flex flex-col gap-5">
        <h1 class="text-3xl md:text-5xl lg:text-8xl p-5 font-calistoga">The Story - Box Alhambra</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="rounded-xl bg-base-100 shadow-sm">
            <img src="/images/glow/alhambra-tile.webp" alt="Shoes" class="w-full aspect-square object-cover rounded-t-2xl"/>
            <div class="p-4 flex flex-col gap-3">
              <h2 class="font-calistoga text-4xl">Inspiration</h2>
              <p class="text-md font-space">Every pattern (with the exception of Alhambra) is inspired by something in the natural world. In turn, case shapes are modeled after real world objects such as Gothic's vintage radio or Box's Japanese Andon inspired shape.</p>
            </div>
          </div>
          <div class="rounded-xl bg-base-100 shadow-sm">
            <img src="/images/glow/alhambra-early.webp" alt="Shoes" class="w-full aspect-square object-cover rounded-t-2xl"/>
            <div class="p-4 flex flex-col gap-3">
              <h2 class="font-calistoga text-4xl">Design Process</h2>
              <p class="text-md font-space">After concepts were thought of, early designs were made in the app <a class="underline" href="https://science-to-touch.com/en/iOrnament.html">iOrnament</a>, which makes drawing beautiful tessellating patterns easier. After having these initial designs, we refined, simplified, and vectorized patterns to make them cuttable.</p>
            </div>
          </div>
          <div class="rounded-xl bg-base-100 shadow-sm">
            <img src="/images/glow/cut.webp" alt="Shoes" class="w-full aspect-square object-cover rounded-t-2xl"/>
            <div class="p-4 flex flex-col gap-3">
              <h2 class="font-calistoga text-4xl">Making it real</h2>
              <p class="text-md font-space">Each lantern is laser cut out of 3.5mm plywood, the perfect balance of sturdy with out clunky. After assembling the structure, we then add in a diffuser and the lights which are controlled by a D1 Mini microcontroller.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="compare">
      <CaseCompare />
    </section>
    <section id="contact">
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
    </section>
  </div>
</template>

<style scoped>

</style>