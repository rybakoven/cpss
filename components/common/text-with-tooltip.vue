<template>
  <v-tooltip
    content-class="custom-tooltip"
    color="transparent"
    :open-on-click="true"
    :open-on-hover="false"
    right
  >
    <template #activator="{ on, attrs }">
      <div
        v-bind="attrs"
        class="container-component"
        v-on="on"
      >
        <a href="#">{{ text }}</a>
      </div>
    </template>
    <template #default>
      <v-card tile class="pa-3" max-width="540">
        <p
          v-for="(label, key) in tooltipText"
          :key="key"
          class="my-0"
        >
          {{ key }}: <span class="grey--text">{{ label }}</span>
        </p>
        <p class="my-0">
          Image: <span class="grey--text">{{ image }}</span>
        </p>
      </v-card>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    tooltipText: {
      type: [Array, Object],
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.custom-tooltip {
  opacity: 1 !important;
}
.container-component {
  cursor: pointer
}
.container-component a {
  color: #1976d2;
  border-bottom: 1px dashed;
  text-decoration: none;
}
</style>
