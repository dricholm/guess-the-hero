import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';

import AppUpdate from '@/components/core/AppUpdate.vue';

describe('AppUpdate.vue', () => {
  it('should not show anything by default', () => {
    const wrapper = shallowMount(AppUpdate);

    const button = wrapper.find('button');

    expect(button.exists()).toBe(false);
  });

  it('should show notification if swUpdated is dispatched', async () => {
    const wrapper = shallowMount(AppUpdate, { attachToDocument: true });

    document.dispatchEvent(new CustomEvent('swUpdated'));
    await Vue.nextTick();

    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
  });

  it('should call skipWaiting and refresh if button is clicked', async () => {
    jest.spyOn(window.location, 'reload');
    const detail = { waiting: { postMessage: jest.fn() } };
    const wrapper = shallowMount(AppUpdate, { attachToDocument: true });

    document.dispatchEvent(new CustomEvent('swUpdated', { detail }));
    await Vue.nextTick();

    const button = wrapper.find('button');
    button.trigger('click');

    expect(detail.waiting.postMessage).toHaveBeenCalledWith('skipWaiting');
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
