<template>
  <div>
    <SubMenu :items="subMenu"/>

    <router-view/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SubMenu from '@/components/core/SubMenu.vue';
import SubMenuItem from '@/interfaces/SubMenuItem';

@Component({
  components: {
    SubMenu,
  },
})
export default class Play extends Vue {
  get subMenu(): SubMenuItem[] {
    return [
      { exact: true, name: 'Play', to: { name: 'game' } },
      { name: 'Settings', to: { name: 'settings' } },
    ];
  }
}
</script>
