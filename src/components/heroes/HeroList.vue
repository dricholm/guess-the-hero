<template>
  <div class="hero-grid" :class="{ small: small }">
    <span
      v-for="hero in heroes"
      :key="hero.id"
      :to="isUrl ? `${hero.name.slice(14)}` : null"
      :is="isUrl ? 'router-link' : 'span'"
    >
      <HeroIcon
        :id="hero.id"
        class="hero-icon"
        :small="small"
        @click.native="click(hero.id)"
      />
    </span>
  </div>
</template>

<script lang="ts">
import heroesJson from 'dotaconstants/build/heroes.json';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/heroes/HeroIcon.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    HeroIcon,
  },
})
export default class HeroList extends Vue {
  @Prop({ default: () => () => true, type: Function })
  private filter!: (data: Hero) => boolean;
  @Prop({ default: false, type: Boolean })
  private small!: boolean;
  @Prop({ default: false, type: Boolean })
  private isUrl!: boolean;

  @Emit()
  private click(heroId: number) {
    // TS lint empty block
  }

  private get heroes(): Hero[] {
    return Object.values<Hero>(heroesJson)
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
.hero-grid {
  display: grid;
  grid-auto-flow: row dense;
  grid-gap: $spacer;
  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  place-items: center;
  width: 100%;

  &.small {
    grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  }

  .hero-icon {
    box-shadow: $box-shadow;
    cursor: pointer;
    filter: saturate(40%);
    transition: filter 300ms ease-out;

    @include hover-focus {
      animation: pop-out 300ms forwards;
      box-shadow: $box-shadow-lg;
      filter: saturate(100%);
      z-index: 1;
    }

    @keyframes pop-out {
      0% {
        transform: scale(1);
      }
      75% {
        transform: scale(1.4);
      }
      100% {
        transform: scale(1.3);
      }
    }
  }
}
</style>
