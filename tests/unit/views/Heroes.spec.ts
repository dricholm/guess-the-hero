import { mount } from '@vue/test-utils';
import * as heroesData from 'dotaconstants/build/heroes.json';

import Hero from '@/interfaces/Hero';
import Heroes from '@/views/Heroes.vue';

describe('Heroes.vue', () => {
  it('should cards for each attribute', () => {
    const wrapper = mount(Heroes);

    const titles = wrapper.findAll('div.card-header');

    expect(titles.length).toBe(3);
    expect(titles.at(0).text()).toBe('Strength');
    expect(titles.at(1).text()).toBe('Agility');
    expect(titles.at(2).text()).toBe('Intelligence');
  });

  it('should show strength heroes', () => {
    const wrapper = mount(Heroes);

    const bodies = wrapper.findAll('div.card-body');

    expect(bodies.length).toBe(3);

    const imgs = bodies.at(0).findAll('img');

    const strHeroes = Object.values<Hero>(heroesData)
      .filter((hero: Hero) => hero.primary_attr === 'str')
      .sort((a: Hero, b: Hero) => {
        if (a.localized_name < b.localized_name) {
          return -1;
        } else if (a.localized_name > b.localized_name) {
          return 1;
        } else {
          return 0;
        }
      });

    expect(imgs.length).toBe(strHeroes.length);

    strHeroes.forEach((hero: Hero, index: number) => {
      expect(imgs.at(index).attributes().src).toContain(hero.name);
    });
  });

  it('should show agility heroes', () => {
    const wrapper = mount(Heroes);

    const bodies = wrapper.findAll('div.card-body');

    expect(bodies.length).toBe(3);

    const imgs = bodies.at(1).findAll('img');

    const agiHeroes = Object.values<Hero>(heroesData)
      .filter((hero: Hero) => hero.primary_attr === 'agi')
      .sort((a: Hero, b: Hero) => {
        if (a.localized_name < b.localized_name) {
          return -1;
        } else if (a.localized_name > b.localized_name) {
          return 1;
        } else {
          return 0;
        }
      });

    expect(imgs.length).toBe(agiHeroes.length);

    agiHeroes.forEach((hero: Hero, index: number) => {
      expect(imgs.at(index).attributes().src).toContain(hero.name);
    });
  });

  it('should show intelligence heroes', () => {
    const wrapper = mount(Heroes);

    const bodies = wrapper.findAll('div.card-body');

    expect(bodies.length).toBe(3);

    const imgs = bodies.at(2).findAll('img');

    const intHeroes = Object.values<Hero>(heroesData)
      .filter((hero: Hero) => hero.primary_attr === 'int')
      .sort((a: Hero, b: Hero) => {
        if (a.localized_name < b.localized_name) {
          return -1;
        } else if (a.localized_name > b.localized_name) {
          return 1;
        } else {
          return 0;
        }
      });

    expect(imgs.length).toBe(intHeroes.length);

    intHeroes.forEach((hero: Hero, index: number) => {
      expect(imgs.at(index).attributes().src).toContain(hero.name);
    });
  });
});
