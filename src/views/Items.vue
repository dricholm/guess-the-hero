<template>
  <div class="container my-5">
    <h1>Items</h1>

    <ItemIcon :id="+n" v-for="n in ids" :key="n"/>
  </div>
</template>

<script lang="ts">
import itemIds from 'dotaconstants/build/item_ids.json';
import items from 'dotaconstants/build/items.json';
import { Component, Vue } from 'vue-property-decorator';

import ItemIcon from '@/components/ItemIcon.vue';
import Item from '@/interfaces/Item';

@Component({
  components: {
    ItemIcon,
  },
})
export default class Items extends Vue {
  get ids() {
    return Object.keys(itemIds).filter(
      (id: string, index: number, array: string[]) => {
        if (itemIds[id].startsWith('recipe_')) {
          return false;
        }

        switch (+id) {
          case 275:
          case 276:
          case 1028:
          case 1029:
          case 1030:
            return false;

          default:
            return true;
        }
      }
    );
  }
}
</script>
