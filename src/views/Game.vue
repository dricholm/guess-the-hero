<template>
  <div class="container my-5">
    <loader :isLoading="isLoading" :error="error" v-if="isLoading || error"/>

    <card header="Error" v-if="error" class="mb-3">
      Could not fetch match data.
    </card>

    <card header="Result" v-if="submitted" class="mb-3">
      <result :correct="correct" :matchId="currentMatch.matchId" :heroId="currentMatch.heroId" @next="onNext" />
    </card>

    <div class="game-layout" v-if="!isLoading && !error">
      <card header="Inventory" class="inventory">
        <Inventory class="mx-auto" :inventory="inventory" :backpack="backpack"/>
      </card>

      <card header="Hero" class="hero">
        <hero-picker class="hero" :selectedHero="selectedHero" :disabled="isGameStopped" @filter="onFilter" @select="onSelectHero" @pick="onPick"/>
      </card>

      <card header="Heroes" class="heroes">
        <HeroList small :filter="heroFilter()" @click="onSelectHero"/>
      </card>

      <stats :stats="currentMatch" class="stats"/>
    </div>
  </div>
</template>

<script lang="ts">
import heroes from 'dotaconstants/build/heroes.json';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Card from '@/components/core/Card.vue';
import Loader from '@/components/core/Loader.vue';
import HeroPicker from '@/components/game/HeroPicker.vue';
import Inventory from '@/components/game/Inventory.vue';
import Result from '@/components/game/Result.vue';
import Stats from '@/components/game/Stats.vue';
import HeroIcon from '@/components/heroes/HeroIcon.vue';
import HeroList from '@/components/heroes/HeroList.vue';
import Hero from '@/interfaces/Hero';
import { GameStats } from '@/store/game/types';
import SettingsState from '@/store/settings/types';

@Component({
  components: {
    Card,
    HeroIcon,
    HeroList,
    HeroPicker,
    Inventory,
    Loader,
    Result,
    Stats,
  },
})
export default class Game extends Vue {
  @Action('queryMatch', { namespace: 'game' })
  private queryMatch!: () => void;
  @Getter('error', { namespace: 'game' })
  private error!: boolean;
  @Getter('isLoading', { namespace: 'game' })
  private isLoading!: boolean;
  @Getter('currentMatch', { namespace: 'game' })
  private currentMatch!: GameStats;

  private selectedHero: number = 0;
  private filterHero: string = '';
  private submitted: boolean = false;

  private mounted() {
    if (this.currentMatch.matchId === 0) {
      this.queryMatch();
    }
  }

  private get correct(): boolean {
    return this.selectedHero === this.currentMatch.heroId;
  }

  private get inventory(): number[] {
    return [
      this.currentMatch.item0,
      this.currentMatch.item1,
      this.currentMatch.item2,
      this.currentMatch.item3,
      this.currentMatch.item4,
      this.currentMatch.item5,
    ];
  }

  private get backpack(): number[] {
    return [
      this.currentMatch.backpack0,
      this.currentMatch.backpack1,
      this.currentMatch.backpack2,
    ];
  }

  private get isGameStopped(): boolean {
    return this.submitted || this.error || this.isLoading;
  }

  private onFilter(filter: string) {
    this.filterHero = filter;
  }

  private heroFilter() {
    return (data: Hero) =>
      data.localized_name.toLowerCase().indexOf(this.filterHero.toLowerCase()) >
      -1;
  }

  private onSelectHero(heroId: number) {
    if (this.isGameStopped) {
      return;
    }
    this.selectedHero = heroId;
  }

  private onPick(heroId: number) {
    if (this.isGameStopped) {
      return;
    }
    this.submitted = true;
  }

  private onNext() {
    this.queryMatch();
    this.submitted = false;
    this.selectedHero = 0;
    this.filterHero = '';
  }
}
</script>

<style lang="scss" scoped>
.game-layout {
  display: grid;
  grid-template-areas:
    'inventory'
    'hero'
    'heroes'
    'stats';
  grid-template-columns: 1fr;
  grid-template-rows:
    auto
    auto
    auto
    auto;
  grid-gap: $spacer;

  @include media-breakpoint-up(lg) {
    grid-template-areas:
      'inventory hero'
      'heroes heroes'
      'stats stats';
    grid-template-columns: 1fr 1fr;
    grid-template-rows:
      auto
      auto
      auto;
  }

  .inventory {
    grid-area: inventory;
  }

  .hero {
    grid-area: hero;
  }

  .heroes {
    grid-area: heroes;
  }

  .stats {
    grid-area: stats;
  }
}
</style>
