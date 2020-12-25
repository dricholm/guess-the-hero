<template>
  <div class="container my-5">
    <h1>About</h1>

    <h4 class="mt-5 font-weight-bold">What is this site?</h4>
    <p>
      This website was created for entertainment purposes. It uses the
      <a href="https://docs.opendota.com/" target="_blank">OpenDota API</a> for
      querying match data.
    </p>

    <h4 class="mt-5 font-weight-bold">
      Does the site collect any information from me?
    </h4>
    <p>No.</p>

    <h4 class="mt-5 font-weight-bold">Can I contribute to the project?</h4>
    <p>
      Yes. The project is open source, so if you have any improvement idea or
      found a bug, you can create an issue on
      <a href="https://github.com/dricholm/guess-the-hero" target="_blank"
        >GitHub</a
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  metaInfo: {
    meta: [
      {
        content:
          'Get to know more about the site and how you can help improve it.',
        name: 'description',
      },
    ],
    title: 'About',
  },
})
export default class App extends Vue {}
</script>
