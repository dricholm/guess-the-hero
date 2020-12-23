<template>
  <img
    :src="imageSrc"
    :alt="localizedName"
    :class="{
      icon: true,
      small: small,
    }"
    v-b-tooltip
    :title="localizedName"
  />
</template>

<script lang="ts">
import { VBTooltip } from 'bootstrap-vue';
import heroesJson from 'dotaconstants/build/heroes.json';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Hero from '@/interfaces/Hero';

@Component({
  directives: {
    bTooltip: VBTooltip,
  },
})
export default class HeroIcon extends Vue {
  @Prop({ default: 0, type: Number })
  private id!: number;
  @Prop({ default: false, type: Boolean })
  private small!: boolean;

  get name(): string {
    return this.valid
      ? (heroesJson[
          this.id.toString() as keyof typeof heroesJson
        ] as Hero).name.slice(14)
      : 'Empty';
  }

  get localizedName(): string {
    return this.valid
      ? (heroesJson[this.id.toString() as keyof typeof heroesJson] as Hero)
          .localized_name
      : 'Empty';
  }

  get valid(): boolean {
    return (
      typeof (heroesJson[
        this.id.toString() as keyof typeof heroesJson
      ] as Hero) !== 'undefined'
    );
  }

  get imageSrc(): string {
    return `${process.env.BASE_URL}img/heroes/${
      this.valid ? this.name : 'default'
    }.jpg`;
  }
}
</script>

<style lang="scss" scoped>
img {
  background-size: cover;
  display: inline-block;
}

.icon {
  background-image: url('../../../public/img/heroes/default.jpg');

  &.small {
    width: 64px;
  }
}
</style>
