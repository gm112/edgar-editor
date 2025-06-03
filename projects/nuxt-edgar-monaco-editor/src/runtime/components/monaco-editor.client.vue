<script setup lang="ts">
import * as monaco from 'monaco-editor'

const model_value = ref('')
const is_loading = ref(true)
const editor_element = shallowRef<monaco.editor.IStandaloneCodeEditor>()
let editor: monaco.editor.IStandaloneCodeEditor | undefined
let model: monaco.editor.ITextModel | undefined

// watch(editor_element, (old, current) => {
//   console.log('hello', old, current, !editor_element.value || current)
//   if (!editor_element.value) return
//   else if (editor_element.value && editor && model) {
//     editor.dispose()
//     model.dispose()
//   }

//   editor = monaco.editor.create(editor_element.value!, { theme: 'vs-dark' })
//   model = monaco.editor.createModel(model_value.value, 'markdown')
//   editor_element.value = editor
//   editor.layout()
//   editor.setModel(model)

//   is_loading.value = false
// })

watch(editor_element, (_, current) => {
  if (!editor_element.value || current) return

  editor = monaco.editor.create(editor_element.value!, { theme: 'vs-dark' })
  model = monaco.editor.createModel(model_value.value, 'markdown')
  editor.layout()
  editor.setModel(model)
  editor_element.value = editor
  is_loading.value = false
})

onBeforeUnmount(() => {
  editor?.dispose()
  model?.dispose()
})
</script>

<template>
  <div ref="editor_element">
    <slot v-if="is_loading" />
  </div>
</template>
