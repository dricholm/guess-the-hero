import { shallowMount } from '@vue/test-utils';

import Inventory from '@/components/game/Inventory.vue';

describe('Inventory.vue', () => {
  it('should show items', () => {
    const wrapper = shallowMount(Inventory, {
      propsData: {
        backpack: [0, 0, 0],
        inventory: [1, 133, 0, 0, 0, 0],
      },
    });

    const list = wrapper.findAll({ name: 'ItemList' });

    expect(list.length).toBe(2);
    expect(list.at(0).attributes().ids).toBe('1,133,0,0,0,0');
    expect(list.at(0).attributes().backpack).toBeUndefined();
    expect(list.at(0).attributes().spacing).toBe('');
    expect(list.at(1).attributes().ids).toBe('0,0,0');
    expect(list.at(1).attributes().backpack).toBe('');
    expect(list.at(1).attributes().spacing).toBe('');
  });
});
