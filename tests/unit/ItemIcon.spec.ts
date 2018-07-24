import { shallowMount } from '@vue/test-utils';

import ItemIcon from '@/components/ItemIcon.vue';

describe('ItemIcon.vue', () => {
  it('should show Blink Dagger', () => {
    const wrapper = shallowMount(ItemIcon, {
      propsData: { id: 1 },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Blink Dagger');
    expect(img.attributes().src).toContain('blink');
  });

  it('should show recipe', () => {
    const wrapper = shallowMount(ItemIcon, {
      propsData: { id: 35 },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Magic Wand Recipe');
    expect(img.attributes().src).toContain('recipe');
  });
});
