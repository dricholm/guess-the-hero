import Result from '@/components/game/Result.vue';
import HeroIcon from '@/components/heroes/HeroIcon.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe('Result.vue', () => {
  it('should show correct', () => {
    const wrapper = shallowMount(Result, {
      propsData: {
        correct: true,
        heroId: 1,
      },
    });

    const result = wrapper.find('.result');

    expect(result.text()).toBe('Correct');
  });

  it('should show incorrect', () => {
    const wrapper = shallowMount(Result, {
      propsData: {
        correct: false,
        heroId: 1,
      },
    });

    const result = wrapper.find('.result');

    expect(result.text()).toBe('Incorrect');
  });

  it('should show hero data', () => {
    const wrapper = shallowMount(Result, {
      propsData: {
        heroId: 1,
      },
    });

    const heroPortrait = wrapper.find('.hero-portrait');
    const heroIcon = wrapper.findComponent(HeroIcon);

    expect(heroPortrait.text()).toBe('Anti-Mage');
    expect(+heroIcon.attributes().id).toBe(1);
  });

  it('should show match links', () => {
    const wrapper = shallowMount(Result, {
      propsData: {
        heroId: 1,
        matchId: 123456,
      },
    });

    const links = wrapper.findAll('a');

    expect(links.at(0).text()).toBe('DotaBuff');
    expect(links.at(0).attributes().href).toBe(
      'https://www.dotabuff.com/matches/123456',
    );
    expect(links.at(1).text()).toBe('OpenDota');
    expect(links.at(1).attributes().href).toBe(
      'https://www.opendota.com/matches/123456',
    );
  });

  it('should emit next', () => {
    const wrapper = mount(Result, {
      attachToDocument: true,
      propsData: {
        heroId: 1,
      },
    });

    const button = wrapper.find('button');

    button.trigger('click');

    expect(wrapper.emitted('next')).toBeTruthy();
  });
});
