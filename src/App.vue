<template>
  <div class="app">
    <div v-if="notificationShown" class="notification">
      <div class="text-center offline" v-if="isOffline">
        Offline
      </div>
      <div
        class="d-flex align-items-center justify-content-center p-2 bg-dark"
        v-if="updateAvailable"
      >
        <p class="mb-0 mr-3">
          Webapp has been updated!
        </p>
        <button class="btn btn-primary" @click="refresh">Refresh</button>
      </div>
    </div>
    <NavBar />
    <main>
      <transition name="route-change">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/components/core/Footer.vue';
import NavBar from '@/components/core/NavBar.vue';

@Component({
  components: {
    Footer,
    NavBar,
  },
})
export default class App extends Vue {
  private registration: any;
  private updateAvailable = false;
  private isOffline = false;

  created() {
    document.addEventListener('swUpdated', this.onSwUpdated, {
      once: true,
    });
    window.addEventListener('offline', () => {
      this.isOffline = true;
    });
    window.addEventListener('online', () => {
      this.isOffline = false;
    });
  }

  get notificationShown(): boolean {
    return this.isOffline || this.updateAvailable;
  }

  private onSwUpdated(event: any) {
    this.registration = event.detail;
    this.updateAvailable = true;
  }

  refresh() {
    this.updateAvailable = false;
    this.registration?.waiting?.postMessage('skipWaiting');
  }
}
</script>

<style lang="scss">
@import './styles/style.scss';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

.app {
  background: linear-gradient(lighten(#161d25, 15%), #161d25) fixed;
  display: grid;
  grid-template-areas:
    'notification'
    'nav'
    'main'
    'footer';
  grid-template-columns: auto;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;

  .notification {
    position: sticky;
    top: 0;
    z-index: $zindex-tooltip + 1;

    .offline {
      background: linear-gradient($dark, $danger, $dark);
      font-weight: $font-weight-bold;
      padding: $spacer * 0.25;
      text-transform: uppercase;
    }
  }

  NavBar {
    grid-area: nav;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
}
</style>
