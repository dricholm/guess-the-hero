<template>
  <img :src="imageSrc" :alt="localizedName" :class="{ portrait: type === 'portrait', icon: type !== 'portrait', small: small }" v-bTooltip="localizedName"/>
</template>

<script lang="ts">
import bTooltip from 'bootstrap-vue/es/directives/tooltip/tooltip';
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Hero from '@/interfaces/Hero';

@Component({
  directives: {
    bTooltip,
  },
})
export default class HeroIcon extends Vue {
  @Prop({ default: 0, type: Number })
  private id!: number;
  @Prop({ default: 'icon', type: String })
  private type!: string;
  @Prop({ default: false, type: Boolean })
  private small!: boolean;

  get name(): string {
    return this.valid ? (heroes[this.id] as Hero).name : 'Empty';
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
      ? `${process.env.BASE_URL}img/${folder}/${this.name}.jpg`
      : `${process.env.BASE_URL}img/${folder}/npc_dota_hero_default.jpg`;
  }
}
</script>

<style lang="scss" scoped>
img {
  background-size: cover;
  display: inline-block;
}

.icon {
  background-image: url('../../../public/img/heroes/npc_dota_hero_default.jpg');
  height: 72px;
  width: 128px;

  &.small {
    height: 36px;
    width: 64px;
  }
}

.portrait {
  background-image: url('../../../public/img/portraits/npc_dota_hero_default.jpg');
  height: 94px;
  width: 71px;
}
</style>
