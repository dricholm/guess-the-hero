<template>
  <div class="container my-5 item-categories">
    <card header="Consumables" class="mb-3">
      <ItemList :ids="consumables" />
    </card>

    <card header="Attributes" class="mb-3">
      <ItemList :ids="attributes" />
    </card>

    <card header="Equipment" class="mb-3">
      <ItemList :ids="equipment" />
    </card>

    <card header="Miscellaneous" class="mb-3">
      <ItemList :ids="miscellaneous" />
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
  metaInfo: {
    meta: [
      { content: 'Learn all about the items of Dota 2.', name: 'description' },
    ],
    title: 'Items',
  },
})
export default class Items extends Vue {
  get consumables(): number[] {
    return [46, 38, 237, 188, 42, 43, 216, 39, 44, 257, 40, 41, 609];
  }

  get attributes(): number[] {
    return [16, 13, 14, 15, 20, 17, 18, 19, 261, 21, 22, 23];
  }

  get equipment(): number[] {
    return [11, 12, 265, 181, 240, 2, 25, 4, 10, 6, 3, 485, 7, 5, 8];
  }

  get miscellaneous(): number[] {
    return [27, 28, 34, 593, 244, 31, 29, 30, 26, 473, 215, 37, 1];
  }

  get secretShop(): number[] {
    return [56, 57, 59, 61, 60, 9, 32, 55, 24, 51, 58, 53, 52, 54];
  }

  get accessories(): number[] {
    return [
      36,
      77,
      75,
      73,
      178,
      569,
      596,
      63,
      50,
      67,
      69,
      172,
      65,
      164,
      48,
      247,
      635,
    ];
  }

  get support(): number[] {
    return [86, 88, 94, 92, 214, 187, 180, 185, 79, 269, 81, 267, 90, 231];
  }

  get magical(): number[] {
    return [
      190,
      254,
      102,
      232,
      534,
      100,
      206,
      104,
      98,
      229,
      108,
      110,
      235,
      96,
      1466,
      610,
    ];
  }

  get armor(): number[] {
    return [
      131,
      125,
      127,
      256,
      129,
      692,
      242,
      226,
      116,
      263,
      147,
      123,
      119,
      114,
      112,
      121,
    ];
  }

  get weapons(): number[] {
    return [
      149,
      223,
      151,
      143,
      152,
      168,
      145,
      176,
      225,
      135,
      139,
      137,
      141,
      249,
      133,
      250,
      208,
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
      598,
      210,
      273,
      154,
      277,
      156,
      160,
      158,
      600,
      603,
      604,
    ];
  }

  get neutralTier1(): number[] {
    return [
      287,
      354,
      355,
      356,
      349,
      305,
      565,
      577,
      589,
      838, // Pig Pole
      840, // Tumbler's Toy
    ];
  }

  get neutralTier2(): number[] {
    return [
      212,
      357,
      358,
      306,
      331,
      288,
      290,
      359,
      680,
      686,
      828, // Brigand's Blade
      835, // Fae Grenade
    ];
  }

  get neutralTier3(): number[] {
    return [
      289,
      326,
      376,
      381,
      309,
      361,
      573,
      574,
      676,
      675,
      834, // Blast Rig
    ];
  }

  get neutralTier4(): number[] {
    return [
      300,
      311,
      335,
      362,
      379,
      336,
      571,
      585,
      638,
      825, // Ascetic's Cap
      837, // Witchbane
    ];
  }

  get neutralTier5(): number[] {
    return [
      291,
      292,
      294,
      301,
      366,
      370,
      371,
      372,
      374,
      678,
      677,
      829, // Arcanist's Armor
    ];
  }

  get roshan(): number[] {
    return [117, 33, 260, 271];
  }

  get removed(): number[] {
    return [
      45,
      71,
      106,
      182,
      239,
      279,
      286,
      293,
      297,
      298,
      299,
      302,
      304, // Ironwood Tree
      307,
      308,
      310,
      313,
      325,
      327,
      328,
      330,
      334, // Imp Claw
      360,
      363, // Illusionist's Cape
      364,
      365,
      367, // Ballista
      368,
      369,
      375, // Faded Broach
      377, // Minotaur Horn
      378, // Orb of Destruction
    ];
  }
}
</script>

metaInfo: { title: 'Items' }
