<template>
  <div class="text-center">
    <v-dialog
      :value="visible"
      persistent
      width="500"
    >
      <v-card>
        <v-card-text>
          {{ modalContent }}
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="ok.callback"
            @click.stop="modal.close()"
          >
            {{ ok.title }}
          </v-btn>
          <v-btn
            v-if="type === 'confirm'"
            color="primary"
            text
            @click="cancel.callback"
            @click.stop="modal.close()"
          >
            {{ cancel.title }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Modal from '~~/models/modal'

export default {
  props: {
    modal: {
      type: Modal
    }
  },
  data () {
    return {
      modalContent: '',
      ok: {
        title: '',
        callback: () => {}
      },
      cancel: {
        title: '',
        callback: () => {}
      },
      newmodal: new Modal(),
      type: 'alert' // alert | confirm | prompt
    }
  },
  computed: {
    newModal () {
      return new Modal(this)
    },
    visible () {
      debugger
      return this.newmodal.visible
    }
  },
  methods: {
    closeModal () {
      this.modal.close()
    },
    openModal (params) {
      debugger
      this.newModal.open(params)
    }
  }
}
</script>

<style scoped>

</style>
