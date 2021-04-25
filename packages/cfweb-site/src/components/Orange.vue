<template>
  <div class="site-orange">
    <div class="site-canvas-orange">
      <canvas id="circle_canvas" class="site-canvas-orange-item"></canvas>
      <canvas id="gossip_canvas" class="site-canvas-orange-item"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {
  mounted(): void {
    this.renderCircleCanvas();
    this.renderGossipCanvas();
  }

  renderCircleCanvas(): void {
    let canvas = <HTMLCanvasElement>document.getElementById('circle_canvas');
    if (canvas) {
      const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        // ctx.arc(100, 75, 50, 0 * Math.PI, 1.5 * Math.PI);
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  }

  renderGossipCanvas(): void {
    let canvas = <HTMLCanvasElement>document.getElementById('gossip_canvas');
    if (canvas) {
      const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  }
}
</script>
<style lang="less" scoped>
.site-orange {
  .site-canvas-orange {
    .site-canvas-orange-item {
      border: 1px solid #ddd;
      width: 600px;
      height: 600px;
    }
  }
}
</style>
