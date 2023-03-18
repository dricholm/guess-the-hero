import itemsJson from 'dotaconstants/build/items.json';
import itemIdsJson from 'dotaconstants/build/item_ids.json';
import { useMemo } from 'react';

interface Item {
  abilities?: string[];
  attributes: Attribute[];
  cost: number;
  displayName: string;
  id: number;
  imageSrc: string;
  lore: string;
  name: string;
  note: string;
}

interface Attribute {
  footer?: string;
  generated?: boolean;
  header: string;
  key: string;
  value: string | string[];
}

const useItem = (id: number | undefined): Item | null =>
  useMemo<Item | null>(() => {
    if (!id || id === 0) return null;

    const name = itemIdsJson[id.toString() as keyof typeof itemIdsJson] as
      | string
      | undefined;
    if (!name) return null;

    const item = itemsJson[name as keyof typeof itemsJson] as
      | Record<string, any>
      | undefined;
    // There are items that are only in itemIds
    if (!item) return null;

    return {
      // Some hints have empty strings
      abilities: item.hint?.filter(Boolean),
      attributes: item.attrib,
      cost: item.cost,
      displayName: item.dname,
      id,
      imageSrc: `/img/items/${
        name.startsWith('recipe_') ? 'recipe' : name
      }.jpg`,
      lore: item.lore,
      name: name,
      note: item.notes,
    };
  }, [id]);

export default useItem;
