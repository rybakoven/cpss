<template>
  <v-card
    tile
    class="d-flex justify-space-between"
    elevation="0"
    color="transparent"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Площадка</v-list-item-title>
        <v-list-item-subtitle>{{ ('cpss' + descr.getCpssId()) || 'N/A' }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Назначение</v-list-item-title>
        <v-list-item-subtitle>{{ descr.getAim() || 'N/A' }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Проект</v-list-item-title>
        <v-list-item-subtitle>{{ descr.getProject() || 'N/A' }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Конфигурация</v-list-item-title>
        <v-list-item-subtitle>{{ descr.getConfiguration() || 'N/A' }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import CpssDescription from '~~/models/description'

export default {
  props: {
    descr: {
      type: CpssDescription,
      required: true
    },
    color: {
      type: String,
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
