<template>
  <b-form class="hero-picker-layout" @submit.prevent="submit">
    <div class="filter-input" :data-suggested="suggestedName">
      <b-form-input
        id="hero-input"
        type="text"
        v-model="filterName"
        @input.native="inputHero(filterName)"
        placeholder="Search hero name"
        size="lg"
        :disabled="disabled"
      />
    </div>

    <div class="d-flex my-3 align-items-center">
      <HeroIcon :id="selectedHero" class="mr-2 mb-2" />
      <h3 class="text-uppercase font-weight-bold">
        {{ heroName }}
      </h3>
    </div>

    <b-button
      variant="primary"
      block
      size="lg"
      :disabled="disabled || selectedHero === 0"
      @click="pick"
    >
      Pick
    </b-button>
  </b-form>
</template>

<script lang="ts">
import bButton from 'bootstrap-vue/es/components/button/button';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bForm from 'bootstrap-vue/es/components/form/form';
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/heroes/HeroIcon.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    HeroIcon,
    bButton,
    bForm,
    bFormInput,
  },
})
export default class HeroPicker extends Vue {
  @Prop({ default: 0, type: Number })
  private selectedHero!: number;
  @Prop({ default: false, type: Boolean })
  private disabled!: boolean;
  private filterName: string = '';
  private suggestedId: number = 0;

  @Emit()
  private filter(filterName: string) {
    // TS empty block
  }

  @Emit()
  private select(heroId: number) {
    // TS empty block
  }

  @Emit()
  private pick() {
    // TS empty block
  }

  private get heroName(): string {
    return this.selectedHero === 0
      ? 'Pick a hero'
      : (heroes[this.selectedHero] as Hero).localized_name;
  }

  private get heroData(): Array<[string, Hero]> {
    return Object.entries(heroes);
  }

  private get suggestedName(): string {
    return this.suggestedId > 0
      ? (heroes[this.suggestedId] as Hero).localized_name
      : '';
  }

  private inputHero(text: string) {
    if (text === '') {
      this.suggestedId = 0;
    } else {
      const matchingHero = this.heroData.find(([id, data]: [string, Hero]) =>
        data.localized_name.toLowerCase().startsWith(text.toLowerCase()),
      );
      this.suggestedId =
        typeof matchingHero === 'undefined' ? 0 : +matchingHero[0];
    }
    this.filter(text);
  }

  private submit() {
    if (
      this.selectedHero > 0 &&
      this.suggestedId === 0 &&
      this.filterName === ''
    ) {
      this.pick();
      return;
    }

    if (this.suggestedId > 0 && this.suggestedId !== this.selectedHero) {
      this.select(this.suggestedId);
      this.filter('');
      this.filterName = '';
      this.suggestedId = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-picker-layout {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  .filter-input {
    position: relative;

    &::before {
      content: attr(data-suggested);
      position: absolute;
      align-items: center;
      justify-content: flex-end;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      pointer-events: none;
      text-align: right;
      padding-right: $spacer;
      color: $text-muted;
    }
  }
}
</style>
