<template>
  <main class="main-layout">
    <AppHeader />
    <router-view />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/AppHeader.vue'

export default Vue.extend({
  name: 'MainLayout',
  components: {
    AppHeader
  }
})
</script>
