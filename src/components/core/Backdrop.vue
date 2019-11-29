<template>
  <transition name="fade">
    <div class="backdrop"></div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Backdrop extends Vue {}
</script>

<style lang="scss" scoped>
.backdrop {
  background-color: $modal-backdrop-bg;
  bottom: 0;
  left: 0;
  opacity: $modal-backdrop-opacity;
  position: fixed;
  right: 0;
  top: 0;
  z-index: $zindex-modal-backdrop;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 350ms ease-out;
  }

  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>
