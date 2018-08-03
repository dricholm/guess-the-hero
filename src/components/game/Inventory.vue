<template>
  <div class="inventory-container">
    <ItemIcon v-for="(id, index) in inventory" :id="id" :key="`i-${index}`" class="inventory-item"/>
    <ItemIcon v-for="(id, index) in backpack" :id="id" :key="`b-${index}`" backpack class="inventory-item"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ItemIcon from '@/components/items/ItemIcon.vue';

@Component({
  components: {
    ItemIcon,
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
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 312px;
  padding: $spacer 0;
  text-align: center;

  .inventory-item {
    margin-bottom: $spacer * 0.5;
    margin-right: $spacer * 0.5;
  }

  :nth-child(3n+3) {
    margin-right: 0;
  }

  :nth-child(n+7) {
    margin-bottom: 0;
  }
}
</style>
