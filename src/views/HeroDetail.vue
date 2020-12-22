<template>
  <div class="container my-5 detail-layout" v-if="!error">
    <div class="navigation">
      <router-link
        v-if="previousHero"
        :to="{ name: 'heroDetail', params: { id: previousHero.id.toString() } }"
        class="hero-link prev"
        >{{ previousHero.localized_name }}</router-link
      >

      <router-link
        v-if="nextHero"
        :to="{ name: 'heroDetail', params: { id: nextHero.id.toString() } }"
        class="hero-link next"
        >{{ nextHero.localized_name }}</router-link
      >
    </div>

    <card header="Overview" class="overview">
      <div class="overview-content">
        <img :src="heroImage" :alt="hero.localized_name" class="hero-image" />
        <h2 class="overview-title">{{ hero.localized_name }}</h2>
      </div>
    </card>

    <card header="Stats" class="stats">
      <stat-list :stats="stats" />
    </card>

    <card header="Links" class="links">
      <ul class="sites">
        <li>
          <a
            :href="`https://dotabuff.com/heroes/${hero.localized_name
              .toLowerCase()
              .replace(/ /g, '-')}`"
            target="_blank"
            >DotaBuff</a
          >
        </li>
        <li>
          <a :href="`https://opendota.com/heroes/${hero.id}`" target="_blank"
            >OpenDota</a
          >
        </li>
      </ul>
    </card>
  </div>

  <div class="container my-5" v-else>
    <card header="Error">
      <div>
        <p>Hero was not found</p>
        <router-link :to="{ name: 'heroes' }">Go back to heroes</router-link>
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import heroesJson from 'dotaconstants/build/heroes.json';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

import Card from '@/components/core/Card.vue';
import StatList from '@/components/core/StatList.vue';
import Hero from '@/interfaces/Hero';

@Component({
  components: {
    Card,
    StatList,
  },
})
export default class HeroDetail extends Vue {
  @Watch('$route', { immediate: true })
  onRouteChange(to: RouteConfig, from: RouteConfig) {
    const baseTitle = 'Guess the Hero';
    document.title = `${
      this.hero?.localized_name ?? 'Hero not found'
    } - ${baseTitle}`;
  }

  private attributeOrder: { [attribute: string]: number } = {
    agi: 1,
    int: 2,
    str: 0,
  };

  private get error(): boolean {
    return !Object.prototype.hasOwnProperty.call(
      heroesJson,
      this.$route.params.id,
    );
  }

  private get hero(): Hero {
    return heroesJson[this.$route.params.id as keyof typeof heroesJson] as Hero;
  }

  private get heroIdList(): number[] {
    return Object.values<Hero>(heroesJson)
      .sort((a: Hero, b: Hero) => {
        if (
          this.attributeOrder[a.primary_attr] <
          this.attributeOrder[b.primary_attr]
        ) {
          return -1;
        } else if (
          this.attributeOrder[a.primary_attr] >
          this.attributeOrder[b.primary_attr]
        ) {
          return 1;
        } else {
          if (a.localized_name < b.localized_name) {
            return -1;
          } else if (a.localized_name > b.localized_name) {
            return 1;
          } else {
            return 0;
          }
        }
      })
      .map((hero: Hero) => hero.id);
  }

  private get currentIndex(): number {
    return this.heroIdList.findIndex(
      (value: number) => value === +this.$route.params.id,
    );
  }

  private get previousHero(): Hero | null {
    if (this.currentIndex === 0) {
      return null;
    }
    return heroesJson[
      this.heroIdList[
        this.currentIndex - 1
      ].toString() as keyof typeof heroesJson
    ];
  }

  private get nextHero(): Hero | null {
    if (this.currentIndex === this.heroIdList.length - 1) {
      return null;
    }
    return heroesJson[
      this.heroIdList[
        this.currentIndex + 1
      ].toString() as keyof typeof heroesJson
    ];
  }

