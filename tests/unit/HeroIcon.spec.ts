import { shallowMount } from '@vue/test-utils';

import HeroIcon from '@/components/HeroIcon.vue';

describe('HeroIcon.vue', () => {
  it('should show Anti-Mage', () => {
    const wrapper = shallowMount(HeroIcon, {
      propsData: { id: 1 },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Anti-Mage');
    expect(img.attributes().src).toBe('/img/heroes/npc_dota_hero_antimage.png');
    expect(img.classes()).toContain('icon');
    expect(img.classes()).not.toContain('portrait');
  });

  it('should show portrait', () => {
    const wrapper = shallowMount(HeroIcon, {
      propsData: { id: 0, type: 'portrait' },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toBe('Empty');
    expect(img.attributes().src).toBe('/img/portraits/npc_dota_hero_default.png');
    expect(img.classes()).toContain('portrait');
    expect(img.classes()).not.toContain('icon');
  });
});
