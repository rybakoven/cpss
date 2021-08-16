<template>
  <div v-if="action === 'create'">
    <v-btn
      class="ma-5"
      color="success"
      :disabled="disabled"
      @click="onSnapshotClick('create')"
    >
      Создать снимок
    </v-btn>
  </div>

  <div v-else-if="action === 'manage'">
    <v-btn
      v-for="button in buttons"
      :key="button.text"
      :color="button.color"
      :disabled="disabled"
      class="mr-1"
      x-small
      @click="onSnapshotClick(
        button.action,
        snapshot.getName()
      )"
      v-text="button.text"
    />
  </div>
</template>

<script>
import CpssSnapshot from '~~/models/snapshot'

export default {
  props: {
    snapshot: {
      type: [CpssSnapshot, Array],
      required: true
    },
    action: {
      type: String,
      required: false,
      default: null
    }
  },

  data () {
    return {
      buttons: [
        {
          text: 'вернуться к снимку',
          color: 'success',
          action: 'checkout'
        },
        {
          text: 'удалить',
          color: 'error',
          action: 'delete'
        }
      ],
      disabled: false
    }
  },

  mounted () {
    debugger
    this.disabled = this.snapshot.cpss.isOn()
  },

  methods: {
    onSnapshotClick (type, name) {
      name = name || this.snapshot.setSnapshotName()
      if (!name) {
        return false
      }
      name = name.trim()
      this.disabledButton = true
      this.snapshot[type]()
        .then((result) => {
          if (result.code === 1) {
            this.result = result.out
            alert(result.out)
            return result
          }
          console.log('snapshot done', result)
          alert('snapshot ' + name + ' ' + type + ' done')
          window.location.reload(true)
          return result
        })
        .catch((err) => {
          alert(err)
          this.result = err
        })
        .finally(() => {
          this.disabledButton = false
        })
    }
  }
}
</script>

<style scoped>

</style>
