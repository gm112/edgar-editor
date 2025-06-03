
<template>
  <u-container class="p-4 size-full">
    <u-card class="size-full overflow-hidden" :ui="{ body: 'p-4 sm:p-6 size-full'}">
      <template #header>
        <h1>Edgar Editor</h1>
      </template>
        <monaco-editor class="size-full">
          <p>Loading...</p>
        </monaco-editor>
    </u-card>
  </u-container>
</template>
