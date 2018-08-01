<template>
  <div class="hero-picker-layout">
    <b-form-input id="hero-input"
                  type="text"
                  v-model="filterName"
                  @input.native="filter(filterName)"
                  placeholder="Search hero name"
                  size="lg"
                  :disabled="disabled"/>

    <div class="d-flex my-3 align-items-center">
      <HeroIcon :id="selectedHero" class="mr-2 mb-2"/>
      <h3 class="text-uppercase font-weight-bold">
        {{ heroName }}
      </h3>
    </div>

    <b-button variant="primary" block size="lg" :disabled="disabled || selectedHero === 0" @click="pick">
      Pick
    </b-button>
  </div>
</template>

<script lang="ts">
import bButton from 'bootstrap-vue/es/components/button/button';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/heroes/HeroIcon.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    HeroIcon,
    bButton,
    bFormInput,
  },
})
export default class HeroPicker extends Vue {
  @Prop({ default: 0, type: Number })
  private selectedHero!: number;
  @Prop({ default: false, type: Boolean })
  private disabled!: boolean;
  private filterName: string = '';

  @Emit()
  private filter(filterName: string) {
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
}
</script>

<style lang="scss" scoped>
.hero-picker-layout {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
</style>
