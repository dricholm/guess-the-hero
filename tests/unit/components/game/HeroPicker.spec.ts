import { mount } from '@vue/test-utils';

import HeroPicker from '@/components/game/HeroPicker.vue';

describe('HeroPicker.vue', () => {
  it('should show default state', () => {
    const wrapper = mount(HeroPicker, { attachToDocument: true });

    const input = wrapper.find('input[type="text"]');
    const heroIcon = wrapper.find({ name: 'HeroIcon' });
    const button = wrapper.find('button');

    expect(input.attributes()).not.toContain('disabled');
    expect(+heroIcon.props().id).toBe(0);
    expect(button.attributes().disabled).toBe('disabled');
  });

  it('should show hero', () => {
    const wrapper = mount(HeroPicker, {
      attachToDocument: true,
      propsData: {
        selectedHero: 1,
      },
    });

    const input = wrapper.find('input[type="text"]');
    const heroIcon = wrapper.find({ name: 'HeroIcon' });
    const button = wrapper.find('button');

    expect(input.attributes()).not.toContain('disabled');
    expect(+heroIcon.props().id).toBe(1);
    expect(button.attributes()).not.toContain('disabled');
  });

  it('should be disabled', () => {
    const wrapper = mount(HeroPicker, {
      attachToDocument: true,
      propsData: {
        disabled: true,
        selectedHero: 1,
      },
    });

    const input = wrapper.find('input[type="text"]');
    const heroIcon = wrapper.find({ name: 'HeroIcon' });
    const button = wrapper.find('button');

    expect(input.attributes()).not.toContain('disabled');
    expect(+heroIcon.props().id).toBe(1);
    expect(button.attributes().disabled).toBe('disabled');
  });

  it('should emit filter', () => {
    const wrapper = mount(HeroPicker, {
      attachToDocument: true,
      propsData: {},
    });

    const input = wrapper.find('input[type="text"]');

    input.setValue('al');

    expect(wrapper.emitted('filter')[0]).toEqual(['al']);
  });

  it('should emit pick', () => {
    const wrapper = mount(HeroPicker, {
      attachToDocument: true,
      propsData: {
        selectedHero: 1,
      },
    });

    const button = wrapper.find('button');

    button.trigger('click');

    expect(wrapper.emitted('pick')).toBeTruthy();
  });

  it('should show suggestion', async () => {
    const wrapper = mount(HeroPicker, { attachToDocument: true });

    const input = wrapper.find('input[type="text"]');
    const suggestion = wrapper.find('.filter-input');

    input.setValue('tech');
    await wrapper.vm.$nextTick();
    expect(suggestion.attributes()['data-suggested']).toBe('Techies');
  });

  it('should emit select', () => {
    const wrapper = mount(HeroPicker, { attachToDocument: true });

    const form = wrapper.find('form');
    const input = wrapper.find('input[type="text"]');

    input.setValue('anti');
    form.trigger('submit');

    expect(wrapper.emitted('select')[0]).toEqual([1]);
    expect(wrapper.emitted('filter')[1]).toEqual(['']);
  });

  it('should emit pick when submitted', () => {
    const wrapper = mount(HeroPicker, {
      attachToDocument: true,
      propsData: {
        selectedHero: 1,
      },
    });

    const form = wrapper.find('form');

    form.trigger('submit');

    expect(wrapper.emitted('pick')).toBeTruthy();
  });
});
