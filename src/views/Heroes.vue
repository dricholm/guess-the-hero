<template>
  <div class="container">
    <h1>Heroes</h1>

    <HeroList title="Strength" :filter="attributeHeroes('str')" type="portrait"/>
    <HeroList title="Agility" :filter="attributeHeroes('agi')" type="portrait"/>
    <HeroList title="Intelligence" :filter="attributeHeroes('int')" type="portrait"/>
  </div>
</template>

<script lang="ts">
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Vue } from 'vue-property-decorator';

import HeroList from '@/components/HeroList.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    HeroList,
  },
})
export default class Heroes extends Vue {
  private attributeHeroes(attribute: string) {
    return (data: Hero) => data.primary_attr === attribute;
  }
}
</script>
