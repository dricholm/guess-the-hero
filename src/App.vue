<template>
  <div>
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
</style>
