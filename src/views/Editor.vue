<template>
  <Editor ref="editable" :appearance="appearance" :initialSelections="initialSelections" :readonly="readonly" :settings="settings" :text="doc.text" @input="input" />
</template>

<script>
import Editor from '/src/components/Editor.vue'
import { fetchSharedDoc } from '/src/firebase/firestore'

import { setTitle } from '/src/common/title.js'
import Doc, { unpack } from '/src/models/doc.js'
import { open } from '/src/router.js'


import {
  ADD_DOCUMENT,
  EDIT_DOCUMENT,
  SET_DOCUMENT,
} from '/src/store/actions.js'

const formatTags = (tags, delimiter = ", ") => {
  return tags.map(tag => `#${tag}`).join(delimiter)
}

export default {
  name: 'EditorView',
  components: {
    Editor,
  },
  props: {
    id: String,
    initialFocus: {
      type: String,
      default: () => ('any'),
      validator: (position) => (
        ['any', 'start', 'end'].includes(position)
      ),
    },
    initialSelections: {
      type: Array,
    },
    readonly: {
      type: Boolean,
    },
  },
  data() {
    return {
      editor: null,
      placeholder: new Doc({ text: formatTags(this.$store.state.context.tags, " ") }),
    }
  },
  watch: {
    doc() {
      this.$refs.editable.clearHistory()
      this.$refs.editable.focusEditor()
    },
    tags: {
      deep: true,
      handler() {
        this.updateTitle()
      },
    },
    header() {
      this.updateTitle()
    }
  },
  computed: {
    appearance() {
      return this.$store.state.settings.theme === 'october' ? 'dark' : this.$store.state.settings.theme
    },
    currentDoc() {
      return this.$store.getters.currentDoc
    },
    doc() {
      return this.$store.getters.decrypted.find(doc => doc.id === this.id) || this.placeholder
    },
    settings() {
      return this.$store.state.settings.editor
    },
    tags() {
      return this.doc.tags
    },
    header() {
      return this.doc.headers[0]
    },
  },
  methods: {
    async updateTitle() {
      setTitle(this.doc.header || formatTags(this.doc.tags))
    },
    async findSharedDocument() {
      const docRef = await fetchSharedDoc({ docId: this.$route.params.id })
      const serverDoc = docRef.data()
      const packed = {
        ...serverDoc,
        id: (serverDoc.id || serverDoc.clientId),
        firebaseId: docRef.id,
        textKey: (serverDoc.textKey || serverDoc.dataKey),
        createdAt: (serverDoc.createdAt ? serverDoc.createdAt.toDate() : null),
        discardedAt: (serverDoc.discardedAt ? serverDoc.discardedAt.toDate() : null),
        updatedAt: (serverDoc.updatedAt ? serverDoc.updatedAt.toDate() : null),
        touchedAt: (serverDoc.touchedAt ? serverDoc.touchedAt.toDate() : null),
        syncedAt: serverDoc.syncedAt.toDate(),
      }

      return unpack(packed, { privateKey: this.$store.state.settings.crypto.privateKey })
    },
    async input(text) {
      if (!this.readonly) {
        // ReadOnly mode means we are viewing a shared doc.
        // Todo: Create a new view for shared docs, and store shared docs in a new collection.
        if (this.id) {
          this.$store.dispatch(EDIT_DOCUMENT, { id: this.doc.id, text })
        } else {
          this.$store.dispatch(ADD_DOCUMENT, new Doc({ id: this.doc.id, text }))

          open({
            name: 'doc',
            params: {
              id: this.doc.id,
              props: {
                initialSelections: this.$refs.editable.getSelections(),
              },
            },
          })
        }
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === 'doc') {
      this.$store.dispatch(SET_DOCUMENT, { id: to.params.id })
    }

    next()
  },
  async mounted() {
    this.updateTitle()
    // might want to pass another prop to represent "shared" since readonly might have multiple use cases
    if (this.readonly) {
      this.placeholder = await this.findSharedDocument();
    }
  },
}
</script>