  private get heroImage(): string {
    return `${process.env.BASE_URL}img/heroes/${this.hero.name}.jpg`;
  }

  private get stats(): Array<{ title: string; value: string | number }> {
    return [
      { title: 'Primary attribute', value: this.hero.primary_attr },
      { title: 'Attack type', value: this.hero.attack_type },
      { title: 'Roles', value: this.hero.roles.join(', ') },
      { title: 'Base health', value: this.hero.base_health },
      {
        title: 'Base health regen',
        value: this.hero.base_health_regen ? this.hero.base_health_regen : 0,
      },
      { title: 'Base mana', value: this.hero.base_mana },
      { title: 'Base mana regen', value: this.hero.base_mana_regen },
      { title: 'Base armor', value: this.hero.base_armor },
      { title: 'Base magic resistance', value: this.hero.base_mr },
      {
        title: 'Base attack',
        value: `${this.hero.base_attack_min} - ${this.hero.base_attack_max}`,
      },
      { title: 'Base STR', value: this.hero.base_str },
      { title: 'Base AGI', value: this.hero.base_agi },
      { title: 'Base INT', value: this.hero.base_int },
      { title: 'STR gain', value: this.hero.str_gain },
      { title: 'AGI gain', value: this.hero.agi_gain },
      { title: 'INT gain', value: this.hero.int_gain },
      { title: 'Attack range', value: this.hero.attack_range },
      { title: 'Projectile speed', value: this.hero.projectile_speed },
      { title: 'Attack rate', value: this.hero.attack_rate },
      { title: 'Move speed', value: this.hero.move_speed },
      { title: 'Turn rate', value: this.hero.turn_rate },
      {
        title: 'Captains mode enabled',
        value: this.hero.cm_enabled ? 'Yes' : 'No',
      },
      { title: 'Legs', value: this.hero.legs },
    ];
  }
}
</script>

<style lang="scss" scoped>
.detail-layout {
  display: grid;
  grid-gap: $spacer;
  grid-template-areas:
    'navigation'
    'overview'
    'stats'
    'links';
  grid-template-columns: 1fr;
  grid-template-rows:
    auto
    auto
    auto
    auto;

  @include media-breakpoint-up(lg) {
    grid-template-areas:
      'navigation navigation'
      'overview stats'
      'links stats'
      '. stats';
    grid-template-columns: 1fr 1fr;
    grid-template-rows:
      auto
      auto
      auto
      auto;
  }

  .navigation {
    align-items: stretch;
    display: flex;
    grid-area: navigation;
    justify-content: space-between;
    position: relative;
    min-height: 7rem;

    @include media-breakpoint-up(lg) {
      min-height: 0;
    }

    .hero-link {
      align-items: center;
      display: flex;
      flex: 1;
      font-size: $font-size-lg;
      padding: $spacer;
      text-transform: uppercase;

      &.prev {
        border-left: 3px solid $link-color;
      }

      &.next {
        border-right: 3px solid $link-color;
        justify-content: flex-end;
        text-align: right;
      }

      @include hover-focus {
        border-color: $link-hover-color;
        text-decoration: none;

        &.prev {
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent);
        }

        &.next {
          background: linear-gradient(270deg, rgba(0, 0, 0, 0.3), transparent);
        }
      }
    }
  }

  .overview {
    grid-area: overview;

    .overview-content {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;

      @include media-breakpoint-up(lg) {
        flex-direction: row;
      }

      .hero-image {
        box-shadow: $box-shadow;
        height: 72px;
        margin-bottom: $spacer;
        width: 128px;

        @include media-breakpoint-up(lg) {
          margin-bottom: 0;
          margin-right: $spacer;
        }
      }

      .overview-title {
        text-align: center;

        @include media-breakpoint-up(lg) {
          text-align: left;
        }
      }
    }
  }

  .stats {
    grid-area: stats;
  }

  .links {
    grid-area: links;

    .sites {
      font-size: $font-size-lg;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
