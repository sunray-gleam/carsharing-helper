<template>
  <div class="tariffs-card">
    <div class="tariffs-card__header-container">
      <h3 class="tariffs-card__header">
        Тариф: {{ price.rate.name }}
      </h3>
      <span class="tariffs-card__vendor">
        Каршеринг: {{ price.carsharing.name }}
      </span>
    </div>
    <ul class="tariffs-card__list">
      <li
        v-for="item in rateItems"
        :key="item.name"
        class="tariffs-card__list-item"
      >
        <span> {{ item.name }} </span>
        <span> {{ item.value }} </span>
      </li>
    </ul>
    <ul class="tariffs-card__list">
      <li class="tariffs-card__list-item">
        <span> Стоимость тарифа: </span>
        <span> {{ price.rate.price }} BYN </span>
      </li>
      <li
        v-for="item in detailItems"
        :key="item.name"
        class="tariffs-card__list-item"
      >
        <span> {{ item.name }}: </span>
        <span> {{ item.value }} </span>
      </li>
    </ul>
    <p class="tariffs-card__total">
      Итого:
      <strong class="tariffs-card__total-price">
        {{ price.price }} BYN
      </strong>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PriceResponse from '@/models/PriceResponse'

const rateItemsFields = [
  {
    fieldName: 'minutePrice',
    name: 'Стоимость минуты',
    isPrice: true
  },
  {
    fieldName: 'kilometerPrice',
    name: 'Стоимость километра',
    isPrice: true
  },
  {
    fieldName: 'includedKilometers',
    name: 'Включено километров',
  },
  {
    fieldName: 'includedMinutes',
    name: 'Включено минут',
  },
]
    // additionalKilometersPrice: number,
    // additionalMinutesPrice: number,
    // additionalParkingPrice: number,
    // neededAdditionalKilometers: number,
    // neededAdditionalMinutes: number,
    // neededAdditionalParking: number
const detailItemsFields = [
  {
    fieldName: 'neededAdditionalKilometers',
    name: 'Дополнительный километраж'
  },
  {
    fieldName: 'neededAdditionalMinutes',
    name: 'Дополнительные минуты'
  },
  {
    fieldName: 'additionalKilometersPrice',
    name: 'Cтоимость доп. километража',
    isPrice: true
  },
  {
    fieldName: 'neededAdditionalMinutes',
    name: 'Cтоимость доп. минут',
    isPrice: true
  }
]

export default Vue.extend({
  name: 'TariffsCard',
  props: {
    price: {
      type: Object as () => PriceResponse,
      required: true
    }
  },
  computed: {
    rateItems () {
      return rateItemsFields.map(x => {
        const value = this.price.rate[x.fieldName]

        return {
          name: x.name,
          value: x.isPrice ?
            `${value} BYN`
            : value
        }
      })
    },
    detailItems () {
      const mappedDetails = detailItemsFields.map(x => {
        const value = this.price.details[x.fieldName]

        return {
          name: x.name,
          value: x.isPrice ?
            `${value} BYN`
            : value
        }
      })

      return mappedDetails
    }
  }
})
</script>

<style lang="scss">
.tariffs-card {
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 7px;

  &__header-container {
    display: flex;
    justify-content: space-between;
  }

  &__vendor {
    color: $app-gray;
    font-size: 10px;
  }

  &__header {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
  }

  &__list {
    padding: 0;
    font-size: 12px;

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
}
</style>
