<template>
  <img
    :src="imageSrc"
    :alt="localizedName"
    :class="{ backpack }"
    v-b-tooltip
    :title="localizedName"
  />
</template>

<script lang="ts">
import { VBTooltip } from 'bootstrap-vue';
import itemIdsJson from 'dotaconstants/build/item_ids.json';
import itemsJson from 'dotaconstants/build/items.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Item from '@/interfaces/Item';

@Component({
  directives: {
    bTooltip: VBTooltip,
  },
})
export default class ItemIcon extends Vue {
  @Prop({ default: 0, type: Number })
  private id!: number;
  @Prop({ default: false, type: Boolean })
  private backpack!: boolean;

  get name(): string {
    return itemIdsJson[this.id.toString() as keyof typeof itemIdsJson];
  }

  get localizedName(): string {
    return this.valid
      ? (itemsJson[this.name as keyof typeof itemsJson] as Item).dname
      : 'Empty';
  }

  get valid(): boolean {
    return (
      typeof itemIdsJson[this.id.toString() as keyof typeof itemIdsJson] !==
      'undefined'
    );
  }

  get imageSrc(): string {
    return this.valid
      ? this.name.startsWith('recipe_')
        ? `${process.env.BASE_URL}img/items/recipe.jpg`
        : `${process.env.BASE_URL}img/items/${this.name}.jpg`
      : `${process.env.BASE_URL}img/items/emptyitembg.jpg`;
  }
}
</script>

<style lang="scss" scoped>
img {
  background-image: url('../../../public/img/items/emptyitembg.jpg');
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 64px;
  width: 88px;
}

.backpack {
  filter: grayscale(1);
  height: 48px;
  width: 66px;
}
</style>
