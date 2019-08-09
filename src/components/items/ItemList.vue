<template>
  <div class="item-grid">
    <ItemIcon
      :id="itemId"
      v-for="(itemId, index) in ids"
      :key="`${keyPrefix}-${index}`"
      :backpack="backpack"
      :class="{ 'mr-2 mb-2': spacing }"
    />
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
export default class ItemList extends Vue {
  @Prop({ default: () => [], type: Array })
  private ids!: number[];
  @Prop({ default: false, type: Boolean })
  private backpack!: boolean;
  @Prop({ default: false, type: Boolean })
  private spacing!: boolean;
  @Prop({ default: 'item', type: String })
  private keyPrefix!: string;
}
</script>

<style lang="scss" scoped>
.item-grid {
  display: grid;
  grid-auto-columns: 88px;
  grid-auto-flow: row dense;
  grid-auto-rows: 64px;
  grid-gap: $spacer * 0.5;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  width: 100%;

  &.grid-backpack {
    grid-auto-columns: 66px;
    grid-auto-rows: 48px;
    grid-gap: $spacer;
    grid-template-columns: repeat(auto-fit, minmax(66px, 1fr));
  }
}
</style>
