<template>
  <div class="result-layout">
    <h3 class="result" :class="{ 'text-success': correct, 'text-danger': !correct }">
      {{ correct ? 'Correct' : 'Incorrect' }}
    </h3>

    <div class="hero-portrait">
      <hero-icon :id="heroId" class="mr-2 mb-2"/>
      <h3 class="text-uppercase font-weight-bold">
        {{ heroName }}
      </h3>
    </div>

    <ul class="sites">
      <li>
        <a :href="`https://www.dotabuff.com/matches/${matchId}`" target="_blank">DotaBuff</a>
      </li>
      <li>
        <a :href="`https://www.opendota.com/matches/${matchId}`" target="_blank">OpenDota</a>
      </li>
    </ul>

    <b-button variant="primary" size="lg" class="next" @click="next">
      Next
    </b-button>
  </div>
</template>


<script lang="ts">
import bButton from 'bootstrap-vue/es/components/button/button';
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/heroes/HeroIcon.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    HeroIcon,
    bButton,
  },
})
export default class Result extends Vue {
  @Prop({ type: Boolean })
  private correct!: boolean;
  @Prop({ type: Number })
  private matchId!: number;
  @Prop({ type: Number })
  private heroId!: number;

  @Emit()
  private next() {
    // Empty TS block
  }

  private get heroName(): string {
    return (heroes[this.heroId] as Hero).localized_name;
  }
}
</script>

<style lang="scss" scoped>
.result-layout {
  display: grid;
  flex: 1;
  grid-template-areas:
    'result'
    'hero-portrait'
    'sites'
    'next';
  grid-template-columns: 1fr;
  grid-auto-rows: auto auto auto auto;

  @include media-breakpoint-up(md) {
    grid-template-areas:
      'result result result'
      'hero-portrait . sites'
      '. next .';
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto auto auto;
  }

  .result {
    font-weight: $font-weight-bold;
    grid-area: result;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: $spacer;
  }

  .hero-portrait {
    align-items: center;
    display: flex;
    grid-area: hero-portrait;
    margin-bottom: $spacer;
  }

  .sites {
    font-size: $font-size-lg;
    grid-area: sites;
    list-style-type: none;
    margin: 0;
    margin-bottom: $spacer;
    padding: 0;

    @include media-breakpoint-up(md) {
      text-align: right;
    }
  }

  .next {
    grid-area: next;
  }
}
</style>
