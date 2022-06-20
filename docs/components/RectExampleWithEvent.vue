<script setup lang="ts">
import { onMounted } from "vue";
import { CanvasEngine, Rect, EventName } from "ztcanvas";

onMounted(() => {
  const engine21 = new CanvasEngine({
    w: "200",
    h: "200",
    canvasTarget: "canvas23",
  });
  // a object and five params are all valid
  // we support two modes
  const rect44 = new Rect(10, 20, 80, 80, 0);
  engine21.render(rect44, {
    color: "purple",
  });
  engine21.addEventListener(rect44, EventName.click, () => {
    alert("rect1 clicked");
  });
});
</script>
<template>
  <canvas id="canvas23" style="background-color: #aaa"></canvas>
</template>
<style scoped></style>
