<template>
  <div class="app">
    <NavBar/>
    <main>
      <router-view/>
    </main>
    <Footer/>
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
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/style.scss';

.app {
  background: linear-gradient(lighten(#161d25, 15%), #161d25);
  display: grid;
  grid-template-areas:
    'nav'
    'main'
    'footer';
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  NavBar {
    grid-area: nav;
  }

  main {
    grid-area: main;
  }

  Footer {
    grid-area: footer;
  }
}
</style>
