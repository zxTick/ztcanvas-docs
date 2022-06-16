# CanvasEngine

## Create a Canvas Engine

every canvas application should create a `CanvasEngine` instance

```js
const engine = new CanvasEngine({
  // w: canvas width
  w: "600",
  // h: canvas height
  h: "600",
  // canvas dom target: must be id
  canvasTarget: "canvas1",
});
```
