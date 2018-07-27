<template>
  <b-nav>
    <b-nav-item v-for="item in items" :key="item.name" :to="item.to" :exact="item.exact">
      {{ item.name }}
    </b-nav-item>
  </b-nav>
</template>

<script lang="ts">
import bNav from 'bootstrap-vue/es/components/nav/nav';
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
import { Component, Prop, Vue } from 'vue-property-decorator';

import SubMenuItem from '@/interfaces/SubMenuItem';

@Component({
  components: {
    bNav,
    bNavItem,
  },
})
export default class SubMenu extends Vue {
  @Prop({ type: Array })
  private items!: SubMenuItem[];
}
</script>

<style lang="scss" scoped>
.nav {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent);
  letter-spacing: 0.2rem;

  .nav-item {
    position: relative;
    text-transform: uppercase;

    .nav-link {
      color: $gray-500;

      @include hover-focus {
        color: $gray-300;
      }

      &.active {
        color: $white;
      }
    }
  }

  .nav-item + .nav-item {
    padding-left: ($spacer * 1.5);
  }

  .nav-item + .nav-item::before {
    color: $gray-500;
    content: '/';
    position: absolute;
    left: 0;
    padding: ($spacer / 2);
  }
}
</style>
