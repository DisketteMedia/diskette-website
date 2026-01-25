<script setup lang="ts">
import Social from './Social.vue';
</script>

<template>
    <div class="w-full overflow-hidden card bg-base-300 items-center">
      <div class="hero-content flex-col lg:flex-row gap-15 p-15">
        <label class="swap swap-flip">
          <input type="checkbox"/>
          <img class="swap-on hover-3d w-lg rounded-lg shadow-2xl mask mask-hexagon" src="/images/headshot-unhinged.webp" alt="unhinged Wren"/>
          <img class="swap-off hover-3d w-lg rounded-lg shadow-2xl mask mask-hexagon" src="/images/headshot.webp" alt="Wren"/>
        </label>
        <div class="ms-5">
          <h1 class="text-6xl mb-3 font-bold font-calistoga">About</h1>
          <h2 class="text-4xl mb-1 font-bold font-calistoga">Wren Allison-Bunnell</h2>
          <h2 class="text-2xl font-bold font-calistoga mb-5">(They/them)</h2>
          <div class="lg:w-150 md:w-full sm:w-full flex flex-col md:pe-20 pe-10">
            <div class="py-5 font-ubuntu text-xl flex flex-col gap-3">
              <p>
                Greetings! I'm Wren and I my mission is to help people learn about technology.
              </p>
              <p>
                I have a background in making things, having previously run a makerspace at a museum,
                so whether it be through video or physical items, I aim to apply everything I've learned in that space to other curious people.
              </p>
              <p>
                High production value is extremely important to me, so I'm always looking for new ways to improve my work, and take the utmost care in my craft.
              </p>
            </div>
            <div class="lg:mt-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5">
              <Social/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>