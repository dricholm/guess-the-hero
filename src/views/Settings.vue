<template>
  <div class="container my-5">
    <b-form @submit.prevent="submit()">
      <div class="settings-layout">
        <card header="MMR" class="mmr">
          <b-form-row class="w-100">
            <b-form-group
              id="filter"
              label="Minimum"
              label-for="mmr-min"
              class="col"
            >
              <b-form-input
                id="mmr-min"
                type="number"
                v-model.number="formData.mmrMin"
                min="0"
                max="9999"
                placeholder="0"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="filter"
              label="Maximum"
              label-for="mmr-max"
              class="col"
            >
              <b-form-input
                id="mmr-max"
                type="number"
                v-model.number="formData.mmrMax"
                min="0"
                max="9999"
                placeholder="9999"
              >
              </b-form-input>
            </b-form-group>
          </b-form-row>
        </card>

        <card header="Duration" class="duration">
          <b-form-row class="w-100">
            <b-form-group
              id="filter"
              label="Minimum"
              label-for="duration-min"
              description="minutes"
              class="col"
            >
              <b-form-input
                id="duration-min"
                type="number"
                v-model.number="formData.durationMin"
                min="0"
                max="999"
                placeholder="0"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="filter"
              label="Maximum"
              label-for="duration-max"
              description="minutes"
              class="col"
            >
              <b-form-input
                id="duration-max"
                type="number"
                v-model.number="formData.durationMax"
                min="0"
                max="999"
                placeholder="999"
              >
              </b-form-input>
            </b-form-group>
          </b-form-row>
        </card>
      </div>

      <div class="d-flex justify-content-center mt-4">
        <b-button variant="primary" size="lg" type="submit" class="mr-3">
          Save
        </b-button>
      </div>

      <transition name="card">
        <div class="one-card" v-if="saved">
          <card header="Saved" class="my-3">Settings saved!</card>
        </div>
      </transition>
    </b-form>
  </div>
</template>

<script lang="ts">
import {
  BButton,
  BFormGroup,
  BFormInput,
  BForm,
  BFormRow,
} from 'bootstrap-vue';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Card from '@/components/core/Card.vue';
import type SettingsState from '@/store/settings/types';

@Component({
  components: {
    Card,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BFormRow,
  },
})
export default class Settings extends Vue {
  @Action('saveStorage', { namespace: 'settings' })
  private saveSettings!: (state: SettingsState) => void;
  @Getter('settings', { namespace: 'settings' })
  private state!: SettingsState;

  private saved: boolean = false;

  private formData: SettingsState = {
    durationMax: 300,
    durationMin: 20,
    mmrMax: 9000,
    mmrMin: 2000,
  };

  private created() {
    this.formData = {
      durationMax: this.state.durationMax,
      durationMin: this.state.durationMin,
      mmrMax: this.state.mmrMax,
      mmrMin: this.state.mmrMin,
    };
  }

  private submit() {
    const result = this.saveSettings(this.formData);

    this.saved = true;

    setTimeout(() => {
      this.saved = false;
    }, 2000);

    // Reload from store in case empty values were submitted
    this.formData = {
      durationMax: this.state.durationMax,
      durationMin: this.state.durationMin,
      mmrMax: this.state.mmrMax,
      mmrMin: this.state.mmrMin,
    };
  }
}
</script>

<style lang="scss" scoped>
.settings-layout {
  display: grid;
  grid-gap: $spacer;
  grid-template-areas:
    'mmr'
    'duration';
  grid-template-columns: 1fr;
  grid-template-rows:
    auto
    auto;

  @include media-breakpoint-up(md) {
    grid-template-areas: 'mmr duration';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .mmr {
    grid-area: mmr;
  }

  .duration {
    grid-area: duration;
  }
}
</style>
