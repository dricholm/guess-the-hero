import { shallowMount } from '@vue/test-utils';

import Card from '@/components/core/Card.vue';

describe('Card.vue', () => {
  it('should show header', () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        header: 'Header title',
      },
    });

    const header = wrapper.find('.card-header');

    expect(header.text()).toBe('Header title');
  });

  it('should not show header', () => {
    const wrapper = shallowMount(Card);

    const header = wrapper.find('.card-header');

    expect(header.exists()).toBe(false);
  });

  it('should show body', () => {
    const wrapper = shallowMount(Card, {
      slots: {
        default: 'Test slot',
      },
    });

    const body = wrapper.find('.card-body');

    expect(body.text()).toBe('Test slot');
  });

  it('should show body with class', () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        bodyClass: 'test-class',
      },
    });

    const body = wrapper.find('.card-body');

    expect(body.classes()).toContain('test-class');
  });
});
