<template>
  <tbody>
    <tr v-for="container in containers" :key="container.getId()">
      <td>
        <common-text-with-tooltip
          :text="container.getService()"
          :tooltip-text="container.getLabels()"
          :image="container.getImage()"
        />
      </td>
      <td v-text="container.getStatus()" />
      <td>
        <common-container-manager />
      </td>
      <td v-text="container.getVersion()" />
      <td v-text="container.getCreationDate()" />
      <td>
        <p v-for="port in container.getPublicPorts()" :key="port" class="ma-0">
          <a v-if="container.checkPort(port)" :href="container.getPublicHref(port)" target="_blank">
            {{ port }}
          </a>
          <span v-else>
            {{ port }}
          </span>
        </p>
      </td>
    </tr>
  </tbody>
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
      containers: this.cpss
        .getStack()
        .getContainers()
    }
  }
}
</script>

<style scoped>

</style>
