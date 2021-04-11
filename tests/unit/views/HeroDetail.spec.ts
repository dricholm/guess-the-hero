import Hero from '@/interfaces/Hero';
import HeroDetail from '@/views/HeroDetail.vue';
import { mount } from '@vue/test-utils';
import heroesJson from 'dotaconstants/build/heroes.json';

describe('HeroDetail.vue', () => {
  it('should show error if hero does not exist', () => {
    const $route = { params: { slug: 999 } };
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
    const $route = { params: { slug: 1 } };
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
    const $route = { params: { slug: 1 } };
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
    const $route = { params: { slug: 102 } };
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
    const $route = { params: { slug: 22 } };
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
    const $route = { params: { slug: 39 } };
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
      'https://dotabuff.com/heroes/queen-of-pain',
    );
    expect(links.at(1).text()).toBe('OpenDota');
    expect(links.at(1).attributes().href).toBe(
      'https://opendota.com/heroes/39',
    );
  });

  it('should show overview', () => {
    const $route = { params: { slug: 1 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const cardBody = wrapper.find('.overview .card-body');
    expect(cardBody.find('img').exists()).toBe(true);

    const image = wrapper.find('.overview img');
    expect(image.attributes().src).toContain('heroes/antimage.jpg');
  });

  it('should show stats', () => {
    const $route = { params: { slug: 1 } };
    const wrapper = mount(HeroDetail, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
    });

    const title = wrapper.findAll('.stats .stat-title');
    const stats = wrapper.findAll('.stats .stat-value');
    expect(title.length).toBe(23);
    expect(stats.length).toBe(23);

    const heroStats: Hero = heroesJson[1];

    expect(title.at(0).text()).toBe('Primary attribute');
    expect(stats.at(0).text()).toBe(heroStats.primary_attr);
    expect(title.at(1).text()).toBe('Attack type');
    expect(stats.at(1).text()).toBe(heroStats.attack_type);
    expect(title.at(2).text()).toBe('Roles');
    expect(stats.at(2).text()).toBe(heroStats.roles.join(', '));
    expect(title.at(3).text()).toBe('Base health');
    expect(stats.at(3).text()).toBe(heroStats.base_health.toString());
    expect(title.at(4).text()).toBe('Base health regen');
    expect(stats.at(4).text()).toBe(
      heroStats.base_health_regen ? heroStats.base_health_regen.toString() : '',
    );
    expect(title.at(5).text()).toBe('Base mana');
    expect(stats.at(5).text()).toBe(heroStats.base_mana.toString());
    expect(title.at(6).text()).toBe('Base mana regen');
    expect(stats.at(6).text()).toBe(heroStats.base_mana_regen.toString());
    expect(title.at(7).text()).toBe('Base armor');
    expect(stats.at(7).text()).toBe(heroStats.base_armor.toString());
    expect(title.at(8).text()).toBe('Base magic resistance');
    expect(stats.at(8).text()).toBe(heroStats.base_mr.toString());
    expect(title.at(9).text()).toBe('Base attack');
    expect(stats.at(9).text()).toBe(
      `${heroStats.base_attack_min} - ${heroStats.base_attack_max}`,
    );
    expect(title.at(10).text()).toBe('Base STR');
    expect(stats.at(10).text()).toBe(heroStats.base_str.toString());
    expect(title.at(11).text()).toBe('Base AGI');
    expect(stats.at(11).text()).toBe(heroStats.base_agi.toString());
    expect(title.at(12).text()).toBe('Base INT');
    expect(stats.at(12).text()).toBe(heroStats.base_int.toString());
    expect(title.at(13).text()).toBe('STR gain');
    expect(stats.at(13).text()).toBe(heroStats.str_gain.toString());
    expect(title.at(14).text()).toBe('AGI gain');
    expect(stats.at(14).text()).toBe(heroStats.agi_gain.toString());
    expect(title.at(15).text()).toBe('INT gain');
    expect(stats.at(15).text()).toBe(heroStats.int_gain.toString());
    expect(title.at(16).text()).toBe('Attack range');
    expect(stats.at(16).text()).toBe(heroStats.attack_range.toString());
    expect(title.at(17).text()).toBe('Projectile speed');
    expect(stats.at(17).text()).toBe(heroStats.projectile_speed.toString());
    expect(title.at(18).text()).toBe('Attack rate');
    expect(stats.at(18).text()).toBe(heroStats.attack_rate.toString());
    expect(title.at(19).text()).toBe('Move speed');
    expect(stats.at(19).text()).toBe(heroStats.move_speed.toString());
    expect(title.at(20).text()).toBe('Turn rate');
    expect(stats.at(20).text()).toBe(heroStats.turn_rate?.toString() ?? '?');
    expect(title.at(21).text()).toBe('Captains mode enabled');
    expect(stats.at(21).text()).toBe(heroStats.cm_enabled ? 'Yes' : 'No');
    expect(title.at(22).text()).toBe('Legs');
    expect(stats.at(22).text()).toBe(heroStats.legs.toString());
  });
});
