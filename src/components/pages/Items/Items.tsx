import clsx from 'clsx';
import { FC } from 'react';
import ItemList from 'src/components/molecules/ItemList';
import styles from './Items.module.scss';

const ITEMS = [
  {
    ids: [46, 38, 237, 188, 42, 43, 216, 39, 44, 257, 40, 41, 609],
    title: 'Consumables',
  },
  {
    ids: [16, 13, 14, 15, 20, 17, 18, 19, 261, 21, 22, 23],
    title: 'Attributes',
  },
  {
    ids: [11, 12, 265, 181, 240, 2, 25, 4, 10, 6, 3, 485, 7, 5, 8],
    title: 'Equipment',
  },
  {
    ids: [27, 28, 34, 593, 244, 31, 29, 30, 26, 473, 215, 37, 1],
    title: 'Miscellaneous',
  },
  {
    ids: [56, 57, 59, 61, 60, 9, 32, 55, 24, 51, 58, 53, 52, 54],
    title: 'Secret shop',
  },
  {
    ids: [
      36, 77, 75, 73, 178, 569, 596, 63, 50, 67, 69, 172, 65, 164, 48, 247, 635,
    ],
    title: 'Accessories',
  },
  {
    ids: [
      86,
      88,
      94,
      92,
      214,
      187,
      180,
      185,
      79,
      269,
      81,
      267,
      90,
      931, // Boots of Bearing
      908, // Wraith Pact
      231,
    ],
    title: 'Support',
  },
  {
    ids: [
      190,
      254,
      102,
      232,
      534,
      100,
      206,
      104,
      98,
      229,
      108,
      110,
      235,
      96,
      1466,
      911, // Revenant's Brooch
      610,
    ],
    title: 'Magical',
  },
  {
    ids: [
      131, 125, 127, 256, 129, 692, 242, 226, 116, 263, 147, 123, 119, 114, 112,
      121,
    ],
    title: 'Armor',
  },
  {
    ids: [
      149, 223, 151, 143, 152, 168, 145, 176, 225, 135, 139, 137, 141, 249, 133,
      250, 208,
    ],
    title: 'Weapons',
  },
  {
    ids: [
      236, 162, 170, 259, 252, 166, 174, 598, 210, 273, 154, 277, 156, 160, 158,
      600, 603, 604,
    ],
    title: 'Artifacts',
  },
  {
    ids: [
      355,
      356,
      349,
      305,
      577,
      589,
      838, // Pig Pole
      840, // Tumbler's Toy
      945, // Seeds of Serenity
      946, // Lance of Pursuit
      947, // Occult Bracelet
    ],
    title: 'Neutral tier 1',
  },
  {
    ids: [
      212,
      357,
      358,
      306,
      331,
      288,
      290,
      680,
      828, // Brigand's Blade
      990, // Eye of the Vizier
      1076, // Specialist's Array
      1077, // Dagger of Ristul
    ],
    title: 'Neutral tier 2',
  },
  {
    ids: [
      289,
      326,
      376,
      381,
      309,
      361,
      573,
      574,
      676,
      675,
      834, // Blast Rig
      949, // Ogre Seal Totem
    ],
    title: 'Neutral tier 3',
  },
  {
    ids: [
      300,
      311,
      335,
      362,
      379,
      336,
      571,
      585,
      638,
      825, // Ascetic's Cap
      837, // Witchbane
    ],
    title: 'Neutral tier 4',
  },
  {
    ids: [
      291,
      292,
      294,
      301,
      366,
      370,
      371,
      372,
      374,
      678,
      677,
      829, // Arcanist's Armor
    ],
    title: 'Neutral tier 5',
  },
  {
    ids: [117, 33, 260, 271],
    title: 'Roshan',
  },
  {
    ids: [
      45,
      71,
      106,
      182,
      239,
      279,
      286,
      287, // Keen Optic
      293,
      297,
      298,
      299,
      302,
      304, // Ironwood Tree
      307,
      308,
      310,
      313,
      325,
      327,
      328,
      330,
      334, // Imp Claw
      354, // Ocean Heart
      359, // Essence Ring
      360,
      363, // Illusionist's Cape
      364,
      365,
      367, // Ballista
      368,
      369,
      375, // Faded Broach
      377, // Minotaur Horn
      378, // Orb of Destruction
      565, // Chipped Vest
      686, // Quicksilver Amulet
      835, // Fae Grenade
    ],
    title: 'Removed',
  },
];

const Items: FC = () => (
  <div className={clsx('container', styles.container)}>
    {ITEMS.map(({ ids, title }) => (
      <ItemList ids={ids} key={title} title={title} />
    ))}
  </div>
);

export default Items;
