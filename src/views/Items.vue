<template>
  <div class="container my-5 item-categories">
    <card header="Consumables" class="mb-3">
      <ItemList :ids="consumables" />
    </card>

    <card header="Attributes" class="mb-3">
      <ItemList :ids="attributes" />
    </card>

    <card header="Armaments" class="mb-3">
      <ItemList :ids="armaments" />
    </card>

    <card header="Arcane" class="mb-3">
      <ItemList :ids="arcane" />
    </card>

    <card header="Secret Shop" class="mb-3">
      <ItemList :ids="secretShop" />
    </card>

    <card header="Accessories" class="mb-3">
      <ItemList :ids="accessories" />
    </card>

    <card header="Support" class="mb-3">
      <ItemList :ids="support" />
    </card>

    <card header="Magical" class="mb-3">
      <ItemList :ids="magical" />
    </card>

    <card header="Armor" class="mb-3">
      <ItemList :ids="armor" />
    </card>

    <card header="Weapons" class="mb-3">
      <ItemList :ids="weapons" />
    </card>

    <card header="Artifacts" class="mb-3">
      <ItemList :ids="artifacts" />
    </card>

    <card header="Neutral Tier 1" class="mb-3">
      <ItemList :ids="neutralTier1" />
    </card>

    <card header="Neutral Tier 2" class="mb-3">
      <ItemList :ids="neutralTier2" />
    </card>

    <card header="Neutral Tier 3" class="mb-3">
      <ItemList :ids="neutralTier3" />
    </card>

    <card header="Neutral Tier 4" class="mb-3">
      <ItemList :ids="neutralTier4" />
    </card>

    <card header="Neutral Tier 5" class="mb-3">
      <ItemList :ids="neutralTier5" />
    </card>

    <card header="Roshan" class="mb-3">
      <ItemList :ids="roshan" />
    </card>

    <card header="Removed" class="mb-3">
      <ItemList :ids="removed" />
    </card>
  </div>
</template>

<style lang="scss" scoped>
.item-categories {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: $spacer;

  @include media-breakpoint-up('lg') {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Card from '@/components/core/Card.vue';
import ItemList from '@/components/items/ItemList.vue';

@Component({
  components: {
    Card,
    ItemList,
  },
})
export default class Items extends Vue {
  get consumables(): number[] {
    return [46, 38, 237, 188, 42, 43, 216, 39, 44, 257, 40, 41];
  }

  get attributes(): number[] {
    return [16, 13, 14, 15, 20, 17, 18, 19, 261, 21, 22, 23];
  }

  get armaments(): number[] {
    return [12, 11, 265, 181, 240, 2, 4, 10, 6, 7, 3, 485, 5, 8];
  }

  get arcane(): number[] {
    return [34, 244, 27, 28, 29, 25, 31, 279, 30, 26, 473, 215, 37, 1];
  }

  get secretShop(): number[] {
    return [56, 57, 59, 61, 60, 9, 32, 55, 24, 51, 58, 53, 52, 54];
  }

  get accessories(): number[] {
    return [36, 77, 75, 73, 178, 63, 50, 67, 69, 172, 164, 65, 48, 247];
  }

  get support(): number[] {
    return [88, 94, 86, 92, 214, 187, 180, 185, 81, 79, 269, 267, 90, 231];
  }

  get magical(): number[] {
    return [
      254,
      190,
      102,
      232,
      106,
      104,
      100,
      206,
      229,
      98,
      108,
      225,
      110,
      96,
      235,
    ];
  }

  get armor(): number[] {
    return [
      131,
      125,
      127,
      129,
      256,
      242,
      226,
      116,
      263,
      119,
      147,
      121,
      123,
      114,
      112,
    ];
  }

  get weapons(): number[] {
    return [
      149,
      151,
      223,
      152,
      143,
      145,
      135,
      176,
      137,
      141,
      139,
      249,
      133,
      208,
      250,
    ];
  }

  get artifacts(): number[] {
    return [
      236,
      162,
      170,
      259,
      252,
      166,
      174,
      210,
      168,
      273,
      154,
      277,
      160,
      156,
      158,
    ];
  }

  get neutralTier1(): number[] {
    return [287, 71, 239, 304, 305, 328, 354, 355, 356, 375, 349];
  }

  get neutralTier2(): number[] {
    return [288, 297, 212, 306, 334, 290, 357, 358, 359, 331, 360];
  }

  get neutralTier3(): number[] {
    return [308, 298, 299, 289, 326, 361, 376, 378, 381, 336, 309];
  }

  get neutralTier4(): number[] {
    return [330, 300, 311, 325, 335, 362, 363, 364, 365, 379, 377];
  }

  get neutralTier5(): number[] {
    return [291, 292, 294, 301, 366, 367, 368, 369, 370, 371, 372, 374];
  }

  get roshan(): number[] {
    return [117, 33, 260, 271];
  }

  get removed(): number[] {
    return [45, 286, 182, 293, 302, 307, 310, 313, 327];
  }
}
</script>
