<template>
  <section class="test-container">
    <header>
      <h1>Edgar Editor</h1>
    </header>
    <monaco-editor>
      <p>Loading...</p>
    </monaco-editor>
    <footer>
      <p>Footer</p>
    </footer>
  </section>
</template>

<style lang="css">
html, body, #__nuxt {
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  padding: 0; margin: 0;
}

.test-container {
  display: grid;
  height: 100%;
  width: 100%;
}
</style>
