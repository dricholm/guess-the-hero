<template>
  <div class="stats-layout">
    <card header="Hero stats" class="hero-stats" body-class="flex-column justify-content-center">
      <toggleButton title="Level" :value="stats.level"/>
      <toggleButton title="Kills" :value="stats.kills"/>
      <toggleButton title="Deaths" :value="stats.deaths"/>
      <toggleButton title="Assists" :value="stats.assists"/>
      <toggleButton title="Last hits" :value="stats.lastHits"/>
      <toggleButton title="Denies" :value="stats.denies"/>
      <toggleButton title="Roshan kills" :value="stats.roshansKilled"/>
      <toggleButton title="Stun duration" :value="stuns"/>
      <toggleButton title="Teamfight participation" :value="teamfight"/>
    </card>

    <card header="Economy" class="economy-stats" body-class="flex-column justify-content-center">
      <toggleButton title="Gold" :value="formatNumber(stats.gold)"/>
      <toggleButton title="Gold spent" :value="formatNumber(stats.goldSpent)"/>
      <toggleButton title="GPM" :value="formatNumber(stats.gpm)"/>
      <toggleButton title="XPM" :value="formatNumber(stats.xpm)"/>
    </card>

    <card header="Damage and heal" class="damage-stats" body-class="flex-column justify-content-center">
      <toggleButton title="Hero damage" :value="formatNumber(stats.heroDamage)"/>
      <toggleButton title="Hero heal" :value="formatNumber(stats.heroHealing)"/>
      <toggleButton title="Tower damage" :value="formatNumber(stats.towerDamage)"/>
      <toggleButton title="Towers destroyed" :value="stats.towersKilled"/>
    </card>

    <card header="Position" class="position-stats" body-class="flex-column justify-content-center">
      <toggleButton title="Team" :value="team"/>
      <toggleButton title="Roaming" :value="roaming"/>
      <toggleButton title="Lane" :value="lane"/>
      <toggleButton title="Role" :value="laneRole"/>
    </card>

    <card header="Match" class="match-stats" body-class="flex-column justify-content-center">
      <toggleButton title="Average MMR" :value="stats.avgMmr"/>
      <toggleButton title="Duration" :value="duration"/>
      <toggleButton title="Patch" :value="stats.patch"/>
      <toggleButton title="Result" :value="result"/>
    </card>
  </div>
</template>

<script lang="ts">
import Card from '@/components/core/Card.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import ToggleButton from '@/components/game/ToggleButton.vue';
import { GameStats } from '@/store/game/types';

@Component({
  components: {
    Card,
    ToggleButton,
  },
})
export default class Game extends Vue {
  @Prop() private stats!: GameStats;

  private get duration(): string {
    const date = new Date(0);
    date.setSeconds(this.stats.duration);
    return date
      .toISOString()
      .substr(11, 8)
      .replace(/^[0:]+/, '');
  }

  private get lane(): string {
    switch (this.stats.lane) {
      case 1:
        return 'Bottom';

      case 2:
        return 'Middle';

      case 3:
        return 'Top';

      case 4:
        return 'Radiant jungle';

      case 5:
        return 'Dire jungle';

      default:
        return 'Unknown';
    }
  }

  private get laneRole(): string {
    switch (this.stats.laneRole) {
      case 1:
        return 'Safe';

      case 2:
        return 'Middle';

      case 3:
        return 'Off';

      case 4:
        return 'Jungle';

      default:
        return 'Unknown';
    }
  }

  private get team(): string {
    return this.stats.playerSlot <= 128 ? 'Radiant' : 'Dire';
  }

  private get stuns(): string {
    return `${Math.round(this.stats.stuns)} sec`;
  }

  private get teamfight(): string {
    return `${Math.round(this.stats.teamfightParticipation * 100)}%`;
  }

  private get roaming(): string {
    return this.stats.isRoaming === null
      ? 'No'
      : this.stats.isRoaming ? 'Yes' : 'No';
  }

  private get result(): string {
    if (
      (this.stats.radiantWin && this.stats.playerSlot <= 128) ||
      (!this.stats.radiantWin && this.stats.playerSlot >= 128)
    ) {
      return 'Win';
    }
    return 'Lose';
  }

  private formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
</script>

<style lang="scss" scoped>
.stats-layout {
  display: grid;
  grid-template-areas:
    'hero-stats'
    'economy-stats'
    'damage-stats'
    'position-stats'
    'match-stats';
  grid-template-columns: 1fr;
  grid-template-rows:
    auto
    auto
    auto
    auto
    auto;
  grid-gap: $spacer;

  @include media-breakpoint-up(lg) {
    grid-template-areas:
      'hero-stats economy-stats'
      'hero-stats damage-stats'
      'position-stats match-stats';
    grid-template-columns: 1fr 1fr;
    grid-template-rows:
      auto
      auto
      auto;
  }

  .hero-stats {
    grid-area: hero-stats;
  }

  .economy-stats {
    grid-area: economy-stats;
  }

  .damage-stats {
    grid-area: damage-stats;
  }

  .position-stats {
    grid-area: position-stats;
  }

  .match-stats {
    grid-area: match-stats;
  }
}
</style>
