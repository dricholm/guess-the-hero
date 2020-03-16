import { shallowMount } from '@vue/test-utils';

import ItemDescription from '@/components/items/ItemDescription.vue';

describe('ItemDescription.vue', () => {
  it('should show icon and name', () => {
    const propsData = {
      name: 'Item name',
      cost: 0,
      image: '/image.jpg',
      attributes: [],
      actives: [],
      passives: [],
      uses: [],
      cooldown: null,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const name = wrapper.find('.item-name');
    expect(name.text()).toBe(propsData.name);
    const img = wrapper.find('img');
    expect(img.attributes().src).toBe(propsData.image);
  });

  it('should show cost', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [],
      passives: [],
      uses: [],
      cooldown: null,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const cost = wrapper.find('.item-cost');
    expect(cost.text()).toBe(propsData.cost.toString());
  });

  it('should show attributes', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [
        {
          key: 'bonus_all_stats',
          header: '+',
          value: '4',
          footer: 'All Attributes',
        },
        {
          key: 'bonus_armor',
          header: '+',
          value: '6',
          footer: 'Armor',
        },
      ],
      actives: [],
      passives: [],
      uses: [],
      cooldown: null,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const attributes = wrapper.findAll('li');
    expect(attributes.length).toBe(propsData.attributes.length);
    propsData.attributes.forEach((a, idx) => {
      expect(attributes.at(idx).text()).toContain(a.header);
      expect(attributes.at(idx).text()).toContain(a.value);
      expect(attributes.at(idx).text()).toContain(a.footer);
    });
  });

  it('should show active', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [
        {
          name: 'Active title',
          desc: 'Active description',
        },
      ],
      passives: [],
      uses: [],
      cooldown: 20,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const active = wrapper.find('.item-active');
    const title = active.find('dt');
    expect(title.text()).toContain(`Active: ${propsData.actives[0].name}`);
    const cd = wrapper.find('[aria-label="Cooldown"]');
    expect(cd.text()).toContain(propsData.cooldown.toString());
    const description = active.find('dd');
    expect(description.text()).toBe(propsData.actives[0].desc);
  });

  it('should format numbers to bold', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [
        {
          name: 'Active title',
          desc: 'Active description 2',
        },
      ],
      passives: [],
      uses: [],
      cooldown: 20,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const description = wrapper.find('dd');
    expect(description.text()).toBe(propsData.actives[0].desc);
    const bold = description.find('.font-weight-bold');
    expect(bold.text()).toBe('2');
  });

  it('should format new line', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [
        {
          name: 'Active title',
          desc: 'Active description\nNew line',
        },
      ],
      passives: [],
      uses: [],
      cooldown: 20,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const description = wrapper.find('dd');

    propsData.actives[0].desc
      .split('\n')
      .forEach(text => expect(description.text()).toContain(text));
    const br = description.find('br');
    expect(br.exists()).toBe(true);
  });

  it('should show active', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [],
      passives: [],
      uses: [
        {
          name: 'Use title',
          desc: 'Use description',
        },
      ],
      cooldown: 10,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const use = wrapper.find('.item-use');
    const title = use.find('dt');
    expect(title.text()).toContain(`Use: ${propsData.uses[0].name}`);
    const cd = wrapper.find('[aria-label="Cooldown"]');
    expect(cd.text()).toContain(propsData.cooldown.toString());
    const description = use.find('dd');
    expect(description.text()).toBe(propsData.uses[0].desc);
  });

  it('should show passive', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [],
      passives: [
        {
          name: 'Passive first',
          desc: 'Passive first description',
        },
        {
          name: 'Passive second',
          desc: 'Passive second description',
        },
      ],
      uses: [],
      cooldown: 10,
      hints: [],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const list = wrapper.find('dl');
    const titles = list.findAll('dt');
    expect(titles.length).toBe(propsData.passives.length);
    const descriptions = list.findAll('dd');
    expect(descriptions.length).toBe(propsData.passives.length);
    propsData.passives.forEach((p, idx) => {
      expect(titles.at(idx).text()).toContain(
        `Passive: ${propsData.passives[idx].name}`,
      );
      expect(descriptions.at(idx).text()).toBe(propsData.passives[idx].desc);
    });
    const cd = wrapper.find('[aria-label="Cooldown"]');
    expect(cd.exists()).toBe(false);
  });

  it('should show hints', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [],
      passives: [],
      uses: [],
      cooldown: null,
      hints: ['Hint one', 'Hint two'],
      note: '',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const hints = wrapper.findAll('.item-hint');
    expect(hints.length).toBe(propsData.hints.length);
    propsData.hints.forEach((hint, idx) =>
      expect(hints.at(idx).text()).toBe(hint),
    );
  });

  it('should show note', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [],
      passives: [],
      uses: [],
      cooldown: null,
      hints: [],
      note: 'Item note',
      lore: '',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const note = wrapper.find('.item-note');
    expect(note.text()).toBe(propsData.note);
  });

  it('should show lore', () => {
    const propsData = {
      name: 'Item name',
      cost: 500,
      image: '/image.jpg',
      attributes: [],
      actives: [],
      passives: [],
      uses: [],
      cooldown: null,
      hints: [],
      note: '',
      lore: 'Item lore',
    };
    const wrapper = shallowMount(ItemDescription, {
      propsData,
    });

    const lore = wrapper.find('.item-lore');
    expect(lore.text()).toBe(propsData.lore);
  });
});
