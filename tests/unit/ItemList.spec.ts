import { shallowMount } from '@vue/test-utils';

import ItemList from '@/components/ItemList.vue';

describe('ItemList.vue', () => {
  it('should show items', () => {
    const wrapper = shallowMount(ItemList, {
      propsData: {
        ids: [1, 133],
        title: 'Item list',
      },
    });

    const title = wrapper.find('h2');
    const list = wrapper.findAll({ name: 'ItemIcon' });

    expect(title.text()).toBe('Item list');
    expect(+list.at(0).attributes().id).toBe(1);
    expect(+list.at(1).attributes().id).toBe(133);
    expect(list.length).toBe(2);
  });

  it('should not show anything', () => {
    const wrapper = shallowMount(ItemList);

    const title = wrapper.find('h2');
    const list = wrapper.findAll({ name: 'ItemIcon' });

    expect(title.exists()).toBe(false);
    expect(list.length).toBe(0);
  });
});
