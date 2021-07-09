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
    <h2
      v-if="tariffs.length"
      class="tariffs__description"
    >
      Наиболее подходящие тарифы
    </h2>
    <section class="tariffs__list">
      <TariffsCard
        v-for="tariff in tariffs"
        :key="tariff.rate.id"
        :price="tariff"
        class="tariffs__tariff-card"
      />
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'
import TariffsCard from './TariffsCard.vue'
import api from '@/api'
import PriceResponse from '@/models/PriceResponse'

export default Vue.extend({
  name: 'Tariffs',
  components: {
    AppInput,
    AppButton,
    TariffsCard
  },
  data () {
    return {
      kilometers: '',
      driveMinutes: '',
      parkingMinutes: '',
      tariffs: Array<PriceResponse>()
    }
  },
  methods: {
    async onButtonClick () {
      const response = await api.tariffs.get.rateCalculate({
        neededKilometers: this.kilometers,
        neededMinutes: this.driveMinutes,
        neededParkingMinutes: this.parkingMinutes
      })

      this.tariffs = response.data.prices
    }
  }
})
</script>

<style lang="scss">
.tariffs {
  $margin-base: 15px;

  display: flex;
  flex-direction: column;
  padding: 30px 60px;

  &__input {
    flex-basis: 360px;
  }

  &__row {
    display: flex;
    margin-top: -$margin-base;
    margin-left: -$margin-base;

    & > * {
      margin-top: $margin-base;
      margin-left: $margin-base;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: -$margin-base;
    margin-left: -$margin-base;
    align-items: flex-start;

    & > * {
      margin-top: $margin-base;
      margin-left: $margin-base;
    }
  }

  &__tariff-card {
    width: 280px;
  }

  &__description {
    margin: 20px 0;
    font-size: 24px;
    font-weight: 400;
  }

  @media screen and (max-width: 767px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 979px) {
    &__row {
      flex-direction: column;
    }

    &__input {
      flex-basis: initial;
    }
  }
}
</style>
