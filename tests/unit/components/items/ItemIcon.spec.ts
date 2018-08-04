import { shallowMount } from '@vue/test-utils';

import ItemIcon from '@/components/items/ItemIcon.vue';

describe('ItemIcon.vue', () => {
  it('should show Blink Dagger', () => {
    const wrapper = shallowMount(ItemIcon, {
      propsData: { id: 1 },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Blink Dagger');
    expect(img.attributes().src).toBe('/img/items/blink.jpg');
    expect(img.classes()).not.toContain('backpack');
  });

  it('should show recipe', () => {
    const wrapper = shallowMount(ItemIcon, {
      propsData: { id: 35 },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Magic Wand Recipe');
    expect(img.attributes().src).toBe('/img/items/recipe.jpg');
    expect(img.classes()).not.toContain('backpack');
  });

  it('should show invalid item', () => {
    const wrapper = shallowMount(ItemIcon, {
      propsData: { id: 0 },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Empty');
    expect(img.attributes().src).toBe('/img/items/emptyitembg.jpg');
    expect(img.classes()).not.toContain('backpack');
  });

  it('should show backpack item', () => {
    const wrapper = shallowMount(ItemIcon, {
      propsData: {
        backpack: true,
        id: 1,
      },
    });

    const img = wrapper.find('img');

    expect(img.classes()).toContain('backpack');
  });
});
