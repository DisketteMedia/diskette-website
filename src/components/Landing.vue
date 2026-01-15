<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Wave {
  amplitude: number
  frequency: number
  speed: number
  phase: number
  color: string
  lineWidth: number
  yOffset: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let time = 0

const waves: Wave[] = [
  { amplitude: 30, frequency: 0.008, speed: 0.015, phase: 0, color: 'rgba(6, 182, 212, 0.7)', lineWidth: 5, yOffset: 0.2 },
  { amplitude: 50, frequency: 0.006, speed: 0.012, phase: 1, color: 'rgba(34, 211, 238, 0.5)', lineWidth: 3, yOffset: 0.25 },
  { amplitude: 25, frequency: 0.012, speed: 0.02, phase: 2, color: 'rgba(167, 139, 250, 0.6)', lineWidth: 1, yOffset: 0.35 },
  { amplitude: 60, frequency: 0.004, speed: 0.008, phase: 0.5, color: 'rgba(139, 92, 246, 0.4)', lineWidth: 2.5, yOffset: 0.45 },
  { amplitude: 40, frequency: 0.01, speed: 0.018, phase: 3, color: 'rgba(244, 114, 182, 0.5)', lineWidth: 1.5, yOffset: 0.5 },
  { amplitude: 35, frequency: 0.007, speed: 0.01, phase: 1.5, color: 'rgba(251, 113, 133, 0.4)', lineWidth: 1, yOffset: 0.55 },
  { amplitude: 55, frequency: 0.005, speed: 0.014, phase: 2.5, color: 'rgba(52, 211, 153, 0.5)', lineWidth: 2, yOffset: 0.65 },
  { amplitude: 20, frequency: 0.015, speed: 0.025, phase: 4, color: 'rgba(45, 212, 191, 0.3)', lineWidth: 8, yOffset: 0.7 },
  { amplitude: 45, frequency: 0.009, speed: 0.011, phase: 0.8, color: 'rgba(251, 191, 36, 0.4)', lineWidth: 1.5, yOffset: 0.8 },
  { amplitude: 70, frequency: 0.003, speed: 0.006, phase: 3.5, color: 'rgba(96, 165, 250, 0.35)', lineWidth: 5, yOffset: 0.4 },
]

const drawWave = (ctx: CanvasRenderingContext2D, wave: Wave, width: number, height: number) => {
  const baseY = height * wave.yOffset

  ctx.beginPath()
  ctx.strokeStyle = wave.color
  ctx.lineWidth = wave.lineWidth
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  for (let x = 0; x <= width; x += 2) {
    const y =
        baseY +
        Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
        Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3 + wave.phase * 0.7) * (wave.amplitude * 0.4) +
        Math.sin(x * wave.frequency * 2 + time * wave.speed * 0.7) * (wave.amplitude * 0.2)

    if (x === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  }

  ctx.stroke()
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  waves.forEach((wave) => {
    drawWave(ctx, wave, canvas.width, canvas.height)
  })

  time += 1
  requestAnimationFrame(animate)
}

const resizeCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

onMounted(() => {
  resizeCanvas()
  animate()
})
</script>

<template>
  <div class="w-screen h-screen flex items-center">
    <canvas ref="canvasRef" class="fixed inset-0 w-full h-full " />
    <div class="w-full absolute flex justify-center">
      <div class="flex flex-col w-full px-10 lg:px-60 md:px-30 sm:px-20 xs:px-10 items-center">
        <img src="/disk.svg" class="my-5" alt="Diskette logo">
        <div class="w-full flex justify-between text-5xl font-calistoga" >
          <RouterLink to="/kitchen" class="text-kitchen-purple">Kitchen</RouterLink>
          <RouterLink to="/media" class="text-media-skobeloff">Media</RouterLink>
          <RouterLink to="/glow" class="text-glow-orange">Glow</RouterLink>
          <RouterLink to="/glow" class="text-store-blue">Store</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>