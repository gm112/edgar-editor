<script setup lang="ts">
import * as monaco from 'monaco-editor'

const model_value = defineModel<string>()
const is_loading = ref(true)
const editor_element = shallowRef<monaco.editor.IStandaloneCodeEditor>()
const editor_container_element = shallowRef<HTMLDivElement>()
let editor: monaco.editor.IStandaloneCodeEditor | undefined
let model: monaco.editor.ITextModel | undefined

watch(editor_element, (_, current) => {
  if (!editor_element.value || current) return

  editor = monaco.editor.create(editor_element.value!, { theme: 'vs-dark' })
  model = monaco.editor.createModel(model_value.value, 'markdown')

  editor.setModel(model)
  editor_element.value = editor
  is_loading.value = false
})

const observer = useResizeObserver(editor_container_element, (entries) => {
  const [entry] = entries
  if (!entry)
    return

  const { width, height } = entry.contentRect
  if (editor) {
    editor.layout({
      width,
      height,
    })
  }
}, { box: 'border-box' })

onBeforeUnmount(() => {
  editor?.dispose()
  model?.dispose()
  observer.stop()
})
</script>

<template>
  <div
    ref="editor_container_element"
    class="size-full overflow-hidden"
  >
    <div ref="editor_element">
      <slot v-if="is_loading" />
    </div>
  </div>
</template>
