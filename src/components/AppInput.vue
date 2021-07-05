<template>
  <cleave
    :value="value"
    :options="options"
    class="app-input"
    @input="onInput"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Cleave from 'vue-cleave-component'

export default Vue.extend({
  name: 'AppInput',
  components: { Cleave },
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      options: {
        numeral: true,
        numeralPositiveOnly: true
      }
    }
  },
  methods: {
    onInput (value: string | number | null) {
      this.$emit('input', value)
    }
  }
})
</script>

<style lang="scss">
.app-input {
  padding: 10px;
  font-size: 18px;
  border: $app-border;
  border-radius: 8px;
  &::placeholder {
    color: $app-black;
  }
}
</style>
