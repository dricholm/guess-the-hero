<template>
  <div class="container my-5">
    <h1>Not Found</h1>

    <p>The requested page could not be found.</p>

    <p>
      Go back to the
      <router-link :to="{ name: 'home' }">main page</router-link> or
      <router-link :to="{ name: 'game' }">play now</router-link>.
    </p>
  </div>
</template>
