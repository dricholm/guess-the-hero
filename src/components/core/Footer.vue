<template>
  <footer>
    <div class="container">
      <p>
        Copyright &copy; 2018 Dávid Richolm
      </p>
      <p>
        Dota 2 is a registered trademark of Valve Corporation.
        <br>This site and service are not related in any way to Valve Corporation.
      </p>
      <router-link to="/about">About</router-link>
      &middot;
      <a href="https://github.com/dricholm/guess-the-hero">GitHub</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: rgba(0, 0, 0, 0.2);
  color: #bbb;
  font-size: $font-size-sm;
  padding: 3rem 0;
}
</style>
