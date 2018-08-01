import { shallowMount } from '@vue/test-utils';

import ItemList from '@/components/items/ItemList.vue';

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
    expect(list.length).toBe(2);
    expect(+list.at(0).attributes().id).toBe(1);
    expect(+list.at(1).attributes().id).toBe(133);
  });

  it('should not show anything', () => {
    const wrapper = shallowMount(ItemList);

    const title = wrapper.find('h2');
    const list = wrapper.findAll({ name: 'ItemIcon' });

    expect(title.exists()).toBe(false);
    expect(list.length).toBe(0);
  });

  it('should show backpack items', () => {
    const wrapper = shallowMount(ItemList, {
      propsData: {
        backpack: true,
        ids: [1],
        title: 'Backpack',
      },
    });

    const list = wrapper.findAll({ name: 'ItemIcon' });

    expect(list.at(0).attributes().backpack).toBe('true');
  });

  it('should include spacing', () => {
    const wrapper = shallowMount(ItemList, {
      propsData: {
        ids: [1, 2],
        spacing: true,
      },
    });

    const list = wrapper.findAll({ name: 'ItemIcon' });

    expect(list.at(0).classes()).toContain('mr-2');
    expect(list.at(0).classes()).toContain('mb-2');
    expect(list.at(1).classes()).toContain('mr-2');
    expect(list.at(1).classes()).toContain('mb-2');
  });
});
