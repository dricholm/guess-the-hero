<template>
  <div>
    <h2 v-if="title">
      {{ title }}
    </h2>

    <HeroIcon :id="hero.id" v-for="hero in heroes" :key="hero.id" :type="type"/>
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
  @Prop({ default: () => () => true })
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
