import HeroIcon from '@/components/heroes/HeroIcon.vue';
import HeroList from '@/components/heroes/HeroList.vue';
import Hero from '@/interfaces/Hero';
import { shallowMount } from '@vue/test-utils';
import heroesJson from 'dotaconstants/build/heroes.json';

describe('HeroList.vue', () => {
  it('should show all heroes', () => {
    const wrapper = shallowMount(HeroList);

    const list = wrapper.findAllComponents(HeroIcon);

    expect(list.length).toBe(Object.values(heroesJson).length);
  });

  it('should show one hero', () => {
    const wrapper = shallowMount(HeroList, {
      propsData: {
        filter: (data: Hero) => data.localized_name === 'Techies',
      },
    });

    const list = wrapper.findAllComponents(HeroIcon);

    expect(list.length).toBe(1);
    expect(+list.at(0).attributes().id).toBe(105);
  });
});
