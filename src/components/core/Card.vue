<template>
  <div class="card">
    <div class="card-header" v-if="header">
      {{ header }}
    </div>
    <div class="card-body" :class="bodyClass">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop({ default: '', type: String })
  private header!: string;
  @Prop({ default: '', type: String })
  private bodyClass!: string;
}
</script>

<style lang="scss" scoped>
.card {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  box-shadow: $box-shadow;
  display: flex;
  flex-direction: column;

  .card-header {
    background-color: $dark;
    font-weight: $font-weight-bold;
    padding: ($spacer * 0.75) ($spacer * 1.25);
    text-transform: uppercase;
  }

  .card-body {
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    padding: $spacer * 1.25;
  }
}
</style>
