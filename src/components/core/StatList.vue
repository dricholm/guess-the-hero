<template>
  <ul class="stat-list">
    <li v-for="stat in stats" :key="stat.id">
      <p class="stat-title">
        {{ stat.title }}
      </p>
      <p class="stat-line"></p>
      <p class="stat-value">
        {{ stat.value }}
      </p>
    </li>
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class StatList extends Vue {
  @Prop({ type: Array })
  private stats!: Array<{ title: string; value: string | number }>;
}
</script>

<style lang="scss" scoped>
.stat-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  width: 100%;

  li {
    align-items: center;
    color: $text-muted;
    display: flex;
    justify-content: space-between;
    padding: ($spacer * 0.25) 0;
    position: relative;

    .stat-title {
      margin: 0;
      position: relative;
    }

    .stat-line {
      background: rgba(255, 255, 255, 0.2);
      flex: 1;
      height: 1px;
      margin: 0 $spacer;
      min-width: $spacer;
    }

    .stat-value {
      color: $light;
      margin: 0;
      text-align: right;
    }

    @include hover-focus {
      .stat-line {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>
