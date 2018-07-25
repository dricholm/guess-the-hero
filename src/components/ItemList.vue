<template>
  <div class="mb-4">
    <h2 v-if="title">
      {{ title }}
    </h2>

    <ItemIcon :id="itemId" v-for="itemId in ids" :key="itemId"/>
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
  @Prop({ default: () => [] })
  private ids!: number[];
}
</script>
