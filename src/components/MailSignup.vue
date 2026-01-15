<script setup lang="ts">
</script>

<template>
  <div class="w-screen px-5 mb-5">
    <div class="w-full overflow-hidden card bg-base-300 items-center">
      <div class="hero-content flex-col lg:flex-row gap-20 px-20 p-5 lg:py-20">
        <img class="w-full md:w-150 px-10" src="/envelopeFlipped.svg" alt="wren"/>
        <div class="ms-10 ">
          <h1 class="text-6xl mb-5 font-bold font-calistoga">Updates</h1>
          <div class="lg:w-150 md:w-full sm:w-full flex flex-col gap-3 md:pe-20 pe-10">
            <p class="text-xl font-ubuntu font-bold">
              Sign up for the mailing list for updates on new patterns, firmware updates and other Glow extras.
            </p>
            <form class="fieldset" @submit.prevent="formSubmission">
              <fieldset class="fieldset">
                <span class="label">First Name</span>
                <input  class="input validator w-full" placeholder="Jimothy"/>
              </fieldset>
              <fieldset class="fieldset">
                <label class="label">Email</label>
                <input type="email" class="input validator w-full" placeholder="intern.jimothy@diskette.tv" required/>
                <p class="validator-hint hidden">Required</p>
              </fieldset>
              <button class="btn btn-primary mt-2" type="submit">Subscribe!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>