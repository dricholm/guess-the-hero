<template>
  <img :src="imageSrc" :alt="localizedName"/>
</template>

<script lang="ts">
import itemIds from 'dotaconstants/build/item_ids.json';
import items from 'dotaconstants/build/items.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Item from '@/interfaces/Item';

@Component
export default class ItemIcon extends Vue {
  @Prop(Number) private id!: number;

  get name(): string {
    return itemIds[this.id];
  }

  get localizedName(): string {
    return this.valid ? (items[this.name] as Item).dname : 'Invalid item';
  }

  get valid(): boolean {
    return typeof itemIds[this.id] !== 'undefined';
  }

  get imageSrc(): string {
    return this.valid
      ? this.name.startsWith('recipe_')
        ? '/img/items/recipe.png'
        : `/img/items/${this.name}.png`
      : '#';
  }
}
</script>

<style lang="scss" scoped>
img {
  background-color: rgba(0, 0, 0, 0.3);
  height: 64px;
  display: inline-block;
  width: 88px;
}
</style>
