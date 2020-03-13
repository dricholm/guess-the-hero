import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';

import Offline from '@/components/core/Offline.vue';

describe('Offline.vue', () => {
  it('should not show offline by default', () => {
    const wrapper = shallowMount(Offline);

    const offline = wrapper.find('.offline');

    expect(offline.exists()).toBe(false);
  });

  it('should show offline if offline event is triggered', async () => {
    const wrapper = shallowMount(Offline, { attachToDocument: true });

    window.dispatchEvent(new CustomEvent('offline'));
    await Vue.nextTick();

    const offline = wrapper.find('.offline');
    expect(offline.exists()).toBe(true);
  });

  it('should hide offline if online event is triggered', async () => {
    const wrapper = shallowMount(Offline, { attachToDocument: true });

    window.dispatchEvent(new CustomEvent('offline'));
    await Vue.nextTick();

    let offline = wrapper.find('.offline');
    expect(offline.exists()).toBe(true);

    window.dispatchEvent(new CustomEvent('online'));
    await Vue.nextTick();

    offline = wrapper.find('.offline');
    expect(offline.exists()).toBe(false);
  });
});
