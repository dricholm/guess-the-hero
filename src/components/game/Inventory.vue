<template>
  <div class="inventory-container">
    <ItemList :ids="inventory" prefix="inventory" spacing/>
    <ItemList :ids="backpack" prefix="backpack" backpack spacing/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ItemList from '@/components/items/ItemList.vue';

@Component({
  components: {
    ItemList,
  },
})
export default class Inventory extends Vue {
  @Prop({ default: () => [0, 0, 0, 0, 0, 0], type: Array })
  private inventory!: number[];
  @Prop({ default: () => [0, 0, 0], type: Array })
  private backpack!: number[];
}
</script>

<style lang="scss" scoped>
.inventory-container {
  background: linear-gradient(#24272c, #1a1b20);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  max-width: 380px;
  padding: $spacer;
  text-align: center;
}
</style>
