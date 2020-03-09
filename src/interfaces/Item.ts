export interface Attribute {
  key: string;
  header: string;
  value: string;
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
  dname: string;
  qual: string;
  cost: number;
  desc: string;
  notes: string;
  attrib: Attribute[];
  mc: boolean;
  cd: number;
  lore: string;
  components: string[] | null;
  created: boolean;
  active?: ItemProperty[];
  passive?: ItemProperty[];
  use?: ItemProperty[];
}
