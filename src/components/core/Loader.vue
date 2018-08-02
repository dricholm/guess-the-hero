<template>
  <div class="loader" :class="{ loading: isLoading, error: error }">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="fancy-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </defs>
    </svg>

    <div class="line-1"></div>
    <div class="line-2"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
  @Prop({ default: false, type: Boolean })
  private isLoading!: boolean;
  @Prop({ default: false, type: Boolean })
  private error!: boolean;
}
</script>


<style lang="scss" scoped>
.loader {
  border: 20px solid $danger;
  box-sizing: content-box;
  height: 100px;
  filter: url('#fancy-goo');
  margin: ($spacer * 1.25) auto;
  overflow: hidden;
  position: relative;
  width: 100px;

  .line {
    background: $danger;
    height: 150px;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: center;
    width: 20px;
  }

  .line-1 {
    @extend .line;
    transform: rotate(-40deg) translate(20px, -10px);
  }

  .line-2 {
    @extend .line;
    transform: rotate(490deg) translate(-70px, -40px);
  }

  @keyframes anim-line-1 {
    0% {
      transform: rotate(-40deg) translate(20px, -10px);
    }
    10% {
      transform: rotate(-40deg) translate(20px, -10px);
    }
    20% {
      transform: rotate(40deg) translate(-10px, -50px);
    }
    40% {
      transform: rotate(130deg) translate(-70px, -40px);
    }
    60% {
      transform: rotate(130deg) translate(-70px, -40px);
    }
    70% {
      transform: rotate(220deg) translate(-40px, 40px);
    }
    80% {
      transform: rotate(320deg) translate(20px, -10px);
    }
    100% {
      transform: rotate(320deg) translate(20px, -10px);
    }
  }

  @keyframes anim-line-2 {
    0% {
      transform: rotate(130deg) translate(-70px, -40px);
    }
    10% {
      transform: rotate(130deg) translate(-70px, -40px);
    }
    20% {
      transform: rotate(220deg) translate(-40px, 40px);
    }
    40% {
      transform: rotate(320deg) translate(20px, -10px);
    }
    60% {
      transform: rotate(320deg) translate(20px, -10px);
    }
    70% {
      transform: rotate(400deg) translate(-10px, -50px);
    }
    80% {
      transform: rotate(490deg) translate(-70px, -40px);
    }
    100% {
      transform: rotate(490deg) translate(-70px, -40px);
    }
  }

  &.loading {
    .line-1 {
      animation: anim-line-1 4s infinite;
    }

    .line-2 {
      animation: anim-line-2 4s infinite;
    }
  }

  &.error {
    border-color: $dark;

    .line {
      background-color: $dark;
    }
  }
}
</style>
