<template>
  <div class="offline" v-if="isOffline">Offline</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Offline extends Vue {
  private isOffline = false;

  created() {
    window.addEventListener('offline', () => {
      this.isOffline = true;
    });
    window.addEventListener('online', () => {
      this.isOffline = false;
    });
  }
}
</script>

<style lang="scss" scoped>
.offline {
  background: linear-gradient($dark, $danger, $dark);
  font-weight: $font-weight-bold;
  padding: $spacer * 0.25;
  text-align: center;
  text-transform: uppercase;
}
</style>
