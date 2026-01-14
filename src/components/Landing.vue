<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue'

const props = defineProps({
  speed: {
    type: Number,
    default: 8
  },
  waves: {
    default: () => [
      {
        timeModifier: 1,
        lineWidth: 10,
        amplitude: 1000,
        wavelength: 100,
        segmentLength: 20
      },
      {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: 150,
        wavelength: 100
      },
      {
        timeModifier: 1,
        lineWidth: 1,
        amplitude: -150,
        wavelength: 50,
        segmentLength: 10
      },
      {
        timeModifier: 1,
        lineWidth: 0.5,
        amplitude: -100,
        wavelength: 100,
        segmentLength: 10
      }
    ]
  }
})

// Refs
const sineCanvas = ref(null)
const ctx = ref(null)
const width = ref(0)
const height = ref(0)
const dpr = ref(1)
const waveWidth = ref(0)
const waveLeft = ref(0)
const time = ref(0)
const animationFrameId = ref(null)

// Computed defaults
const defaultAmplitude = computed(() => 50)
const defaultWavelength = computed(() => 50)
const defaultSegmentLength = computed(() => 10)
const defaultLineWidth = computed(() => 2)
const defaultStrokeStyle = computed(() => 'rgba(255, 255, 255, 0.2)')

// Lifecycle Hooks
onMounted(() => {
  initialize()
  window.addEventListener('resize', handleResize)
  loop()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
  }
})

// Functions
function initialize() {
  const canvas = sineCanvas.value
  if (!canvas) throw new Error('No Canvas Selected')

  ctx.value = canvas.getContext('2d')
  if (!props.waves.length) throw new Error('No waves specified')

  resizeCanvas()
  resizeEvent()
}

function handleResize() {
  resizeCanvas()
  resizeEvent()
}

function resizeCanvas() {
  const canvas = sineCanvas.value
  dpr.value = window.devicePixelRatio || 1

  width.value = canvas.width = window.innerWidth * dpr.value
  height.value = canvas.height = window.innerHeight * dpr.value

  waveWidth.value = width.value * 0.95
  waveLeft.value = width.value * 0.025
}

function resizeEvent() {
  const gradient = ctx.value.createLinearGradient(0, 0, width.value, 0)
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

  for (let i = 0; i < props.waves.length; i++) {
    props.waves[i].strokeStyle = gradient
  }
}

function clear() {
  ctx.value.clearRect(0, 0, width.value, height.value)
}

function update(currentTime) {
  time.value = time.value - 0.007
  const t = typeof currentTime === 'undefined' ? time.value : currentTime

  for (let i = 0; i < props.waves.length; i++) {
    const timeModifier = props.waves[i].timeModifier || 1
    drawSine(t * timeModifier, props.waves[i])
  }
}

function ease(percent, amplitude) {
  const PI2 = Math.PI * 2
  const HALFPI = Math.PI / 2
  return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5
}

function drawSine(timeVal, options = {}) {
  const amplitude = options.amplitude || defaultAmplitude.value
  const wavelength = options.wavelength || defaultWavelength.value
  const lineWidthVal = options.lineWidth || defaultLineWidth.value
  const strokeStyle = options.strokeStyle || defaultStrokeStyle.value
  const segmentLength = options.segmentLength || defaultSegmentLength.value

  let x = timeVal
  let y = 0
  let amp = amplitude

  const yAxis = height.value / 2

  ctx.value.lineWidth = lineWidthVal * dpr.value
  ctx.value.strokeStyle = strokeStyle
  ctx.value.lineCap = 'round'
  ctx.value.lineJoin = 'round'
  ctx.value.beginPath()

  ctx.value.moveTo(0, yAxis)
  ctx.value.lineTo(waveLeft.value, yAxis)

  for (let i = 0; i < waveWidth.value; i += segmentLength) {
    x = (timeVal * props.speed) + (-yAxis + i) / wavelength
    y = Math.sin(x)
    amp = ease(i / waveWidth.value, amplitude)
    ctx.value.lineTo(i + waveLeft.value, amp * y + yAxis)
  }

  ctx.value.lineTo(width.value, yAxis)
  ctx.value.stroke()
}

function loop() {
  clear()
  update()
  animationFrameId.value = requestAnimationFrame(loop)
}
</script>

<template>
  <div class="w-screen h-screen flex items-center">
    <canvas class="h-full w-full" ref="sineCanvas"></canvas>
    <div class="w-full absolute flex justify-center">
      <div class="flex flex-col w-full px-10 lg:px-60 md:px-30 sm:px-20 xs:px-10 items-center">
        <img src="/disk.svg" class="my-5" alt="Diskette://logo">
      </div>
    </div>
  </div>
</template>

<style scoped></style>