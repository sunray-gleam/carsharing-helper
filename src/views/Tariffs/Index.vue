<template>
  <article class="tariffs">
    <h1 class="tariffs__header">
      Подбор тарифов для поездки
    </h1>
    <div class="tariffs__row">
      <AppInput
        v-model="kilometers"
        placeholder="Сколько нужно километров"
        class="tariffs__input"
      />
      <AppInput
        v-model="driveMinutes"
        placeholder="Сколько нужно минут поездки"
        class="tariffs__input"
      />
      <AppInput
        v-model="parkingMinutes"
        placeholder="Сколько нужно минут парковки"
        class="tariffs__input"
      />
      <AppButton @click="onButtonClick">
        Подобрать
      </AppButton>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'
import api from '@/api'

export default Vue.extend({
  name: 'Tariffs',
  components: {
    AppInput,
    AppButton
  },
  data () {
    return {
      kilometers: '',
      driveMinutes: '',
      parkingMinutes: ''
    }
  },
  methods: {
    async onButtonClick () {
      const response = await api.tariffs.get.rateCalculate({
        neededKilometers: this.kilometers,
        neededMinutes: this.driveMinutes,
        neededParkingMinutes: this.parkingMinutes
      })

      console.log(response.data)
    }
  }
})
</script>

<style lang="scss">
.tariffs {
  display: flex;
  flex-direction: column;
  padding: 30px 60px;

  &__row {
    display: flex;
    flex-direction: row;
    margin-left: -15px;

    & > * {
      margin-left: 15px;
    }
  }

  &__input {
    flex-basis: 360px;
  }
}
</style>
