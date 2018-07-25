<template>
  <div class="mb-4">
    <h2 v-if="title">
      {{ title }}
    </h2>

    <HeroIcon :id="hero.id" v-for="hero in heroes" :key="hero.id" :type="type" class="hero-icon"/>
  </div>
</template>

<script lang="ts">
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/HeroIcon.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    HeroIcon,
  },
})
export default class HeroList extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private type!: string;
  @Prop({ default: () => () => true, type: Function })
  private filter!: (data: Hero) => boolean;

  get heroes(): Hero[] {
    return Object.values(heroes as Hero)
      .filter(this.filter)
      .sort((a: Hero, b: Hero) => {
        if (a.localized_name < b.localized_name) {
          return -1;
        }
        if (a.localized_name > b.localized_name) {
          return 1;
        }
        return 0;
      });
  }
}
</script>

<style lang="scss" scoped>
.hero-icon {
  box-shadow: $box-shadow;
  filter: saturate(40%);
  margin: 0 1rem 1rem 0;
  transition: all 300ms ease-out;

  &:hover {
    box-shadow: $box-shadow-lg;
    filter: saturate(100%);
    transform: scale(1.3);
  }
}
</style>
