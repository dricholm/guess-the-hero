<template>
  <div>
    <img
      ref="img"
      :src="imageSrc"
      :alt="localizedName"
      :class="{ backpack, neutral }"
    />
    <b-popover
      :target="() => $refs.img"
      :triggers="popoverTriggers"
      :disabled="!valid"
    >
      <ItemDescription
        v-if="valid"
        :name="localizedName"
        :cost="item.cost"
        :image="imageSrc"
        :attributes="item.attrib"
        :actives="item.active"
        :passives="item.passive"
        :cooldown="cooldown"
        :uses="item.use"
        :hints="item.hint"
        :note="item.notes"
        :lore="item.lore"
      />
    </b-popover>
  </div>
</template>

<script lang="ts">
import { BPopover } from 'bootstrap-vue';
import itemIdsJson from 'dotaconstants/build/item_ids.json';
import itemsJson from 'dotaconstants/build/items.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Item, { Attribute, ItemProperty } from '@/interfaces/Item';
import ItemDescription from '@/components/items/ItemDescription.vue';

@Component({
  components: {
    BPopover,
    ItemDescription,
  },
})
export default class ItemIcon extends Vue {
  @Prop({ default: 0, type: Number })
  private readonly id!: number;
  @Prop({ default: false, type: Boolean })
  private readonly neutral!: boolean;
  @Prop({ default: false, type: Boolean })
  private readonly backpack!: boolean;

  get name(): string {
    return itemIdsJson[this.id.toString() as keyof typeof itemIdsJson];
  }

  get item(): Item {
    return itemsJson[this.name as keyof typeof itemsJson] as Item;
  }

  get localizedName(): string {
    return this.valid
      ? (itemsJson[this.name as keyof typeof itemsJson] as Item)?.dname
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

  get cooldown(): number {
    return this.item.cd || 0;
  }

  get popoverTriggers(): string[] {
    return ['hover', 'focus'];
  }
}
</script>

<style lang="scss" scoped>
img {
  background-image: url('../../../public/img/items/emptyitembg.jpg');
  background-size: cover;
  display: inline-block;
  height: 64px;
  width: 88px;
}

.backpack {
  filter: grayscale(1);
  height: 48px;
  width: 66px;
}

.neutral {
  clip-path: circle(50%);
}
</style>
