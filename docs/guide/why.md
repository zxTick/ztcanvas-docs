<script setup lang="ts">
  import Rect from '../components/RectExample.vue'
  import WithEvent from '../components/RectExampleWithEvent.vue'
  import WithLayers from "../components/RectExampleWithLayers.vue"
  import WithEventLayers from "../components/RectExampleWithLayersEvent.vue"
</script>

# Why ZTCanvas
 
by using `ZTCanvas` you can create a `Rect` such like the `red` one:

the code is succinct and clear

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
ctx.fillRect(10, 10, 100, 100);
```

- you need to understand what is `Context2D`
- you need to figure out what the function `fillRect` params means 
- and If you want add event listeners such as `click`, it'hard.

👇 an example 

## With Event Listener

you can click the `purple` rectangle and see what happens

<br />

<WithEvent />


### With ZTCanvas

```ts
import { CanvasEngine, Rect, EventName } from 'ztcanvas'

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
```

### With vanilla js

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'purple';
const path2d = new Path2D()
path2d.rect(10, 20, 80, 80)
ctx.fill(path2d);

canvas.addEventListener("click", e => {
  const { clientX, clientY } = e
  if (ctx.isPointInPath(path2d, clientX, clientY)) {
    alert("rect clicked")
  }
})
```

In order to support event listening, you need to use `path2d`, and you need to figure out a lot of concepts.

Also, if you're writing with vanilla javascript, when you want to remove a rectangle's listeners, if all the events have been cleared, doesn't canvas dom's event listeners need to be removed as well? 

ZTCanvas has this functionality built in to help you manage all the events, you just need to `add` and `remove` shapes.


## Manage Layers

also, ZTCanvas support switch layers.

an example 👇

<br />

<WithLayers />

### source code

```ts
import { CanvasEngine, Rect } from 'ztcanvas'

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

setInterval(() => {
  flag = !flag
  // use `modifyShapeLayer` to change shapes layers
  engine3.modifyShapeLayer(rect, flag ? 1 : 0)
  engine3.modifyShapeLayer(rect2, flag ? 0 : 1)
}, 500)
```
What happens when event listeners are bound in the case of overlapping layers?

an example 👇


<br />

<WithEventLayers />

``` ts
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

```
Now you can open your console and click on the random position of each rectangle to see that our events are layer specific, thanks to the event architecture we use, we are very happy with this and welcome you to







