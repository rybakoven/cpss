<template>
  <div>
    <common-cpss-manager :cpss="cpss" />

    <v-simple-table v-if="cpss.isOn()">
      <template #default>
        <thead class="blue-grey lighten-5">
          <tr>
            <th>Компонент</th>
            <th>Статус</th>
            <th>Действия</th>
            <th>Версия</th>
            <th>Создан</th>
            <th>Ports</th>
          </tr>
        </thead>
        <common-containers :cpss="cpss" />
      </template>
    </v-simple-table>
  </div>
</template>

<script>

import CPSS from '~~/models/cpss'

export default {
  props: {
    cpss: {
      type: CPSS,
      required: true
    }
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
