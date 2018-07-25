<template>
  <b-navbar toggleable="md" type="dark" class="navbar" :class="{ shown }">
    <b-navbar-brand to="/" class="navbar-brand" @click="shown = false">
      Guess the Hero
    </b-navbar-brand>

    <b-navbar-toggle target="navContent"/>

    <b-collapse is-nav id="navContent" v-model="shown">
      <b-navbar-nav>
        <b-nav-item to="/play">
          Play
        </b-nav-item>
        <b-nav-item to="/heroes">
          Heroes
        </b-nav-item>
        <b-nav-item to="/items">
          Items
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    bCollapse,
    bNavItem,
    bNavbar,
    bNavbarBrand,
    bNavbarNav,
    bNavbarToggle,
  },
})
export default class NavBar extends Vue {
  private shown: boolean = false;
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: $box-shadow;
  position: relative;

  &::after {
    background: $primary;
    bottom: 0;
    content: '';
    left: 0;
    height: 1px;
    position: absolute;
    transition: transform 350ms ease-out;
    transform: scaleX(0);
    width: 100vw;
  }

  &.shown::after {
    transform: scaleX(1);
  }

  .navbar-brand {
    margin-right: $spacer;
    padding: $spacer;
  }

  .navbar-collapse {
    position: relative;

    .navbar-nav {
      background: rgba(0, 0, 0, 0.2);

      @include media-breakpoint-up('md') {
        background: none;
      }

      .nav-item {
        .nav-link {
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          color: #ccc;
          padding: $nav-link-padding-y $nav-link-padding-x;
          text-transform: uppercase;

          @include hover-focus {
            color: #eee;
            text-decoration: none;
          }

          @include media-breakpoint-up('md') {
            border-top: none;
            padding-right: $navbar-nav-link-padding-x;
            padding-left: $navbar-nav-link-padding-x;
          }

          &.active {
            color: $navbar-dark-active-color;
          }
        }
      }
    }
  }
}
</style>
