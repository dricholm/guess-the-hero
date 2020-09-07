import Inventory from '@/components/game/Inventory.vue';
import ItemIcon from '@/components/items/ItemIcon.vue';
import { shallowMount } from '@vue/test-utils';

describe('Inventory.vue', () => {
  it('should show items', () => {
    const wrapper = shallowMount(Inventory, {
      propsData: {
        backpack: [10, 0, 0],
        neutral: 0,
        inventory: [1, 133, 0, 0, 0, 0],
      },
    });

    const items = wrapper.findAllComponents(ItemIcon);

    expect(items.length).toBe(10);
    expect(items.at(0).attributes().id).toBe('1');
    expect(items.at(0).attributes().backpack).toBeUndefined();
    expect(items.at(1).attributes().id).toBe('133');
    expect(items.at(1).attributes().backpack).toBeUndefined();
    expect(items.at(2).attributes().id).toBe('0');
    expect(items.at(2).attributes().backpack).toBeUndefined();
    expect(items.at(3).attributes().id).toBe('0');
    expect(items.at(3).attributes().backpack).toBeUndefined();
    expect(items.at(4).attributes().id).toBe('0');
    expect(items.at(4).attributes().backpack).toBeUndefined();
    expect(items.at(5).attributes().id).toBe('0');
    expect(items.at(5).attributes().backpack).toBeUndefined();
    expect(items.at(6).attributes().id).toBe('0');
    expect(items.at(6).attributes().neutral).toBeDefined();
    expect(items.at(7).attributes().id).toBe('10');
    expect(items.at(7).attributes().backpack).toBe('true');
    expect(items.at(8).attributes().id).toBe('0');
    expect(items.at(8).attributes().backpack).toBe('true');
    expect(items.at(9).attributes().id).toBe('0');
    expect(items.at(9).attributes().backpack).toBe('true');
  });
});
