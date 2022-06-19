<script setup lang="ts">
import { onMounted } from "vue";
import { CanvasEngine, Rect } from "ztcanvas";

onMounted(() => {
  const engine = new CanvasEngine({
    w: "200",
    h: "200",
  });
  const rect = new Rect({
    x: 10,
    y: 10,
    w: 100,
    h: 100,
    zIndex: 0,
  });
  engine.render(rect, {
    color: "#dd6d50",
  });
});
</script>
<template>
  <canvas id="canvas" style="background-color: #aaa"></canvas>
</template>
<style scoped></style>
