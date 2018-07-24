<template>
    <img :src="imageSrc" :alt="localizedName" :class="{portrait: type === 'portrait', icon: type !== 'portrait'}"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { heroes } from '@/data/heroes';

@Component
export default class HeroIcon extends Vue {
  @Prop(Number) private id!: number;
  @Prop({ default: 'icon' }) private type!: string;

  get name(): string {
    return heroes[this.id].name;
  }

  get localizedName(): string {
    return this.valid ? heroes[this.id].localizedName : 'Invalid hero';
  }

  get valid(): boolean {
    return typeof heroes[this.id] !== 'undefined';
  }

  get imageSrc(): string {
    const folder = this.type === 'portrait' ? 'portraits' : 'heroes';
    return this.valid ? require(`@/assets/images/${folder}/${this.name}.png`) : '#';
  }
}
</script>

<style lang="scss" scoped>
img {
  background-color: rgba(0, 0, 0, 0.3);
  display: inline-block;
}

.icon {
  height: 72px;
  width: 128px;
}

.portrait {
  height: 94px;
  width: 71px;
}
</style>
