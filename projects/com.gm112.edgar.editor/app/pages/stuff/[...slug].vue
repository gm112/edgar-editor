<script setup lang="tsx">
import { ContentRenderer } from '#components'
const route = useRoute()
const slug = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug?.join('/')

const { data: page, status } = await useAsyncData(route.path, () => {
  const collection = queryCollection('content').path(`/${slug}`)
  return collection.first()
})

</script>

<template>
  <u-container class="p-4 size-full">
    <ContentRenderer v-if="page && status === 'success'" :value="page" />
    <div v-else-if="status === 'pending'">Loading...</div>
    <div v-else>Not found</div>
  </u-container>
</template>
