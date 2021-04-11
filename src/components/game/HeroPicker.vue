<template>
  <b-form class="hero-picker-layout" @submit.prevent="submit">
    <div class="filter-input" :data-suggested="suggestedName">
      <b-form-input
        id="hero-input"
        type="text"
        v-model="filterName"
        @input.native="inputHero(filterName)"
        placeholder="Search hero name"
        aria-label="Hero name"
        size="lg"
        :disabled="disabled"
      />
    </div>

    <div class="d-flex my-3 align-items-center">
      <HeroIcon :id="selectedHero" class="mr-2 mb-2" />
      <h5 class="text-uppercase font-weight-bold hero-name">
        {{ heroName }}
      </h5>
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
import { BButton, BFormInput, BForm } from 'bootstrap-vue';
import heroesJson from 'dotaconstants/build/heroes.json';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/heroes/HeroIcon.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    HeroIcon,
    BButton,
    BForm,
    BFormInput,
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
      : (heroesJson[
          this.selectedHero.toString() as keyof typeof heroesJson
        ] as Hero).localized_name;
  }

  private get heroData(): Array<Hero> {
    return Object.values(heroesJson);
  }

  private get suggestedName(): string {
    return this.suggestedId > 0
      ? (heroesJson[
          this.suggestedId.toString() as keyof typeof heroesJson
        ] as Hero).localized_name
      : '';
  }

  private inputHero(text: string) {
    if (text === '') {
      this.suggestedId = 0;
    } else {
      const matchingHero = this.heroData.find((hero) =>
        hero.localized_name.toLowerCase().startsWith(text.toLowerCase()),
      );
      this.suggestedId = matchingHero?.id ?? 0;
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

  .hero-name {
    hyphens: auto;
  }
}
</style>
