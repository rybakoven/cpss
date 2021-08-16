<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    app
    permanent
    :expand-on-hover="isMobile"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        :class="[{ 'green lighten-5': item.loaded }, { 'grey lighten-4': !item.loaded }]"
      >
        <v-list-item-action>
          <v-icon v-if="item.loaded" color="green">{{ item.icon }}</v-icon>
          <v-icon v-if="!item.loaded" color="gray">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-tooltip
            content-class="custom-tooltip"
            color="transparent"
            right
          >
            <template #activator="{ on, attrs }">
              <v-list-item-title
                v-bind="attrs"
                v-on="on"
                v-text="item.title"
              />
            </template>

            <!-- todo
            <template #default>
              <v-card tile>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Владелец</v-list-item-title>
                    <v-list-item-subtitle>{{ Владелец }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Путь до площадки</v-list-item-title>
                    <v-list-item-subtitle>{{ Путь }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </template> -->
          </v-tooltip>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
          class: 'white'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: true,
      title: 'CPSS admin',
      isMobile: false
    }
  },
  mounted () {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 700
    }
  },
  async fetch () {
    this.items = await fetch('http://cpss.tais.com:8888/cpss/')
      .then((res) => {
        return res.json()
      })
      .then((containers) => {
        const stackItems = containers.map((container) => {
          const stack = container.cpssId
          return {
            icon: 'mdi-docker',
            title: 'cpss' + stack,
            to: '/cpss/' + stack,
            loaded: container.loaded
          }
        })
        return this.items.concat(stackItems)
      })
  },
  fetchOnServer: false
}
</script>

<style scoped>
.custom-tooltip {
  opacity: 1 !important;
}
</style>
