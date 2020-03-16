<template>
  <div
    class="d-flex align-items-center justify-content-center p-2 bg-dark"
    v-if="updateAvailable"
  >
    <p class="mb-0 mr-3">
      Webapp has been updated!
    </p>
    <button class="btn btn-primary" @click="refresh">Refresh</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppUpdate extends Vue {
  private registration: any;
  private updateAvailable = false;

  created() {
    document.addEventListener('swUpdated', this.onSwUpdated, {
      once: true,
    });
  }

  private onSwUpdated(event: any) {
    this.registration = event.detail;
    this.updateAvailable = true;
  }

  refresh() {
    this.updateAvailable = false;
    this.registration?.waiting?.postMessage('skipWaiting');
    window.location.reload();
  }
}
</script>

<style lang="scss" scoped></style>
