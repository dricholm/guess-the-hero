<template>
  <div>
    <h1>Heroes</h1>

    <HeroIcon :id="n" v-for="n in 113" :key="n" type="portrait"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HeroIcon from '@/components/HeroIcon.vue';

@Component({
  components: {
    HeroIcon,
  },
})
export default class Heroes extends Vue {}
</script>
