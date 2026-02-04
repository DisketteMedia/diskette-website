<script setup lang="ts">
import CaseCard from "./CaseCard.vue";
import { Icon } from "@iconify/vue";

const boxPatterns = (['Alhambra', 'Flower', ])
const arrowheadPatterns = (['Feather', 'Leaf', ])
const teardropPatterns = (['Bubble', 'Leaf', ])
const gothicPatterns = (['Leaf', 'Feather'])

</script>

<template>
  <div class="card flex flex-col gap-5">
    <div class="alert bg-base-300">
      <Icon icon="mingcute:star-fill" width="50"></Icon>
      <span class="text-xl">Glows are customizable! you can choose patterns with various case shapes to fit your own style or space</span>
    </div>
    <div class="card bg-base-300 md:p-5">
      <div class="carousel max-w-4xl w-full items-center mx-auto gap-5">
        <div id="box" class="carousel-item relative w-full">
          <div id="box" class="carousel-item flex w-full items-center gap-5">
            <CaseCard
                caseName="Box"
                imagePath="/images/glow/box.webp"
                purchaseAssembled="https://store.diskette.tv/products/box-glow-assembled"
                purchaseKit="https://store.diskette.tv/products/box-glow-kit"
                assembledPrice="80"
                kitPrice="60"
                :patternsAvailable="boxPatterns"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#box" class="btn btn-circle" disabled>
                <Icon icon="pixelarticons:arrow-left" width="20"/>
              </a>
              <a href="#teardrop" class="btn btn-circle">
                <Icon icon="pixelarticons:arrow-right" width="20"/>
              </a>
            </div>
          </div>
        </div>
        <div id="arrowhead" class="carousel-item relative w-full">
          <div id="box" class="carousel-item flex w-full items-center gap-5">
            <CaseCard
                caseName="Arrowhead"
                imagePath="/images/glow/arrowhead.webp"
                purchaseAssembled="https://store.diskette.tv/products/arrowhead-glow-assembled"
                purchaseKit="https://store.diskette.tv/products/arrowhead-glow-kit"
                assembledPrice="110"
                kitPrice="70"
                :patternsAvailable="arrowheadPatterns"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#box" class="btn btn-circle">
                <Icon icon="pixelarticons:arrow-left" width="20"/>
              </a>
              <a href="#teardrop" class="btn btn-circle">
                <Icon icon="pixelarticons:arrow-right" width="20"/>
              </a>
            </div>
          </div>
        </div>
        <div id="teardrop" class="carousel-item relative w-full">
          <div id="box" class="carousel-item flex w-full items-center gap-5">

            <CaseCard
                caseName="Teardrop"
                imagePath="/images/glow/teardrop.webp"
                purchaseAssembled="https://store.diskette.tv/products/teardrop-glow-assembled"
                purchaseKit="https://store.diskette.tv/products/teardrop-glow-kit"
                assembledPrice="120"
                kitPrice="75"
                :patternsAvailable="teardropPatterns"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#arrowhead" class="btn btn-circle">
                <Icon icon="pixelarticons:arrow-left" width="20"/>
              </a>
              <a href="#gothic" class="btn btn-circle">
                <Icon icon="pixelarticons:arrow-right" width="20"/>
              </a>
            </div>

          </div>
        </div>
        <div id="gothic" class="carousel-item relative w-full">
          <div id="box" class="carousel-item flex w-full items-center gap-5">
            <CaseCard
                caseName="Gothic"
                imagePath="/images/glow/gothic.webp"
                purchaseAssembled="https://store.diskette.tv/products/gothic-glow-assembled"
                purchaseKit="https://store.diskette.tv/products/gothic-glow-kit"
                assembledPrice="110"
                kitPrice="70"
                :patternsAvailable="gothicPatterns"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#teardrop" class="btn btn-circle">
                <Icon icon="pixelarticons:arrow-left" width="20"/>
              </a>
              <a class="btn btn-circle" disabled>
                <Icon icon="pixelarticons:arrow-right" width="20"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>