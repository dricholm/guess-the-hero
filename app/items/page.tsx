import clsx from 'clsx';
import { Metadata } from 'next';
import { FC } from 'react';
import ItemList from 'src/components/molecules/ItemList/ItemList';
import styles from './styles.module.scss';

const Items: FC = () => (
  <div className={clsx('container', styles.container)}>
    {ITEMS.map(({ ids, title }) => (
      <ItemList ids={ids} key={title} title={title} />
    ))}
  </div>
);

export const metadata: Metadata = {
  description:
    'Get to know all the items Dota 2 has to offer and learn all about them. Check their abilities, costs, lore and even more.',
  title: 'Dota 2 items - Guess the Hero',
};

const ITEMS = [
  {
    ids: [
      46, // TP
      38, // Clarity
      237, // Faerie Fire
      188, // Smoke
      42, // Ward
      43, // Sentry
      216, // Mango
      39, // Salve
      44, // Tango
      1123, // Blood grenade
      40, // Dust
      41, // Bottle
      609, // Shard
    ],
    title: 'Consumables',
  },
  {
    ids: [
      16, // Branch
      13, // Gauntlets
      14, // Slippers
      15, // Mantle
      20, // Circlet
      17, // Belt
      18, // Band
      19, // Robe
      261, // Crown
      21, // Ogre axe
      22, // Blade of alacrity
      23, // Staff of wizardry
    ],
    title: 'Attributes',
  },
  {
    ids: [
      11, // Quelling Blade
      12, // Ring of protection
      265, // Raindrops
      181, // Orb of venom
      240, // Blight stone
      2, // Blades of attack
      25, // Gloves of haste
      4, // Chainmail
      10, // Quarterstaff
      6, // Helm of iron will
      3, // Broadsword
      485, // Blitz knuckles
      7, // Javelin
      5, // Claymore
      8, // Mithril hammer
    ],
    title: 'Equipment',
  },
  {
    ids: [
      27, // Ring of regen
      28, // Sage's mask
      34, // Magic stick
      593, // Fluffy hat
      244, // Wind lace
      31, // Cloak
      29, // Boots
      30, // Gem
      26, // Morbid mask
      473, // Voodoo mask
      215, // Shadow amulet
      37, // Ghost scepter
      1, // Blink dagger
    ],
    title: 'Miscellaneous',
  },
  {
    ids: [
      56, // Ring of health
      57, // Void stone
      1125, // Cornucopia
      59, // Energy booster
      61, // Vitality booster
      60, // Point booster
      32, // Talisman of evasion
      9, // Platemail
      55, // Hyperstone
      24, // Ultimate orb
      51, // Demon edge
      58, // Mystic staff
      53, // Reaver
      52, // Eaglesong
      54, // Sacred relic
    ],
    title: 'Secret shop',
  },
  {
    ids: [
      36, // Wand
      77, // Null talisman
      75, // Wraith band
      73, // Bracer
      178, // Soul ring
      569, // Orb of corrosion
      596, // Falcon blade
      63, // Treads
      50, // Phase
      67, // Oblivion staff
      69, // Perseverance
      172, // Mask of madness
      65, // Midas
      164, // Helm of the Dominator
      48, // Travel
      247, // Moon shard
      635, // Helm of the Overlord
    ],
    title: 'Accessories',
  },
  {
    ids: [
      86, // Buckler
      88, // Basilius
      94, // Headdress
      92, // Urn
      214, // Tranquil
      187, // Medallion
      1128, // Pavise
      180, // Arcane
      185, // Drum
      79, // Mekansm
      269, // Holy locket
      81, // Vlad
      267, // Spirit vessel
      90, // Pipe
      231, // Greaves
      931, // Boots of Bearing
    ],
    title: 'Support',
  },
  {
    ids: [
      190, // Veil
      254, // Glimmer
      102, // Force
      232, // Lens
      534, // Witch blade
      100, // Eul
      206, // Atos
      104, // Dagon
      98, // Orchid
      229, // Solar crest
      108, // Aghs
      110, // Refresher
      235, // Octarine core
      96, // Scythe
      1466, // Gleipnir
      610, // Wind waker
    ],
    title: 'Magical',
  },
  {
    ids: [
      125, // Vanguard
      127, // Blade mail
      256, // Aeon
      129, // Soul booster
      692, // Eternal shroud
      242, // Crimson guard
      226, // Lotus orb
      116, // BKB
      263, // Pike
      147, // Manta
      123, // Linken
      119, // Shiva
      114, // Heart
      112, // AC
      121, // Bloodstone
    ],
    title: 'Armor',
  },
  {
    ids: [
      149, // Crystalys
      223, // Meteor hammer
      151, // Armlet
      143, // Basher
      152, // Shadow blade
      168, // Desolator
      145, // Battle fury
      176, // Ethereal blade
      225, // Nullifier
      135, // MKB
      139, // Butterfly
      137, // Radiance
      141, // Daedalus
      249, // Silver edge
      133, // Rapier
      250, // Bloodthorn
      208, // Abyssal
      911, // Revenant's Brooch
      1097, // Disperser
    ],
    title: 'Weapons',
  },
  {
    ids: [
      236, // Dragon lance
      162, // Sange
      170, // Yasha
      259, // Kaya
      252, // Echo sabre
      166, // Maelstrom
      174, // Diffusal
      598, // Mage slayer
      1107, // Phylactery
      210, // Halberd
      273, // KnS
      154, // SnY
      277, // YnK
      156, // Satanic
      160, // Skadi
      158, // Mjollnir
      600, // Overwhelming blink
      603, // Swift blink
      604, // Arcane blink
      939, // Harpoon
    ],
    title: 'Artifacts',
  },
  {
    ids: [
      356, // Trusty shovel
      349, // Arcane ring
      589, // Fairy's trinket
      838, // Pig Pole
      840, // Tumbler's Toy
      945, // Seeds of serenity
      946, // Lance of pursuit
      947, // Occult bracelet
      2097, // Duelist gloves
      355, // Broom handle
      375, // Faded Broach
      1124, // Spark of courage
    ],
    title: 'Neutral tier 1',
  },
  {
    ids: [
      212, // Aquila
      358, // Dragon scale
      306, // Pupil's gift
      331, // Vambrace
      288, // Grove bow
      290, // Philosopher's stone
      680, // Bullwhip
      378, // Orb of Destruction
      1076, // Specialist's Array
      990, // Eye of the Vizier
      297, // Vampire fangs
      2193, // Gossamer cape
    ],
    title: 'Neutral tier 2',
  },
  {
    ids: [
      289, // Quickening charm
      950, // Defiant shell
      376, // Paladin sword
      2096, // Vindicator's axe
      2190, // Dandelion amulet
      381, // Titan Sliver
      361, // Enchanted quiver
      573, // Elven tunic
      574, // Cloak of flames
      676, // Ceremonial robe
      675, // Psychic headband
      949, // Ogre Seal Totem
    ],
    title: 'Neutral tier 3',
  },
  {
    ids: [
      300, // Timeless relic
      311, // Spell prism
      825, // Ascetic's Cap
      362, // Ninja gear
      336, // Telescope
      571, // Trickster
      585, // Stormcrafter
      638, // Penta-edged sword
      364, // Havoc hammer
      309, // Mind breaker
      2192, // Martyr's plate
    ],
    title: 'Neutral tier 4',
  },
  {
    ids: [
      291, // Force boots
      292, // Stygian desolator
      294, // Seer stone
      301, // Mirror shield
      366, // Apex
      370, // Book of the dead
      371, // Fallen sky
      829, // Arcanist's Armor
      372, // Pirate hat
      374, // Ex machina
      678, // Giant's ring
      677, // Book of shadows
    ],
    title: 'Neutral tier 5',
  },
  {
    ids: [117, 33, 260, 271],
    title: 'Roshan',
  },
  {
    ids: [
      45, // Courier
      71, // Poor man's shield
      106, // Necro
      131, // Hood
      182, // Stout shield
      239, // Iron talon
      257, // Tome
      279, // Ring of tarrasque
      286, // Flyinc courier
      287, // Keen Optic
      293, // Phoenix ash
      298, // Craggy coat
      299, // Greater faerie fire
      302, // Elixir
      304, // Ironwood Tree
      305, // Royal jelly
      307, // Tome of aghanim
      308, // Repair kit
      310, // Third eye
      313, // Fusion rune
      325, // Prince's knife
      326, // Spider legs
      327, // Helm of the undying
      328, // Mango tree
      330, // Witless shako
      334, // Imp Claw
      335, // Flicker
      354, // Ocean Heart
      357, // Nether shawl
      359, // Essence Ring
      360, // Clumsy net
      363, // Illusionist's Cape
      365, // Magic lamp
      367, // Ballista
      368, // Woodland striders
      369, // Trident
      377, // Minotaur Horn
      379, // Leveller
      565, // Chipped Vest
      577, // Possessed mask
      686, // Quicksilver Amulet
      828, // Brigand's Blade
      834, // Blast Rig
      837, // Witchbane
      835, // Fae Grenade
      908, // Wraith Pact
      1077, // Dagger of Ristul
    ],
    title: 'Removed',
  },
];

export default Items;
