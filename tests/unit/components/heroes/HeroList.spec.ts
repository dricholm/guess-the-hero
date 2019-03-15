import { shallowMount } from '@vue/test-utils';

import HeroList from '@/components/heroes/HeroList.vue';
import Hero from '@/interfaces/Hero';

describe('HeroList.vue', () => {
  it('should show all heroes', () => {
    const wrapper = shallowMount(HeroList);

    const list = wrapper.findAll({ name: 'HeroIcon' });

    expect(list.length).toBe(117);
    expect(+list.at(0).attributes().id).toBe(102);
    expect(+list.at(1).attributes().id).toBe(73);
  });

  it('should show one hero', () => {
    const wrapper = shallowMount(HeroList, {
      propsData: {
        filter: (data: Hero) => data.localized_name === 'Techies',
      },
    });

    const list = wrapper.findAll({ name: 'HeroIcon' });

    expect(list.length).toBe(1);
    expect(+list.at(0).attributes().id).toBe(105);
  });
});
