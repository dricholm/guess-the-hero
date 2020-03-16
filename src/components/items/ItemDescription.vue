<template>
  <div class="item-popover">
    <div class="d-flex p-3">
      <img :src="image" class="item-image" />
      <div>
        <div class="item-name">{{ name }}</div>
        <p class="item-cost" aria-label="Cost" v-if="cost">
          {{ cost }}
        </p>
      </div>
    </div>
    <div class="item-body">
      <ul class="list-unstyled" v-if="attributes.length > 0">
        <li v-for="a in attributes" :key="a.key">
          <span :class="{ 'text-danger': a.header.startsWith('-') }">
            {{ a.header }}
          </span>
          <span class="text-white font-weight-bold">{{ a.value }}</span>
          &nbsp;
          <span v-html="a.footer"></span>
        </li>
      </ul>
      <dl class="item-active" v-if="actives.length > 0">
        <template v-for="a in actives">
          <dt :key="`${a.name}-t`" class="d-flex justify-content-between">
            <p class="m-0">Active: {{ a.name }}</p>
            <div class="d-flex m-0" aria-label="Cooldown" v-if="cooldown">
              <div class="item-cd"></div>
              {{ cooldown }}
            </div>
          </dt>
          <dd :key="`${a.name}-d`" v-html="formatDescription(a.desc)"></dd>
        </template>
      </dl>
      <dl v-if="passives.length > 0">
        <template v-for="p in passives">
          <dt :key="`${p.name}-t`">
            <p class="m-0">Passive: {{ p.name }}</p>
          </dt>
          <dd :key="`${p.name}-d`" v-html="formatDescription(p.desc)"></dd>
        </template>
      </dl>
      <dl class="item-use" v-if="uses.length > 0">
        <template v-for="u in uses">
          <dt :key="`${u.name}-t`" class="d-flex justify-content-between">
            <p class="m-0">Use: {{ u.name }}</p>
            <div class="d-flex m-0" aria-label="Cooldown" v-if="cooldown">
              <div class="item-cd"></div>
              {{ cooldown }}
            </div>
          </dt>
          <dd :key="`${u.name}-d`" v-html="formatDescription(u.desc)"></dd>
        </template>
      </dl>
      <p
        class="item-hint"
        v-for="hint of hints"
        :key="hint"
        v-html="formatDescription(hint)"
      ></p>
      <p class="item-note" v-if="note" v-html="formatDescription(note)"></p>
      <p class="item-lore" v-if="lore" v-html="formatDescription(lore)"></p>
    </div>
  </div>
</template>

<script lang="ts">
import itemIdsJson from 'dotaconstants/build/item_ids.json';
import itemsJson from 'dotaconstants/build/items.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Item, { Attribute, ItemProperty } from '@/interfaces/Item';

@Component({})
export default class ItemDescription extends Vue {
  @Prop({ type: String })
  private readonly name!: string;
  @Prop({ type: Number })
  private readonly cost: number | undefined;
  @Prop({ type: String })
  private readonly image!: string;
  @Prop({ default: () => [], type: Array })
  private readonly attributes!: Attribute[];
  @Prop({ default: () => [], type: Array })
  private readonly actives!: ItemProperty[];
  @Prop({ default: () => [], type: Array })
  private readonly passives!: ItemProperty[];
  @Prop({ default: () => [], type: Array })
  private readonly uses!: ItemProperty[];
  @Prop({ type: Number })
  private readonly cooldown!: number;
  @Prop({ default: () => [], type: Array })
  private readonly hints!: string[];
  @Prop({ type: String })
  private readonly note!: string;
  @Prop({ type: String })
  private readonly lore!: string;

  private formatDescription(description: string): string {
    return description
      .replace(
        /(?<=[+\s])(\d+\.?\d*%?)/g,
        '<span class="font-weight-bold">$&</span>',
      )
      .replace(/\n/g, '<br />');
  }
}
</script>

<style lang="scss" scoped>
.item-popover {
  background: linear-gradient(
    60deg,
    #202b34,
    #21333c 15%,
    #202b34 20%,
    #21333c 50%,
    #202b34 55%,
    #21333c 75%,
    #202b34 80%
  );
  box-shadow: $box-shadow;
  z-index: $zindex-tooltip + 1;

  .item-image {
    border: 1px solid #000000;
    box-shadow: $box-shadow-sm;
    height: 64px;
    margin-right: $spacer;
    width: 88px;
  }

  .item-name {
    font-weight: $font-weight-bold;
    text-transform: uppercase;
  }

  .item-cost {
    color: #ffdc4b;
    font-weight: $font-weight-bold;
    margin: 0;
    padding-left: 30px;
    position: relative;
    text-transform: uppercase;

    &::before {
      background: url('../../../public/img/gold.png');
      content: '';
      height: 17px;
      left: 0;
      position: absolute;
      top: 5px;
      width: 26px;
    }
  }

  .item-body {
    background: rgba(0, 0, 0, 0.5);
    font-size: $font-size-sm;
    padding: $spacer;

    .item-cd {
      background: #3c3a3a;
      height: $spacer;
      margin: $spacer * 0.25;
      position: relative;
      width: $spacer;
      border: 1px solid #000000;
      border-radius: $spacer * 0.25;
      overflow: hidden;

      &::after {
        background: #bdbdbd;
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 50%);
        content: '';
        height: $spacer;
        left: -1px;
        position: absolute;
        top: 0;
        width: $spacer;
      }
    }

    dl {
      color: rgba(255, 255, 255, 0.7);
    }

    dt {
      background: linear-gradient(90deg, #26353f, #1d262f 90%);
      font-weight: $font-weight-bold;
      padding: $spacer * 0.25 $spacer * 0.5;
    }

    dd {
      background: #1c262f;
      padding: $spacer * 0.25 $spacer * 0.5;
    }

    .item-active {
      dt {
        background: linear-gradient(90deg, #38387f, #181e30 90%);
      }

      dd {
        background: #171d2f;
      }
    }

    .item-use {
      dt {
        background: linear-gradient(90deg, #273f27, #17231f 90%);
      }

      dd {
        background: #162320;
      }
    }

    .item-hint {
      background: #1c262f;
      padding: $spacer * 0.5;
    }

    .item-note {
      background: #253844;
      padding: $spacer * 0.5;
    }

    .item-lore {
      background: #0b1215;
      color: $text-muted;
      padding: $spacer * 0.5;
      margin: $spacer * 1.5 0 0 0;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
