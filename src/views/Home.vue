<template>
  <div class="landing">
    <div class="landing-items">
      <HeroIcon v-for="id in heroIds" :id="id" :key="id" class="lp-icon"/>
    </div>

    <div class="landing-overlay"></div>

    <div class="container landing-content my-5">
      <h1 class="my-5 font-weight-bold">
        Test your Dota 2 knowledge
      </h1>

      <p class="my-3">
        How well can you guess a hero from seeing their purchased items?
      </p>

      <router-link :to="{ name: 'game' }" class="btn btn-primary btn-lg px-5 text-uppercase my-3">Play now</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/heroes/HeroIcon.vue';

@Component({
  components: {
    HeroIcon,
  },
})
export default class Home extends Vue {
  private get heroIds(): number[] {
    return this.shuffle(Object.keys(heroes).map((id: string) => +id));
  }

  private shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  min-height: 100%;
  overflow: hidden;
  position: relative;

  .landing-items {
    animation: items 60s infinite alternate;
    display: grid;
    grid-template-columns: repeat(auto-fit, 12.5vw);
    position: absolute;
    transform: skew(-0.2rad) scale(1.3);
    width: 100%;

    @keyframes items {
      0% {
        transform: skew(-0.2rad) scale(1.3);
      }
      100% {
        transform: skew(-0.3rad) scale(1.4);
      }
    }

    .lp-icon {
      filter: grayscale(0.8) blur(2px);
      height: 12.5vw * 0.5625;
      width: 12.5vw;
    }

    :nth-child(3n) {
      animation: icon-animation 15s infinite alternate;
    }

    :nth-child(11n) {
      grid-column: span 2;
      grid-row: span 2;
      height: 12.5vw * 0.5625 * 2;
      width: 12.5vw * 2;
    }

    @keyframes icon-animation {
      0% {
        filter: grayscale(0.8) blur(3px);
        transform: none;
        z-index: 0;
      }
      100% {
        filter: grayscale(0.8) blur(1px);
        transform: translate(-5px, -5px) scale(1.1);
        z-index: 1;
      }
    }
  }

  .landing-overlay {
    background: radial-gradient(transparent, $dark), rgba(0, 0, 0, 0.6);
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  .landing-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
  }
}
</style>
