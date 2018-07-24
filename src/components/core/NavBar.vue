<template>
  <nav class="navbar">
    <span @click="show = false">
      <router-link class="navbar-brand" to="/">Guess the Hero</router-link>
    </span>

    <button class="navbar-toggler" type="button" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse" id="navbarContent" :class="{ show: show }">
      <ul class="navbar-nav" @click="show = false">
        <li class="nav-item">
          <router-link class="nav-link" to="/play">Play</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/heroes">Heroes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/items">Items</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  private show: boolean = false;

  private toggleNavbar() {
    this.show = !this.show;
  }
}
</script>


<style lang="scss" scoped>
.navbar {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: $box-shadow;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  .navbar-brand {
    display: inline-block;
    font-size: $navbar-brand-font-size;
    line-height: inherit;
    margin-right: $navbar-padding-x;
    padding: $navbar-padding-y $navbar-padding-x;
    white-space: nowrap;

    @include hover-focus {
      text-decoration: none;
    }
  }

  .navbar-toggler {
    background-color: transparent;
    border: none;
    font-size: $navbar-toggler-font-size;
    line-height: 1;
    padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;

    @include hover-focus {
      text-decoration: none;
    }

    @include media-breakpoint-up('md') {
      display: none;
    }

    &:not(:disabled):not(.disabled) {
      cursor: pointer;
    }

    .navbar-toggler-icon {
      background: no-repeat center center;
      background-size: 100% 100%;
      background-image: $navbar-dark-toggler-icon-bg;
      content: '';
      display: inline-block;
      height: 1.5em;
      vertical-align: middle;
      width: 1.5em;
    }
  }

  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    max-height: 0;
    overflow: hidden;
    position: relative;
    transition: max-height 500ms ease-in-out;

    &.show {
      max-height: 132px;
    }

    &::after {
      background-color: lighten($primary, 10%);
      bottom: 0;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
      width: 100vw;
    }

    &.show::after {
      transform: scaleX(1);
    }

    @include media-breakpoint-up('md') {
      flex-basis: auto;
      max-height: 132px;

      &.show::after {
        transform: scaleX(0);
      }
    }

    .navbar-nav {
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;

      @include media-breakpoint-up('md') {
        background: none;
        flex-direction: row;
      }

      .nav-item {
        .nav-link {
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          color: #ccc;
          display: block;
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

          &.router-link-active {
            color: $navbar-dark-active-color;
          }
        }
      }
    }
  }
}
</style>
