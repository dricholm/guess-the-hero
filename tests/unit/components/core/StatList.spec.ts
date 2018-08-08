import { shallowMount } from '@vue/test-utils';

import StatList from '@/components/core/StatList.vue';

describe('StatList.vue', () => {
  it('should show items', () => {
    const wrapper = shallowMount(StatList, {
      propsData: {
        stats: [
          { title: 'Title 1', value: 'Value 1' },
          { title: 'Second title', value: 'Second value' },
        ],
      },
    });

    const listItems = wrapper.findAll('li');
    expect(listItems.length).toBe(2);

    const titles = wrapper.findAll('.stat-title');
    expect(titles.length).toBe(2);
    expect(titles.at(0).text()).toBe('Title 1');
    expect(titles.at(1).text()).toBe('Second title');

    const values = wrapper.findAll('.stat-value');
    expect(values.at(0).text()).toBe('Value 1');
    expect(values.at(1).text()).toBe('Second value');
  });
});
