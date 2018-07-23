<template>
  <div>
    <div class="container">
      <h1>{{ msg }}</h1>
      <p>Lorem <a href="#">ipsum</a> dolor sit, amet consectetur adipisicing elit. Unde nostrum deserunt, ex maxime amet aliquam tenetur possimus, aspernatur, voluptatibus debitis quam. Possimus eveniet ipsam eum voluptates adipisci labore perspiciatis dolorum?</p>

      <div class="input-group">
        <input class="form-control" type="text" placeholder="Hero name"/>
        <div class="input-group-append">
          <button class="btn btn-primary">Send</button>
        </div>
      </div>

      <br/>

      <button class="btn btn-primary mr-3 mb-3">Primary</button>
      <button class="btn btn-secondary mr-3 mb-3">Secondary</button>
      <button class="btn btn-info mr-3 mb-3">Info</button>
      <button class="btn btn-success mr-3 mb-3">Success</button>
      <button class="btn btn-warning mr-3 mb-3">Warning</button>
      <button class="btn btn-danger mr-3 mb-3">Danger</button>
      <button class="btn btn-link mr-3 mb-3">Link</button>

      <br/>

      <div class="alert alert-primary">Primary alert</div>
      <div class="alert alert-secondary">Secondary alert</div>
      <div class="alert alert-info">Info alert</div>
      <div class="alert alert-success">Success alert</div>
      <div class="alert alert-warning">Warning alert</div>
      <div class="alert alert-danger">Danger alert</div>
      <div class="alert alert-dark">Dark alert</div>
      <div class="alert alert-light">Light alert</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
