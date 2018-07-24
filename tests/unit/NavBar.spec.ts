import { shallowMount } from '@vue/test-utils';
import { RouterLinkStub } from '@vue/test-utils';

import NavBar from '@/components/core/NavBar.vue';

describe('NavBar.vue', () => {
  it('should toggle show class', () => {
    const wrapper = shallowMount(NavBar, {
      stubs: { RouterLink: RouterLinkStub },
    });
    const collapse = wrapper.find('.navbar-collapse');
    const toggle = wrapper.find('.navbar-toggler');
    expect(collapse.classes()).not.toContain('show');
    toggle.trigger('click');
    expect(collapse.classes()).toContain('show');
  });
});
