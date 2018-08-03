<template>
  <div class="container my-5">
    <card header="Strength" class="mb-3">
      <HeroList :filter="attributeHeroes('str')" type="portrait"/>
    </card>

    <card header="Agility" class="mb-3">
      <HeroList :filter="attributeHeroes('agi')" type="portrait"/>
    </card>

    <card header="Intelligence" class="mb-3">
      <HeroList :filter="attributeHeroes('int')" type="portrait"/>
    </card>
  </div>
</template>

<script lang="ts">
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Vue } from 'vue-property-decorator';

import Card from '@/components/core/Card.vue';
import HeroList from '@/components/heroes/HeroList.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    Card,
    HeroList,
  },
})
export default class Heroes extends Vue {
  private attributeHeroes(attribute: string) {
    return (data: Hero) => data.primary_attr === attribute;
  }
}
</script>
