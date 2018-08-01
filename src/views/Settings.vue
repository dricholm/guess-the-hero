<template>
  <div class="container my-5">

    <b-form @submit.prevent="submit()">

      <div class="settings-layout">

        <card header="MMR" class="mmr">
          <div class="card-text">
            <b-form-row>
              <b-form-group id="filter"
                            label="Minimum"
                            label-for="mmr-min"
                            class="col">
                <b-form-input id="mmr-min"
                              type="number"
                              v-model.number="formData.mmrMin"
                              min="0"
                              placeholder="0">
                </b-form-input>
              </b-form-group>
              <b-form-group id="filter"
                            label="Maximum"
                            label-for="mmr-max"
                            class="col">
                <b-form-input id="mmr-max"
                              type="number"
                              v-model.number="formData.mmrMax"
                              max="9999"
                              placeholder="9999">
                </b-form-input>
              </b-form-group>
            </b-form-row>
          </div>
        </card>

        <card header="Duration" class="duration">
          <b-form-row>
            <b-form-group id="filter"
                          label="Minimum"
                          label-for="duration-min"
                          description="minutes"
                          class="col">
              <b-form-input id="duration-min"
                            type="number"
                            v-model.number="formData.durationMin"
                            min="0"
                            placeholder="0">
              </b-form-input>
            </b-form-group>
            <b-form-group id="filter"
                          label="Maximum"
                          label-for="duration-max"
                          description="minutes"
                          class="col">
              <b-form-input id="duration-max"
                            type="number"
                            v-model.number="formData.durationMax"
                            max="999"
                            placeholder="999">
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

    </b-form>

  </div>
</template>

<script lang="ts">
import bButton from 'bootstrap-vue/es/components/button/button';
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bForm from 'bootstrap-vue/es/components/form/form';
import bFormRow from 'bootstrap-vue/es/components/layout/form-row';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Card from '@/components/core/Card.vue';
import SettingsState from '@/store/settings/types';

@Component({
  components: {
    Card,
    bButton,
    bForm,
    bFormGroup,
    bFormInput,
    bFormRow,
  },
})
export default class Settings extends Vue {
  @Action('saveStorage', { namespace: 'settings' })
  private saveSettings!: (state: SettingsState) => void;
  @Getter('settings', { namespace: 'settings' })
  private state!: SettingsState;

  private formData: SettingsState = {
    durationMax: 300,
    durationMin: 20,
    mmrMax: 9000,
    mmrMin: 2000,
  };

  private gameModes: Array<{ text: string; value: number }> = [
    { text: 'All Pick', value: 0 },
    { text: 'Random', value: 1 },
  ];

  private created() {
    this.formData = {
      durationMax: this.state.durationMax,
      durationMin: this.state.durationMin,
      mmrMax: this.state.mmrMax,
      mmrMin: this.state.mmrMin,
    };
  }

  private submit() {
    this.saveSettings(this.formData);

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
    grid-template-areas: 'mmr duration game-mode';
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
