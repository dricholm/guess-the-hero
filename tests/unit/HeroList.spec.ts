import { shallowMount } from '@vue/test-utils';

import HeroList from '@/components/HeroList.vue';
import Hero from '@/interfaces/Hero';

describe('HeroList.vue', () => {
  it('should show all heroes', () => {
    const wrapper = shallowMount(HeroList);

    const title = wrapper.find('h2');
    const list = wrapper.findAll({ name: 'HeroIcon' });

    expect(title.exists()).toBe(false);
    expect(+list.at(0).attributes().id).toBe(102);
    expect(+list.at(1).attributes().id).toBe(73);
    expect(list.length).toBe(115);
  });

  it('should show one hero', () => {
    const wrapper = shallowMount(HeroList, {
      propsData: {
        filter: (data: Hero) => data.localized_name === 'Techies',
        title: 'List title',
      },
    });

    const title = wrapper.find('h2');
    const list = wrapper.findAll({ name: 'HeroIcon' });

    expect(title.text()).toBe('List title');
    expect(+list.at(0).attributes().id).toBe(105);
    expect(list.length).toBe(1);
  });
});
