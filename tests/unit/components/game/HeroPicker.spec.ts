import { mount, shallowMount } from '@vue/test-utils';

import HeroPicker from '@/components/game/HeroPicker.vue';

describe('HeroPicker.vue', () => {
  it('should show default state', () => {
    const wrapper = shallowMount(HeroPicker, {
      stubs: {
        bButton: true,
      },
    });

    const input = wrapper.find({ name: 'bFormInput' });
    const heroIcon = wrapper.find({ name: 'HeroIcon' });
    const button = wrapper.find('bbutton-stub');

    expect(input.attributes()).not.toContain('disabled');
    expect(+heroIcon.attributes().id).toBe(0);
    expect(button.attributes().disabled).toBe('true');
  });

  it('should show hero', () => {
    const wrapper = shallowMount(HeroPicker, {
      propsData: {
        selectedHero: 1,
      },
      stubs: {
        bButton: true,
      },
    });

    const input = wrapper.find({ name: 'bFormInput' });
    const heroIcon = wrapper.find({ name: 'HeroIcon' });
    const button = wrapper.find('bbutton-stub');

    expect(input.attributes()).not.toContain('disabled');
    expect(+heroIcon.attributes().id).toBe(1);
    expect(button.attributes()).not.toContain('disabled');
  });

  it('should be disabled', () => {
    const wrapper = shallowMount(HeroPicker, {
      propsData: {
        disabled: true,
        selectedHero: 1,
      },
      stubs: { bButton: true },
    });

    const input = wrapper.find({ name: 'bFormInput' });
    const heroIcon = wrapper.find({ name: 'HeroIcon' });
    const button = wrapper.find('bbutton-stub');

    expect(input.attributes()).not.toContain('disabled');
    expect(+heroIcon.attributes().id).toBe(1);
    expect(button.attributes().disabled).toBe('true');
  });

  it('should emit filter', () => {
    const wrapper = mount(HeroPicker, {
      propsData: {},
    });

    const input = wrapper.find('input[type="text"]');

    input.setValue('al');

    expect(wrapper.emitted('filter')[0]).toEqual(['al']);
  });

  it('should emit pick', () => {
    const wrapper = mount(HeroPicker, {
      propsData: {
        selectedHero: 1,
      },
    });

    const button = wrapper.find('button');

    button.trigger('click');

    expect(wrapper.emitted('pick')).toBeTruthy();
  });
});
