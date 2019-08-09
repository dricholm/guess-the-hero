import { mount, shallowMount } from '@vue/test-utils';

import Stats from '@/components/game/Stats.vue';
import { GameStats } from '@/store/game/types';

describe('Stats.vue', () => {
  it('should show card headers', () => {
    const defaultStats: GameStats = {
      assists: 0,
      avgMmr: 0,
      backpack0: 0,
      backpack1: 0,
      backpack2: 0,
      deaths: 0,
      denies: 0,
      duration: 0,
      gold: 0,
      goldSpent: 0,
      gpm: 0,
      heroDamage: 0,
      heroHealing: 0,
      heroId: 0,
      isRoaming: null,
      item0: 0,
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      kills: 0,
      lane: 0,
      laneRole: 0,
      lastHits: 0,
      level: 0,
      matchId: 0,
      patch: '',
      playerSlot: 0,
      radiantWin: true,
      roshansKilled: 0,
      stuns: 0,
      teamfightParticipation: 0,
      towerDamage: 0,
      towersKilled: 0,
      xpm: 0,
    };

    const wrapper = shallowMount(Stats, {
      propsData: {
        stats: defaultStats,
      },
    });

    const cardHeaders = wrapper.findAll({ name: 'Card' });

    expect(cardHeaders.length).toBe(5);
    expect(cardHeaders.at(0).attributes().header).toBe('Hero stats');
    expect(cardHeaders.at(1).attributes().header).toBe('Economy');
    expect(cardHeaders.at(2).attributes().header).toBe('Damage and heal');
    expect(cardHeaders.at(3).attributes().header).toBe('Position');
    expect(cardHeaders.at(4).attributes().header).toBe('Match');
  });

  it('should show stats', () => {
    const defaultStats: GameStats = {
      assists: 0,
      avgMmr: 0,
      backpack0: 0,
      backpack1: 0,
      backpack2: 0,
      deaths: 0,
      denies: 0,
      duration: 610,
      gold: 0,
      goldSpent: 0,
      gpm: 0,
      heroDamage: 0,
      heroHealing: 0,
      heroId: 0,
      isRoaming: null,
      item0: 0,
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      kills: 0,
      lane: 0,
      laneRole: 0,
      lastHits: 0,
      level: 0,
      matchId: 0,
      patch: '7.18',
      playerSlot: 0,
      radiantWin: true,
      roshansKilled: 0,
      stuns: 0,
      teamfightParticipation: 0,
      towerDamage: 0,
      towersKilled: 0,
      xpm: 0,
    };

    const wrapper = mount(Stats, {
      propsData: {
        stats: defaultStats,
      },
    });

    const statToggle = wrapper.findAll('.stat-toggle');
    const statValue = wrapper.findAll('.stat-value');

    expect(statToggle.length).toBe(25);
    expect(statValue.length).toBe(25);

    expect(statToggle.at(0).text()).toBe('Level');
    expect(statValue.at(0).text()).toBe(defaultStats.level.toString());
    expect(statToggle.at(1).text()).toBe('Kills');
    expect(statValue.at(1).text()).toBe(defaultStats.kills.toString());
    expect(statToggle.at(2).text()).toBe('Deaths');
    expect(statValue.at(2).text()).toBe(defaultStats.deaths.toString());
    expect(statToggle.at(3).text()).toBe('Assists');
    expect(statValue.at(3).text()).toBe(defaultStats.assists.toString());
    expect(statToggle.at(4).text()).toBe('Last hits');
    expect(statValue.at(4).text()).toBe(defaultStats.lastHits.toString());
    expect(statToggle.at(5).text()).toBe('Denies');
    expect(statValue.at(5).text()).toBe(defaultStats.denies.toString());
    expect(statToggle.at(6).text()).toBe('Roshan kills');
    expect(statValue.at(6).text()).toBe(defaultStats.roshansKilled.toString());
    expect(statToggle.at(7).text()).toBe('Stun duration');
    expect(statValue.at(7).text()).toBe(`${defaultStats.stuns} sec`);
    expect(statToggle.at(8).text()).toBe('Teamfight participation');
    expect(statValue.at(8).text()).toBe(
      `${defaultStats.teamfightParticipation}%`,
    );
    expect(statToggle.at(9).text()).toBe('Gold');
    expect(statValue.at(9).text()).toBe(defaultStats.gold.toString());
    expect(statToggle.at(10).text()).toBe('Gold spent');
    expect(statValue.at(10).text()).toBe(defaultStats.goldSpent.toString());
    expect(statToggle.at(11).text()).toBe('GPM');
    expect(statValue.at(11).text()).toBe(defaultStats.gpm.toString());
    expect(statToggle.at(12).text()).toBe('XPM');
    expect(statValue.at(12).text()).toBe(defaultStats.xpm.toString());
    expect(statToggle.at(13).text()).toBe('Hero damage');
    expect(statValue.at(13).text()).toBe(defaultStats.heroDamage.toString());
    expect(statToggle.at(14).text()).toBe('Hero heal');
    expect(statValue.at(14).text()).toBe(defaultStats.heroHealing.toString());
    expect(statToggle.at(15).text()).toBe('Tower damage');
    expect(statValue.at(15).text()).toBe(defaultStats.towerDamage.toString());
    expect(statToggle.at(16).text()).toBe('Towers destroyed');
    expect(statValue.at(16).text()).toBe(defaultStats.towersKilled.toString());
    expect(statToggle.at(17).text()).toBe('Team');
    expect(statValue.at(17).text()).toBe('Radiant');
    expect(statToggle.at(18).text()).toBe('Roaming');
    expect(statValue.at(18).text()).toBe('No');
    expect(statToggle.at(19).text()).toBe('Lane');
    expect(statValue.at(19).text()).toBe('Unknown');
    expect(statToggle.at(20).text()).toBe('Role');
    expect(statValue.at(20).text()).toBe('Unknown');
    expect(statToggle.at(21).text()).toBe('Average MMR');
    expect(statValue.at(21).text()).toBe(defaultStats.avgMmr.toString());
    expect(statToggle.at(22).text()).toBe('Duration');
    expect(statValue.at(22).text()).toBe('10:10');
    expect(statToggle.at(23).text()).toBe('Patch');
    expect(statValue.at(23).text()).toBe(defaultStats.patch);
    expect(statToggle.at(24).text()).toBe('Result');
    expect(statValue.at(24).text()).toBe('Win');
  });

  it('should show parsed stats', () => {
    const defaultStats: GameStats = {
      assists: 0,
      avgMmr: 6502,
      backpack0: 0,
      backpack1: 0,
      backpack2: 0,
      deaths: 0,
      denies: 0,
      duration: 610,
      gold: 1230,
      goldSpent: 5654,
      gpm: 1001,
      heroDamage: 65723,
      heroHealing: 5613,
      heroId: 0,
      isRoaming: true,
      item0: 0,
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      kills: 0,
      lane: 2,
      laneRole: 1,
      lastHits: 0,
      level: 0,
      matchId: 0,
      patch: '7.18',
      playerSlot: 129,
      radiantWin: false,
      roshansKilled: 0,
      stuns: 12,
      teamfightParticipation: 0.87,
      towerDamage: 1678,
      towersKilled: 0,
      xpm: 800,
    };

    const wrapper = mount(Stats, {
      propsData: {
        stats: defaultStats,
      },
    });

    const statValue = wrapper.findAll('.stat-value');

    expect(statValue.length).toBe(25);

    expect(statValue.at(8).text()).toBe(`87%`);
    expect(statValue.at(9).text()).toBe('1,230');
    expect(statValue.at(10).text()).toBe('5,654');
    expect(statValue.at(11).text()).toBe('1,001');
    expect(statValue.at(12).text()).toBe('800');
    expect(statValue.at(13).text()).toBe('65,723');
    expect(statValue.at(14).text()).toBe('5,613');
    expect(statValue.at(15).text()).toBe('1,678');
    expect(statValue.at(17).text()).toBe('Dire');
    expect(statValue.at(18).text()).toBe('Yes');
    expect(statValue.at(19).text()).toBe('Middle');
    expect(statValue.at(20).text()).toBe('Safe');
  });
});
