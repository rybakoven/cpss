<template>
  <v-container>
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col>
        <v-card>
          <v-app-bar
            :color="color"
            dark
          >
            <common-description
              :descr="cpss.getDescription()"
              :color="color"
            />
            <v-spacer />
            <template #extension>
              <v-tabs v-model="tabs">
                <v-tab>
                  <v-badge
                    color="green"
                    :content="cpssLength"
                    :value="cpssLength"
                  >
                    Стек
                  </v-badge>
                </v-tab>
                <v-tab>
                  <v-badge
                    color="green"
                    :content="snapshots.data.length"
                    :value="snapshots.data.length"
                  >
                    Снапшоты
                  </v-badge>
                </v-tab>
              </v-tabs>
            </template>
          </v-app-bar>

          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-card>
                <common-stack
                  :cpss="cpss"
                />
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <common-snapshots
                  :snapshots="snapshots"
                />
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CPSS from '~~/models/cpss'

export default {
  async asyncData ({ params }) {
    const cpss = new CPSS(params.cpss)
    return {
      cpss: await cpss.fetch()
    }
  },

  data () {
    return {
      tabs: null
    }
  },

  computed: {
    color () {
      return this.cpss.isOn() ? 'green' : 'grey lighten-1'
    },
    snapshots () {
      return this.cpss.getSnapshots()
    },
    cpssLength () {
      return this.cpss.data.containers
        ? this.cpss.data.containers.length
        : 0
    }
  }

}
</script>

<style></style>
