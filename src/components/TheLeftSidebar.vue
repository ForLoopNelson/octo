<template>
  <SimpleBar class="p-4 md:p-2">
    <div class="hidden md:flex justify-center my-3 pb-2">
      <router-link class="flex p-2" :to="{ name: 'home' }">
        <TheSpookyLogo v-if="october" class="h-10" />
        <TheLogo v-else size="2.5rem" />
      </router-link>
    </div>
    <div class="side-nav-spacer flex flex-col flex-grow pb-3">
      <div class="other-actions">
        <div class="search">
          <router-link :to="{ name: 'docs' }" class="sidebar-button">
            <div class="flex items-center">
              <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span class="ml-6 md:ml-3">Docs</span>
            </div>
            <span class="hidden md:flex text-gray-500">
              <Key>{{ modKey }}</Key>
              <Key class="ml-1">⇧ shift</Key>
              <Key class="ml-1">f</Key>
            </span>
          </router-link>
        </div>
        <div v-if="context.active || context.editing" class="-mx-2 md:mx-0">
          <div class="-m-px mt-6 border px-2 pb-2 md:p-1 border-gray-600 rounded context-box">
            <h6 class="context-label">
              <span>Context</span>
              <button @click="clearContext" class="button button-color-surface">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </h6>
            <div v-if="contextTags.length" class="flex flex-col gap-2 md:gap-1">
              <TagLink v-for="tag in contextTags" :key="tag" :tag="tag" class="context-tag"></TagLink>
            </div>
            <div v-else class="p-6 md:p-2">No Tags Selected</div>
          </div>
        </div>
        <h6 class="sidebar-label">
          <span>Actions</span>
          <ModK/>
        </h6>
        <router-link :to="{ name: 'new_doc' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span class="action">New Doc</span>
            <ModKKey class="text-gray-500">N</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'notepad' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Daily Notepad</span>
            <ModKKey class="text-gray-500">P</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'contexts' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span class="action">Context Switching</span>
            <ModKKey class="text-gray-500">C</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'force_graph' }" class="sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Force Graph</span>
            <ModKKey class="text-gray-500">E</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'settings' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>App Settings</span>
            <ModKKey class="text-gray-500">S</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'account' }" class="sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>{{ authIsEvaluated && !user ? 'Sign In to Account' : 'My Account' }}</span>
            <ModKKey class="text-gray-500">A</ModKKey>
          </span>
        </router-link>
        <a class="sidebar-link" :href="discordInviteLink" target="_blank" rel="noopener noreferrer">
          <svg class="h-6 w-5 px-0.5" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
          </g>
          </svg>
          <div class="flex-grow ml-6 md:ml-3">Community Discord</div>
        </a>
        <router-link v-if="authIsEvaluated && !user" @click="trackCta" :to="{ name: 'account' }" class="sidebar-link text-theme">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Save Docs</span>
          </span>
        </router-link>
        <h6 class="sidebar-label">
          <span>Quick Filters</span>
          <span class="flex">
            <ModK/>
          </span>
        </h6>
        <router-link :to="{ name: 'filtered_docs', params: { filter: 'tasks' } }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Tasks</span>
            <ModKKey class="text-gray-500">T</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'filtered_docs', params: { filter: 'untagged' } }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Untagged</span>
            <ModKKey class="text-gray-500">U</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'filtered_docs', params: { filter: 'discarded' } }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Discarded</span>
            <ModKKey class="text-gray-500">D</ModKKey>
          </span>
        </router-link>
        <h6 v-if="contexts.length" class="sidebar-label">
          <span>Saved Contexts</span>
        </h6>
        <button v-for="context in contexts" :key="context.id" @click="setContext(context)" class="sidebar-link w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>{{ context.name }}</span>
          </span>
        </button>
      </div>
      <div>
        <h6 class="sidebar-label">
          <span>Tags</span>
        </h6>
        <router-link class="sidebar-link md:hidden" :to="{ name: 'tags' }">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span class="ml-6 flex-grow">Tags</span>
        </router-link>
        <div v-if="mediumPlus">
          <TagLink v-for="tag in tags" :key="tag" :tag="tag" class="sidebar-link"></TagLink>
        </div>
      </div>
      <div>
        <h6 class="sidebar-label">
          <span>Agreements</span>
        </h6>
        <router-link :to="{ name: 'privacy_policy' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Privacy Policy</span>
          </span>
        </router-link>
        <router-link :to="{ name: 'terms_and_conditions' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Terms &amp; Conditions</span>
          </span>
        </router-link>
      </div>
    </div>
  </SimpleBar>
</template>

<script>
import Key from '/src/components/Key.vue'
import ModK from '/src/components/ModK.vue'
import ModKKey from '/src/components/ModKKey.vue'
import TagLink from '/src/components/TagLink.vue'
import TheLogo from '/src/components/TheLogo.vue'
import TheSpookyLogo from '/src/components/TheSpookyLogo.vue'

import {
  DEACTIVATE_CONTEXT,
  SET_CONTEXT_TAGS,
} from '/src/store/actions.js'

export default {
  name: 'TheLeftSidebar',
  components: {
    Key,
    ModK,
    ModKKey,
    TagLink,
    TheLogo,
    TheSpookyLogo,
  },
  inject: ['mq'],
  computed: {
    authIsEvaluated() {
      return this.$store.state.auth.isEvaluated
    },
    context() {
      return this.$store.state.context
    },
    contextTags() {
      return this.context.tags.sort()
    },
    contexts() {
      return this.$store.getters.sortedContexts
    },
    discordInviteLink() {
      return import.meta.env.VITE_DISCORD_INVITE_LINK
    },
    document() {
      return this.$store.getters.currentDoc
    },
    mediumPlus() {
      return ['md', 'lg', 'xl'].includes(this.mq.current)
    },
    modKey() {
      return this.$store.state.modKey
    },
    october() {
      return this.$store.state.settings.theme === 'october'
    },
    tags() {
      return this.$store.getters.tags
    },
    user() {
      return this.$store.state.auth.user
    },
  },
  methods: {
    clearContext() {
      this.$store.dispatch(DEACTIVATE_CONTEXT)
    },
    setContext(context) {
      this.$store.dispatch(SET_CONTEXT_TAGS, { context })
    },
    trackCta() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_GOAL_CTA_SYNC_DOCS, 0)
    },
  },
}
</script>
