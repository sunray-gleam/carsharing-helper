<template>
  <button
    :class="buttonClass"
    class="app-button"
    @click.prevent="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass () {
      const classes = []

      if (this.disabled) {
        classes.push('app-button--disabled')
      }

      return classes.join(' ')
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
})
</script>

<style lang="scss">
.app-button {
  padding: 10px;
  background-color: $app-button-active;
  border: 0;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  color: $app-white;
  cursor: pointer;

  &--disabled {
    background-color: $app-gray;
  }
}
</style>
