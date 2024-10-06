import { renderHook } from '@testing-library/react';
import itemsJson from 'dotaconstants/build/items.json';
import useItem from './useItem';

describe('useItem', () => {
  it('should return null for ID 0', () => {
    const { result } = renderHook(() => useItem(0));

    expect(result.current).toBeNull();
  });

  it('should return correct item', () => {
    const id = 1;
    const name = 'blink';
    const item = itemsJson[name];

    const { result } = renderHook(() => useItem(id));

    expect(result.current).toEqual({
      abilities: item.abilities,
      attributes: item.attrib,
      cost: item.cost,
      displayName: item.dname,
      hint: item.hint,
      id: item.id,
      imageSrc: `/img/items/${name}.jpg`,
      lore: item.lore,
      name,
      note: item.notes,
    });
  });
});
