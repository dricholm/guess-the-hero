<template>
  <div class="app">
    <div class="notification">
      <Offline />
      <AppUpdate />
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

import '@/styles/style.scss';

import AppUpdate from '@/components/core/AppUpdate.vue';
import Footer from '@/components/core/Footer.vue';
import NavBar from '@/components/core/NavBar.vue';
import Offline from '@/components/core/Offline.vue';

@Component({
  components: {
    AppUpdate,
    Footer,
    NavBar,
    Offline,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
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
