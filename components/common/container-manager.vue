<template>
  <div class="d-flex align-center">
    <v-btn
      v-for="button in buttons"
      :key="button.text"
      :color="button.color"
      class="mr-1"
      x-small
      disabled
      v-text="button.text"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: [
        {
          text: 'log',
          color: 'primary',
          action: ''
        },
        {
          text: 'sh',
          color: 'primary',
          action: ''
        },
        {
          text: 'restart',
          color: 'error',
          action: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
