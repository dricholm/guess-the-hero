<template>
  <div>
    <h2 v-if="title">
      {{ title }}
    </h2>

    <ItemIcon :id="itemId" v-for="(itemId, index) in ids" :key="`${keyPrefix}-${index}`" :backpack="backpack" :class="{ 'mr-2 mb-2': spacing }"/>
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
  @Prop(String) private title!: string;
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
