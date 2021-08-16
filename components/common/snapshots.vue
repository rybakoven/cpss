<template>
  <div>
    <div class="ma-5 mb-0">
      <v-alert
        v-if="snapshots.cpss.isOn()"
        prominent
        type="info"
        color="deep-orange lighten-3"
        class="mb-0"
      >
        <v-row align="center">
          <v-col class="grow">
            Чтобы сделать снапшот остановите стек.
          </v-col>
          <v-col class="shrink">
            <v-btn
              color="error"
              @click="onCpssDownClick"
            >
              Остановить
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </div>

    <common-snapshot-manager
      :snapshot="snapshots.getSnapshots()[0]"
      action="create"
    />

    <v-sheet>
      <v-simple-table>
        <template #default>
          <thead class="blue-grey lighten-5">
            <tr>
              <th>Снимки</th>
              <th>Создан</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody v-if="snapshots.hasSnapshots()">
            <tr v-for="snapshot in snapshots.getSnapshots()" :key="snapshot.getName()">
              <td>{{ snapshot.getName() }}</td>
              <td>{{ snapshot.getDate() }}</td>
              <td>
                <common-snapshot-manager
                  :snapshot="snapshot"
                  action="manage"
                />
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="3">
                Нет снимков
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
  </div>
</template>

<script>
import CpssSnapshots from '~~/models/snapshots'

export default {
  props: {
    snapshots: {
      type: CpssSnapshots,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    onCpssDownClick (e) {
      e.preventDefault()
      e.stopPropagation()
      this.snapshots.cpss.down()
      setTimeout(function () {
        alert('Команда остановки стека отправлена, нажмите OK чтобы обновить страницу')
        window.location.reload(true)
      }, 3000)
    }
  }
}
</script>

<style scoped>
</style>
