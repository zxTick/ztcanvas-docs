<script setup lang="ts">
  import Rect from '../components/RectExample.vue'
</script>

# Rect
 
you can create a `Rect` such like the `red` one with less code:

<Rect />

```html
<canvas id="canvas"></canvas>
```

```ts
const engine = new CanvasEngine({
  w: "200",
  h: "200"
})
const rect = new Rect({
  x: 10,
  y: 10,
  w: 100,
  h: 100,
  zIndex: 0
})
engine.render(rect, {
  color: '#dd6d50'
})
```