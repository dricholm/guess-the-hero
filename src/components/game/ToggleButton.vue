<template>
  <button class="stat" :class="{ active: shown }" @click="toggle">
    <span class="stat-toggle">
      {{ title }}
    </span>
    <span class="stat-value">
      {{ value }}
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ToggleButton extends Vue {
  @Prop({ default: 'Toggle', type: String })
  private title!: string;
  @Prop({ type: [Number, String] })
  private value!: string | number;
  @Prop({ default: false, type: Boolean })
  private show!: boolean;

  private shown: boolean = this.show;

  private toggle() {
    this.shown = !this.shown;
  }
}
</script>

<style lang="scss" scoped>
.stat {
  align-items: center;
  background: none;
  border: none;
  display: flex;
  font-size: $font-size-lg;
  justify-content: space-between;
  transition: background 300ms ease-out;
  width: 100%;

  .stat-toggle {
    align-items: center;
    color: $text-muted;
    cursor: pointer;
    display: flex;
    outline: none;
    padding: $spacer * 0.5 $spacer * 0.25 $spacer * 0.5 $spacer * 0.75;
    position: relative;
    text-align: left;
    text-transform: uppercase;
    flex: 1;

    &::before {
      background: $black;
      border: 4px solid $black;
      content: '';
      display: block;
      height: 22px;
      margin-right: $spacer * 0.5;
      transition: background 300ms ease-out;
      width: 22px;
    }

    @include hover-focus {
      color: $light;
      text-shadow: 1px 1px 6px rgba(255, 255, 255, 0.3);
    }
  }

  .stat-value {
    color: $success;
    font-weight: $font-weight-bold;
    margin: $spacer * 0.5 ($spacer * 0.75) $spacer * 0.5 $spacer * 0.25;
    opacity: 0;
    overflow: hidden;
    text-align: right;
    text-transform: uppercase;
    transform: translateX(-80%);
    transform-origin: bottom;
    transition: opacity 300ms ease-out, transform 300ms ease-out;
  }

  &.active {
    background: rgba(255, 255, 255, 0.1);

    .stat-toggle {
      color: $light;
      text-shadow: 1px 1px 6px rgba(255, 255, 255, 0.3);

      &::before {
        background: lighten($info, 40%);
      }
    }

    .stat-value {
      opacity: 1;
      transform: none;
    }
  }
}
</style>
