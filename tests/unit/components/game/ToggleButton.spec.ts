import { shallowMount } from '@vue/test-utils';

import ToggleButton from '@/components/game/ToggleButton.vue';

describe('ToggleButton.vue', () => {
  it('should show inactive state', () => {
    const wrapper = shallowMount(ToggleButton, {
      propsData: {
        title: 'Title',
        value: 'Value',
      },
    });

    const button = wrapper.find('button');
    const value = wrapper.find('.stat-value');

    expect(button.text()).toContain('Title');
    expect(value.text()).toBe('Value');
    expect(wrapper.classes()).not.toContain('active');
  });

  it('should show active state', () => {
    const wrapper = shallowMount(ToggleButton, {
      propsData: {
        show: true,
        title: 'Title',
        value: 3,
      },
    });

    const button = wrapper.find('button');
    const value = wrapper.find('.stat-value');

    expect(button.text()).toContain('Title');
    expect(value.text()).toBe('3');
    expect(wrapper.classes()).toContain('active');
  });

  it('should toggle state', async () => {
    const wrapper = shallowMount(ToggleButton, {
      propsData: {
        title: 'Title',
        value: 'Value',
      },
    });

    expect(wrapper.classes()).not.toContain('active');

    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).toContain('active');
  });
});
