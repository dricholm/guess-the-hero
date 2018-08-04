<template>
  <div class="container my-5">
    <card header="Consumables" class="mb-3">
      <ItemList :ids="consumables"/>
    </card>

    <card header="Attributes" class="mb-3">
      <ItemList :ids="attributes"/>
    </card>

    <card header="Armaments" class="mb-3">
      <ItemList :ids="armaments"/>
    </card>

    <card header="Arcane" class="mb-3">
      <ItemList :ids="arcane"/>
    </card>

    <card header="Common" class="mb-3">
      <ItemList :ids="common"/>
    </card>

    <card header="Support" class="mb-3">
      <ItemList :ids="support"/>
    </card>

    <card header="Caster" class="mb-3">
      <ItemList :ids="caster"/>
    </card>

    <card header="Armor" class="mb-3">
      <ItemList :ids="armor"/>
    </card>

    <card header="Weapons" class="mb-3">
      <ItemList :ids="weapons"/>
    </card>

    <card header="Artifacts" class="mb-3">
      <ItemList :ids="artifacts"/>
    </card>

    <card header="Secret Shop" class="mb-3">
      <ItemList :ids="secretShop"/>
    </card>

    <card header="Dropped" class="mb-3">
      <ItemList :ids="dropped"/>
    </card>

    <card header="Removed" class="mb-3">
      <ItemList :ids="removed"/>
    </card>
  </div>
</template>

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
    return [46, 38, 237, 188, 42, 43, 216, 39, 44, 257, 40, 45, 41];
  }

  get attributes(): number[] {
    return [16, 13, 14, 15, 20, 17, 18, 19, 21, 22, 23];
  }

  get armaments(): number[] {
    return [12, 182, 11, 265, 181, 240, 2, 4, 10, 6, 7, 3, 5, 8];
  }

  get arcane(): number[] {
    return [34, 244, 27, 28, 29, 25, 31, 56, 57, 30, 26, 215, 37, 1];
  }

  get common(): number[] {
    return [36, 77, 75, 73, 178, 50, 63, 67, 69, 65, 48, 247];
  }

  get support(): number[] {
    return [88, 94, 86, 92, 214, 212, 187, 180, 185, 81, 79, 267, 90, 231];
  }

  get caster(): number[] {
    return [
      254,
      190,
      232,
      102,
      106,
      229,
      104,
      100,
      206,
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
      242,
      256,
      116,
      226,
      119,
      263,
      123,
      121,
      147,
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
      172,
      164,
      252,
      166,
      174,
      210,
      168,
      154,
      160,
      156,
      158,
    ];
  }

  get secretShop(): number[] {
    return [59, 61, 60, 9, 32, 55, 24, 51, 58, 53, 52, 54];
  }

  get dropped(): number[] {
    return [117, 33, 260];
  }

  get removed(): number[] {
    return [71, 239];
  }
}
</script>
