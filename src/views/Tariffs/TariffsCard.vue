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
}
</style>
