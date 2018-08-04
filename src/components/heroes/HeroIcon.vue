<template>
  <img :src="imageSrc" :alt="localizedName" :class="{ portrait: type === 'portrait', icon: type !== 'portrait', small: small }"/>
</template>

<script lang="ts">
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Hero from '@/interfaces/Hero';

@Component
export default class HeroIcon extends Vue {
  @Prop({ default: 0, type: Number })
  private id!: number;
  @Prop({ default: 'icon', type: String })
  private type!: string;
  @Prop({ default: false, type: Boolean })
  private small!: boolean;

  get name(): string {
    return (heroes[this.id] as Hero).name;
  }

  get localizedName(): string {
    return this.valid ? (heroes[this.id] as Hero).localized_name : 'Empty';
  }

  get valid(): boolean {
    return typeof (heroes[this.id] as Hero) !== 'undefined';
  }

  get imageSrc(): string {
    const folder = this.type === 'portrait' ? 'portraits' : 'heroes';
    return this.valid
      ? `/img/${folder}/${this.name}.png`
      : `/img/${folder}/npc_dota_hero_default.png`;
  }
}
</script>

<style lang="scss" scoped>
img {
  background-size: cover;
  display: inline-block;
}

.icon {
  background-image: url('/img/heroes/npc_dota_hero_default.png');
  height: 72px;
  width: 128px;

  &.small {
    height: 36px;
    width: 64px;
  }
}

.portrait {
  background-image: url('/img/portraits/npc_dota_hero_default.png');
  height: 94px;
  width: 71px;
}
</style>
