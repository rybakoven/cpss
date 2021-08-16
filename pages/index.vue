<template>
  <v-row justify="center" align="center">
    <v-col class="mt-10" cols="12" sm="8" md="6">
      <v-alert
        border="left"
        colored-border
        color="green lighten-3"
        elevation="2"
      >
        <p>Выберите стек слева в навигации</p>
        <p class="green lighten-5 pa-2">
          <v-icon color="green">mdi-docker</v-icon>
          Запущенный стек
        </p>
        <p class="grey lighten-4 pa-2 mb-0">
          <v-icon>mdi-docker</v-icon>
          Остановленный стек
        </p>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
</script>
