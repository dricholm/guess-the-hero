import { mount } from '@vue/test-utils';

import SubMenu from '@/components/core/SubMenu.vue';

describe('SubMenu.vue', () => {
  it('should show items', () => {
    const wrapper = mount(SubMenu, {
      propsData: {
        items: [
          { name: 'Home', to: '/home' },
          { name: 'Second', to: '/home/second' },
        ],
      },
    });

    const links = wrapper.findAll('.nav-link');

    expect(links.length).toBe(2);
    expect(links.at(0).attributes().href).toBe('/home');
    expect(links.at(0).text()).toBe('Home');
    expect(links.at(1).attributes().href).toBe('/home/second');
    expect(links.at(1).text()).toBe('Second');
  });
});
