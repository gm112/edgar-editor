
<template>
  <div class="container">
    <section class="title">
      <h1>Edgar Editor</h1>
    </section>
    <section class="editor">
      <MonacoEditor>
        <p>Loading...</p>
      </MonacoEditor>
    </section>
  </div>
</template>

<style lang="css" scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
  "title"
  "editor";
  grid-template-rows: auto 1fr;
}

.title {
  grid-area: title;
}

.editor {
  grid-area: editor;
  & > * {
    height: 100%;
    width: 100%;
  }
}
</style>
