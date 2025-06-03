<script setup lang="ts">
// FIXME: Move this component to a separate package so that it can be used by standalone Vue projects.
import * as monaco from 'monaco-editor'

interface type_emits_edgar_editor {
  (event: 'update:modelValue', value: string): void
  (event: 'ready', editor: monaco.editor.IStandaloneCodeEditor): void
}

const emit = defineEmits<type_emits_edgar_editor>()
const model_value = defineModel<string>()
const is_loading = shallowRef(true)
const current_animation_frame_id = shallowRef<number | null>(null)
const editor_element = shallowRef<monaco.editor.IStandaloneCodeEditor | null>(null)
const editor_container_element = shallowRef<HTMLDivElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | undefined
let model: monaco.editor.ITextModel | undefined

watch(editor_element, (_, current) => {
  if (!editor_element.value || current) return
  // FIXME: This is a hack to get the editor to work - we want to actually useTemplateRef instead of this watcher.
  // if (current) {
  //   if (editor) editor.dispose()
  //   if (model) model.dispose()
  // }

  editor = monaco.editor.create(editor_element.value!, { theme: 'vs-dark' })
  model = monaco.editor.createModel(model_value.value, 'markdown')

  editor.setModel(model)
  editor.onDidChangeModelContent(() => {
    emit('update:modelValue', editor.getValue())
  })

  editor_element.value = editor
  is_loading.value = false
  emit('ready', editor)
})

watch(model_value, (_, current) => {
  editor?.setValue(current)
})

const observer = useResizeObserver(editor_container_element, (entries) => {
  const [entry] = entries
  if (!entry || !editor)
    return

  const { width, height } = entry.contentRect
  if (current_animation_frame_id.value)
    cancelAnimationFrame(current_animation_frame_id.value)

  current_animation_frame_id.value = requestAnimationFrame(() => {
    editor.layout({
      width,
      height,
    })
  })
}, { box: 'border-box' })

defineExpose({
  $editor: editor_element,
})

onBeforeUnmount(() => {
  editor?.dispose()
  model?.dispose()
  observer.stop()
})
</script>

<template>
  <div
    ref="editor_container_element"
    style="height: 100%; width: 100%; overflow: hidden;"
  >
    <div ref="editor_element">
      <slot v-if="is_loading" />
    </div>
  </div>
</template>
