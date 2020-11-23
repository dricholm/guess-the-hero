export interface Attribute {
  key: string;
  header: string;
  value: string | Array<string>;
  generated?: boolean;
  footer?: string;
}

export interface ItemProperty {
  name: string;
  desc: string;
}

export default interface Item {
  id: number;
  img: string;
  dname?: string;
  qual?: string;
  cost: number;
  desc?: string;
  notes: string;
  attrib: Attribute[];
  mc: boolean | number;
  cd: number | boolean;
  lore: string;
  components: Array<string> | null;
  created: boolean;
  active?: ItemProperty[];
  passive?: ItemProperty[];
  use?: ItemProperty[];
  hint?: string[];
}
