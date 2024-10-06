import itemIdsJson from 'dotaconstants/build/item_ids.json';
import itemsJson from 'dotaconstants/build/items.json';
import { useMemo } from 'react';

interface Item {
  abilities: Ability[];
  attributes: Attribute[];
  cost: number;
  displayName: string;
  hint: string[];
  id: number;
  imageSrc: string;
  lore: string;
  name: string;
  note: string;
}

interface Ability {
  description: string;
  title: string;
  type: string;
}

interface Attribute {
  display?: string;
  key: string;
  value: string;
}

const useItem = (id: number | undefined): Item | null =>
  useMemo<Item | null>(() => {
    if (!id || id === 0) return null;

    const name = itemIdsJson[id.toString() as keyof typeof itemIdsJson] as
      | string
      | undefined;
    if (!name) return null;

    const item = (itemsJson[name as keyof typeof itemsJson] as
      | {
          [key: string]: unknown;
          abilities?: Ability[];
          attrib: Attribute[];
          cost: number;
          dname: string;
          hint: string[];
          lore: string;
          notes: string;
        }
      | undefined) ?? {
      abilities: [],
      attrib: [],
      cost: 0,
      dname: name.replaceAll('_', ' '),
      hint: [],
      lore: '',
      notes: '',
    };

    return {
      abilities: item.abilities ?? [],
      attributes: item.attrib,
      cost: item.cost,
      displayName: item.dname,
      hint: item.hint,
      id,
      imageSrc: `/img/items/${
        name.startsWith('recipe_') ? 'recipe' : name
      }.jpg`,
      lore: item.lore,
      name,
      note: item.notes,
    };
  }, [id]);

export default useItem;
