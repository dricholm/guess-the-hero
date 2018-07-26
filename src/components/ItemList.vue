<template>
  <div class="mb-4">
    <h2 v-if="title">
      {{ title }}
    </h2>

    <ItemIcon :id="itemId" v-for="itemId in ids" :key="itemId" :backpack="backpack"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ItemIcon from '@/components/ItemIcon.vue';

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
}
</script>
