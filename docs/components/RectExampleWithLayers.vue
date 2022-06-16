<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue';
import { CanvasEngine, Rect } from 'ztcanvas'

let timer
onMounted(() => {
  const engine3 = new CanvasEngine({
    w: "200",
    h: "200",
    canvasTarget: "canvas3"
  })
  let flag = false
  const rect = new Rect(10, 10, 80, 80, 0)
  engine3.render(rect, {
    color: '#dd6d50'
  })
  const rect2 = new Rect(40, 40, 80, 80, 1)
  engine3.render(rect2, {
    color: "purple"
  })

  timer = setInterval(() => {
    flag = !flag
    engine3.modifyShapeLayer(rect, flag ? 1 : 0)
    engine3.modifyShapeLayer(rect2, flag ? 0 : 1)
  }, 500)
})

onBeforeMount(() => {
  clearInterval(timer)
})

</script>
<template>
  <canvas id="canvas3" style="background-color: #aaa"></canvas>
</template>
<style scoped>
</style>
