<script setup lang="ts">
import { onMounted } from 'vue';
import { CanvasEngine, Rect, EventName } from 'ztcanvas'

onMounted(() => {
  const engine2 = new CanvasEngine({
    w: "200",
    h: "200",
    canvasTarget: "canvas2"
  })
  // a object and five params are all valid
  // we support two modes
  const rect1 = new Rect(10, 20, 80, 80, 0)
  engine2.render(rect1, {
    color: "purple"
  })
  engine2.addEventListener(rect1, EventName.click, () => {
    alert("rect1 clicked")
  })
})

</script>
<template>
  <canvas id="canvas2" style="background-color: #aaa"></canvas>
</template>
<style scoped>
</style>
