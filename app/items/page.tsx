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
      1122, // Diadem
    ],
    title: 'Attributes',
  },
  {
    ids: [
      11, // Quelling Blade
      12, // Ring of protection
      265, // Raindrops
      181, // Orb of venom
      240, // Orb of blight
      1575, // Orb of frost
      2, // Blades of attack
      25, // Gloves of haste
      4, // Chainmail
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
      56, // Ring of health
      57, // Void stone
    ],
    title: 'Miscellaneous',
  },
  {
    ids: [
      279, // Ring of tarrasque
      1802, // Tiara of Selemene
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
      1128, // Pavise
      180, // Arcane Boots
      185, // Drum
      79, // Mekansm
      269, // Holy locket
      81, // Vlad
      267, // Spirit vessel
      90, // Pipe
      231, // Greaves
      931, // Boots of Bearing
      1806, // Parasma
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
      635, // Helm of the Overlord
      692, // Eternal shroud
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
      1808, // Khanda
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
      947, // Occult bracelet
      838, // Pig Pole
      1599, // Mana draught
      1606, // Pollywog charm
      1124, // Spark of courage
      1600, // Ripper's lash
      378, // Orb of Destruction
    ],
    title: 'Neutral tier 1',
  },
  {
    ids: [
      359, // Essence Ring
      239, // Iron talon
      2193, // Gossamer cape
      1604, // Searing signet
      828, // Brigand's Blade
      840, // Tumbler's Toy
    ],
    title: 'Neutral tier 2',
  },
  {
    ids: [
      1605, // Serrated shiv
      1159, // Nemesis curse
      1602, // Gale guard
      1603, // Gunpowder gauntlet
      1158, // Whisper of the dread
      362, // Ninja gear
    ],
    title: 'Neutral tier 3',
  },
  {
    ids: [
      949, // Ogre Seal Totem
      1601, // Crippling crossbow
      1607, // Magnifying monocle
      676, // Ceremonial robe
      309, // Mind breaker
      1608, // Pyrrhic cloak
    ],
    title: 'Neutral tier 4',
  },
  {
    ids: [
      292, // Stygian desolator
      371, // Fallen sky
      370, // Book of the dead
      377, // Minotaur Horn
      326, // Spider legs
      365, // Magic lamp
      1598, // Unrelenting eye
      372, // Pirate hat
    ],
    title: 'Neutral tier 5',
  },
  {
    ids: [
      117,
      33,
      260,
      271,
      1804, // Roshan's banner
    ],
    title: 'Roshan',
  },
  {
    ids: [
      10, // Quarterstaff
      45, // Courier
      71, // Poor man's shield
      106, // Necro
      131, // Hood
      182, // Stout shield
      187, // Medallion
      212, // Aquila
      257, // Tome
      286, // Flyinc courier
      287, // Keen Optic
      288, // Grove bow
      289, // Quickening charm
      290, // Philosopher's stone
      291, // Force boots
      293, // Phoenix ash
      294, // Seer stone
      297, // Vampire fangs
      298, // Craggy coat
      299, // Greater faerie fire
      300, // Timeless relic
      301, // Mirror shield
      302, // Elixir
      304, // Ironwood Tree
      305, // Royal jelly
      306, // Pupil's gift
      307, // Tome of aghanim
      308, // Repair kit
      310, // Third eye
      311, // Spell prism
      313, // Fusion rune
      325, // Prince's knife
      327, // Helm of the undying
      328, // Mango tree
      330, // Witless shako
      331, // Vambrace
      334, // Imp Claw
      335, // Flicker
      336, // Telescope
      349, // Arcane ring
      354, // Ocean Heart
      355, // Broom handle
      357, // Nether shawl
      358, // Dragon scale
      360, // Clumsy net
      361, // Enchanted quiver
      363, // Illusionist's Cape
      364, // Havoc hammer
      366, // Apex
      367, // Ballista
      368, // Woodland striders
      369, // Trident
      374, // Ex machina
      375, // Faded Broach
      376, // Paladin sword
      379, // Leveller
      381, // Titan Sliver
      565, // Chipped Vest
      571, // Trickster
      573, // Elven tunic
      574, // Cloak of flames
      577, // Possessed mask
      585, // Stormcrafter
      589, // Fairy's trinket
      638, // Penta-edged sword
      675, // Psychic headband
      677, // Book of shadows
      678, // Giant's ring
      680, // Bullwhip
      686, // Quicksilver Amulet
      825, // Ascetic's cap
      829, // Arcanist's Armor
      834, // Blast Rig
      835, // Fae Grenade
      837, // Witchbane
      908, // Wraith Pact
      945, // Seeds of serenity
      946, // Lance of pursuit
      950, // Defiant shell
      990, // Eye of the Vizier
      1076, // Specialist's Array
      1077, // Dagger of Ristul
      1156, // Ancient guardian
      1157, // Safety bubble
      1160, // Aviana's feather
      1161, // Unwavering condition
      1167, // Light collector
      1168, // Rattlecage
      1803, // Doubloon
      2096, // Vindicator's axe
      2097, // Duelist gloves
      2190, // Dandelion amulet
      2192, // Martyr's plate
    ],
    title: 'Removed',
  },
];

export default Items;
