<script setup lang="ts">
  import Rect from '../components/RectExample.vue'
  import WithEvent from '../components/RectExampleWithEvent.vue'
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

but when you create a Rect with vanilla js, it will It becomes **complicated** and **difficult to understand**

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

- you need to understand what is `Context2D`
- you need to figure out what the params means for `fillRect`
- and If you want to manage 3 or more rectangles, it's difficult 

👇 a example 

## 3 Rect

<br />

<WithEvent />


### With ZTCanvas

```ts
const engine2 = new CanvasEngine({
  w: "200",
  h: "200",
  canvasTarget: "canvas2"
})
const rect1 = new Rect({
  x: 10,
  y: 10,
  w: 100,
  h: 100,
  zIndex: 0
})
engine2.render(rect1, {
  color: '#dd6d50'
})
const rect2 = new Rect({
  x: 30,
  y: 40,
  w: 50,
  h: 60,
  zIndex: 0
})
engine2.render(rect2, {
  color: 'green'
})
const rect3 = new Rect({
  x: 120,
  y: 90,
  w: 40,
  h: 40,
  zIndex: 0
})
engine2.render(rect3, {
  color: 'purple'
})
```