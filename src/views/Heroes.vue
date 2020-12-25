<template>
  <div class="container my-5">
    <card
      v-for="collection in heroesByAttribute"
      :header="collection.title"
      :key="collection.title"
      class="mb-3"
    >
      <HeroList :filter="collection.filter" :isUrl="true" />
    </card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Card from '@/components/core/Card.vue';
import HeroList from '@/components/heroes/HeroList.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    Card,
    HeroList,
  },
  metaInfo: {
    meta: [
      { content: 'Learn all about the heroes of Dota 2.', name: 'description' },
    ],
    title: 'Heroes',
  },
})
export default class Heroes extends Vue {
  private get heroesByAttribute() {
    return [
      {
        filter: this.attributeHeroes('str'),
        title: 'Strength',
      },
      {
        filter: this.attributeHeroes('agi'),
        title: 'Agility',
      },
      {
        filter: this.attributeHeroes('int'),
        title: 'Intelligence',
      },
    ];
  }

  private attributeHeroes(attribute: string) {
    return (data: Hero) => data.primary_attr === attribute;
  }
}
</script>
