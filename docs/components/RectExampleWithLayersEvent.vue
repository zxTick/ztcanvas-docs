<script setup lang="ts">
import { onMounted, onBeforeMount } from "vue";
import { CanvasEngine, EventName, Rect } from "ztcanvas";

let timer;
onMounted(() => {
  const engine3 = new CanvasEngine({
    w: "200",
    h: "200",
    canvasTarget: "canvas4",
  });
  const rect = new Rect(10, 10, 80, 80, 0);
  engine3.render(rect, {
    color: "#dd6d50",
  });
  const rect2 = new Rect(40, 40, 80, 80, 1);
  engine3.render(rect2, {
    color: "purple",
  });
  const rect3 = new Rect(60, 60, 80, 80, 1);
  engine3.render(rect3, {
    color: "red",
  });
  engine3.addEventListener(rect, EventName.click, () => {
    console.log(1);
  });
  engine3.addEventListener(rect2, EventName.click, () => {
    console.log(2);
  });
  engine3.addEventListener(rect3, EventName.click, () => {
    console.log(3);
  });
});

onBeforeMount(() => {
  clearInterval(timer);
});
</script>
<template>
  <canvas id="canvas4" style="background-color: #aaa"></canvas>
</template>
<style scoped></style>
