<template>
  <div class="app-header">
    <h1 class="app-header__title">
      CarSharing Helper
    </h1>
    <nav class="app-header__nav">
      <span class="app-header__nav-item">
        Машины на карте
      </span>
      <span class="app-header__nav-item">
        Подбор тарифов
      </span>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
})
</script>

<style lang="scss">
.app-header {
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: $app-white;
  background-color: $app-red;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__nav {
    align-items: center;
    display: flex;
    font-size: 18px;

    &-item {
      margin-left: 20px;
    }
  }

  &__title {
    font-weight: 400;
    font-size: 24px;
  }
}
</style>
