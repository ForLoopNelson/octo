<template>
  <div class="container flex flex-col mx-auto p-4 md:px-16 md:py-8">
    <div>
      <h2 class="text-4xl">App Settings</h2>
      <p class="mt-1 mb-8 text-gray-500">Make yourself comfortable</p>
      <Banner class="mb-8" />
      <Extendable scope="app.settings">
        <Theme class="mb-8" />
        <Editor class="mb-8" />
        <Encryption class="mb-8" />
        <Export class="mb-8" />
      </Extendable>
    </div>
  </div>
</template>

<script>
import Banner from '/src/components/Banner.vue'
import Editor from '/src/components/settings/Editor.vue'
import Encryption from '/src/components/settings/Encryption.vue'
import Export from '/src/components/settings/Export.vue'
import Theme from '/src/components/settings/Theme.vue'

export default {
  name: 'TheSettings',
  components: {
    Banner,
    Editor,
    Encryption,
    Export,
    Theme,
  },
}
</script>
