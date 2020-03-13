<template>
  <img
    :src="imageSrc"
    :alt="localizedName"
    :class="{ backpack, neutral }"
    v-b-popover="popoverOptions"
    :aria-label="localizedName"
  />
</template>

<script lang="ts">
import { VBPopover } from 'bootstrap-vue';
import itemIdsJson from 'dotaconstants/build/item_ids.json';
import itemsJson from 'dotaconstants/build/items.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Item, { Attribute, ItemProperty } from '@/interfaces/Item';

@Component({
  directives: {
    bPopover: VBPopover,
  },
})
export default class ItemIcon extends Vue {
  @Prop({ default: 0, type: Number })
  private id!: number;
  @Prop({ default: false, type: Boolean })
  private neutral!: boolean;
  @Prop({ default: false, type: Boolean })
  private backpack!: boolean;

  get name(): string {
    return itemIdsJson[this.id.toString() as keyof typeof itemIdsJson];
  }

  get localizedName(): string {
    return this.valid
      ? (itemsJson[this.name as keyof typeof itemsJson] as Item)?.dname
      : 'Empty';
  }

  get valid(): boolean {
    return (
      typeof itemIdsJson[this.id.toString() as keyof typeof itemIdsJson] !==
      'undefined'
    );
  }

  get imageSrc(): string {
    return this.valid
      ? this.name.startsWith('recipe_')
        ? `${process.env.BASE_URL}img/items/recipe.jpg`
        : `${process.env.BASE_URL}img/items/${this.name}.jpg`
      : `${process.env.BASE_URL}img/items/emptyitembg.jpg`;
  }

  get popoverOptions() {
    return {
      customClass: 'item-popover',
      html: this.id === 0 ? false : true,
      content: this.id === 0 ? '' : this.popoverContent,
      trigger: this.id === 0 ? 'manual' : 'hover focus',
    };
  }

  private formatDescription(description: string): string {
    return description
      .replace(/(\d+.?\d*%?)/g, '<strong>$&</strong>')
      .replace(/\n/g, '<br />');
  }

  get popoverContent(): string {
    const item = itemsJson[this.name as keyof typeof itemsJson] as Item;
    const attributes = this.attributes.map(
      a =>
        `<li>${
          a.header.startsWith('-')
            ? `<span class="text-danger">${a.header}</span>`
            : a.header
        }<strong class="text-white">${a.value}</strong> ${a.footer || ''}</li>`,
    );
    const active = this.active.map(
      a =>
        `<dt class="d-flex justify-content-between"><p class="m-0">Active: ${
          a.name
        }</p><div class="d-flex m-0" aria-label="Cooldown"><div class="item-cd"></div>${
          item.cd
        }</div></dt><dd>${this.formatDescription(a.desc)}</dd>`,
    );
    const passive = this.passive.map(
      p =>
        `<dt>Passive: ${p.name}</dt><dd>${this.formatDescription(p.desc)}</dd>`,
    );
    const use = this.use.map(
      u => `<dt>Use: ${u.name}</dt><dd>${this.formatDescription(u.desc)}</dd>`,
    );
    const hints =
      item.hint == null
        ? []
        : item.hint
            .filter(hint => hint !== '')
            .map(
              hint =>
                `<p class="item-hint">${this.formatDescription(hint)}</p>`,
            );

    return `
    <div class="d-flex p-3">
      <img src="${this.imageSrc}" class="item-image" />
      <div>
        <div class="item-name">${this.localizedName}</div>
        ${
          item.cost > 0
            ? `<p class="item-cost">Cost: <span class="gold">${item.cost}</span></p>`
            : ''
        }
      </div>
    </div>
    <div class="item-body">
      ${
        this.attributes.length > 0
          ? `<ul class="list-unstyled">${attributes.join('')}</ul>`
          : ''
      }
      ${
        this.active.length > 0
          ? `<dl class="item-active">${active.join('')}</dl>`
          : ''
      }
      ${this.passive.length > 0 ? `<dl>${passive.join('')}</dl>` : ''}
      ${this.use.length > 0 ? `<dl class="item-use">${use.join('')}</dl>` : ''}
      ${hints.length > 0 ? hints.join('') : ''}
      ${
        item.notes === ''
          ? ''
          : `<p class="item-note">${this.formatDescription(item.notes)}</p>`
      }
      ${item.lore === '' ? '' : `<p class="item-lore">${item.lore}</p>`}
    </div>
    `;
  }

  get attributes(): Attribute[] {
    return (
      (itemsJson[this.name as keyof typeof itemsJson] as Item)?.attrib || []
    );
  }

  get active(): ItemProperty[] {
    return (
      (itemsJson[this.name as keyof typeof itemsJson] as Item)?.active || []
    );
  }

  get passive(): ItemProperty[] {
    return (
      (itemsJson[this.name as keyof typeof itemsJson] as Item)?.passive || []
    );
  }

  get use(): ItemProperty[] {
    return (itemsJson[this.name as keyof typeof itemsJson] as Item)?.use || [];
  }
}
</script>

<style lang="scss" scoped>
img {
  background-image: url('../../../public/img/items/emptyitembg.jpg');
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 64px;
  width: 88px;
}

.backpack {
  filter: grayscale(1);
  height: 48px;
  width: 66px;
}

.neutral {
  clip-path: circle(50%);
}
</style>
