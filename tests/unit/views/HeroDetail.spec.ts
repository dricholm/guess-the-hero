import { mount } from '@vue/test-utils';
import * as heroes from 'dotaconstants/build/heroes.json';

import Hero from '@/interfaces/Hero';
import HeroDetail from '@/views/HeroDetail.vue';

describe('HeroDetail.vue', () => {
  it('should show error', () => {
    const $route = { params: { id: 999 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const titles = wrapper.find('div.card-header');

    expect(titles.text()).toBe('Error');
  });

  it('should show cards', () => {
    const $route = { params: { id: 1 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const titles = wrapper.findAll('div.card-header');

    expect(titles.at(0).text()).toBe('Overview');
    expect(titles.at(1).text()).toBe('Stats');
    expect(titles.at(2).text()).toBe('Links');
  });

  it('should show previous and next hero', () => {
    const $route = { params: { id: 1 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const heroLinks = wrapper.findAll('.hero-link');

    expect(heroLinks.length).toBe(2);
  });

  it('should show next hero', () => {
    const $route = { params: { id: 102 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const heroLinks = wrapper.findAll('.hero-link');
    expect(heroLinks.length).toBe(1);
    const next = wrapper.find('.hero-link.next');
    expect(next.exists()).toBe(true);
  });

  it('should show prev hero', () => {
    const $route = { params: { id: 22 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const heroLinks = wrapper.findAll('.hero-link');
    expect(heroLinks.length).toBe(1);
    const prev = wrapper.find('.hero-link.prev');
    expect(prev.exists()).toBe(true);
  });

  it('should show links', () => {
    const $route = { params: { id: 39 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const links = wrapper.findAll('.links a');
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toBe('DotaBuff');
    expect(links.at(0).attributes().href).toBe(
      'https://dotabuff.com/heroes/queen-of-pain'
    );
    expect(links.at(1).text()).toBe('OpenDota');
    expect(links.at(1).attributes().href).toBe(
      'https://opendota.com/heroes/39'
    );
  });

  it('should show overview', () => {
    const $route = { params: { id: 1 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const cardBody = wrapper.find('.overview .card-body');
    expect(cardBody.contains('img')).toBe(true);

    const image = wrapper.find('.overview img');
    expect(image.attributes().src).toContain(
      'heroes/npc_dota_hero_antimage.jpg'
    );
  });

  it('should show stats', () => {
    const $route = { params: { id: 1 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const title = wrapper.findAll('.stats .desc-term');
    const stats = wrapper.findAll('.stats .desc-value');
    expect(title.length).toBe(23);
    expect(stats.length).toBe(23);

    const amStats: Hero = heroes[1];

    expect(title.at(0).text()).toBe('Primary attribute');
    expect(stats.at(0).text()).toBe(amStats.primary_attr);
    expect(title.at(1).text()).toBe('Attack type');
    expect(stats.at(1).text()).toBe(amStats.attack_type);
    expect(title.at(2).text()).toBe('Roles');
    expect(stats.at(2).text()).toBe(amStats.roles.join(', '));
    expect(title.at(3).text()).toBe('Base health');
    expect(stats.at(3).text()).toBe(amStats.base_health.toString());
    expect(title.at(4).text()).toBe('Base health regen');
    expect(stats.at(4).text()).toBe(amStats.base_health_regen.toString());
    expect(title.at(5).text()).toBe('Base mana');
    expect(stats.at(5).text()).toBe(amStats.base_mana.toString());
    expect(title.at(6).text()).toBe('Base mana regen');
    expect(stats.at(6).text()).toBe(amStats.base_mana_regen.toString());
    expect(title.at(7).text()).toBe('Base armor');
    expect(stats.at(7).text()).toBe(amStats.base_armor.toString());
    expect(title.at(8).text()).toBe('Base magic resistance');
    expect(stats.at(8).text()).toBe(amStats.base_mr.toString());
    expect(title.at(9).text()).toBe('Base attack');
    expect(stats.at(9).text()).toBe(
      `${amStats.base_attack_min} - ${amStats.base_attack_max}`
    );
    expect(title.at(10).text()).toBe('Base STR');
    expect(stats.at(10).text()).toBe(amStats.base_str.toString());
    expect(title.at(11).text()).toBe('Base AGI');
    expect(stats.at(11).text()).toBe(amStats.base_agi.toString());
    expect(title.at(12).text()).toBe('Base INT');
    expect(stats.at(12).text()).toBe(amStats.base_int.toString());
    expect(title.at(13).text()).toBe('STR gain');
    expect(stats.at(13).text()).toBe(amStats.str_gain.toString());
    expect(title.at(14).text()).toBe('AGI gain');
    expect(stats.at(14).text()).toBe(amStats.agi_gain.toString());
    expect(title.at(15).text()).toBe('INT gain');
    expect(stats.at(15).text()).toBe(amStats.int_gain.toString());
    expect(title.at(16).text()).toBe('Attack range');
    expect(stats.at(16).text()).toBe(amStats.attack_range.toString());
    expect(title.at(17).text()).toBe('Projectile speed');
    expect(stats.at(17).text()).toBe(amStats.projectile_speed.toString());
    expect(title.at(18).text()).toBe('Attack rate');
    expect(stats.at(18).text()).toBe(amStats.attack_rate.toString());
    expect(title.at(19).text()).toBe('Move speed');
    expect(stats.at(19).text()).toBe(amStats.move_speed.toString());
    expect(title.at(20).text()).toBe('Turn rate');
    expect(stats.at(20).text()).toBe(amStats.turn_rate.toString());
    expect(title.at(21).text()).toBe('Captains mode enabled');
    expect(stats.at(21).text()).toBe(amStats.cm_enabled ? 'Yes' : 'No');
    expect(title.at(22).text()).toBe('Legs');
    expect(stats.at(22).text()).toBe(amStats.legs.toString());
  });
});
