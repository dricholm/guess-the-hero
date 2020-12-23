import { shallowMount } from '@vue/test-utils';

import HeroIcon from '@/components/heroes/HeroIcon.vue';

describe('HeroIcon.vue', () => {
  it('should show Anti-Mage', () => {
    const wrapper = shallowMount(HeroIcon, {
      attachToDocument: true,
      propsData: { id: 1 },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Anti-Mage');
    expect(img.attributes().src).toBe(
      `${process.env.BASE_URL}img/heroes/antimage.jpg`,
    );
    expect(img.classes()).toContain('icon');
    expect(img.classes()).not.toContain('portrait');
  });
});
