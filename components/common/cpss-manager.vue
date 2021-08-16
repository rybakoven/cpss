<template>
  <v-card flat elevation="0" class="pa-5">
    <div
      v-for="(button, i) in cpssButtons"
      :key="i"
      class="d-inline-block mr-2"
    >
      <v-btn
        :color="button.color"
        :disabled="button.disabled"
        @click="button.action"
      >
        <v-icon left>
          {{ button.icon }}
        </v-icon>
        {{ button.text }}
      </v-btn>
    </div>
    <template-notice ref="modal" :modal="modalParams" />
  </v-card>
</template>

<script>
import NoticeComponent from '~~/components/parts/modal'
import CPSS from '~~/models/cpss'
import Modal from '~~/models/modal'

export default {
  components: {
    templateNotice: NoticeComponent
  },
  props: {
    cpss: {
      type: CPSS,
      required: true
    }
  },

  data () {
    return {
      cpssButtons: [
        {
          color: this.cpss.isOn() ? 'primary' : 'success',
          text: this.cpss.isOn() ? 'Остановить' : 'Запустить',
          icon: this.cpss.isOn() ? 'mdi-stop' : 'mdi-play',
          disabled: false,
          action: this.onCpssUpDownClick
        },
        {
          color: 'error',
          text: 'Удалить',
          icon: 'mdi-delete',
          disabled: this.cpss.isOn(),
          action: this.onCpssRemoveClick
        }
      ],
      loading: false,
      modalParams: Modal
    }
  },

  methods: {
    onCpssUpDownClick (e) {
      e.preventDefault()
      e.stopPropagation()
      this.disabledButtons()
      this.cpss.isOn()
        ? this.cpssDown()
        : this.cpssUp()
    },
    cpssUp () {
      this.cpss.up()
      debugger
      this.modalParams = {
        content: 'Команда запуска стека отправлена, нажмите ок чтобы обновить страницу',
        ok: {
          title: 'Ok',
          callback: () => {
            setTimeout(function () {
              window.location.reload(true)
            }, 2000)
          }
        }
      }
      this.$refs.modal.open()
    },

    cpssDown () {
      debugger
      this.$refs.modal.openModal({
        type: 'confirm',
        content: 'Стек будет остановлен и страница обновится. Продолжить?',
        ok: {
          title: 'Ok',
          callback: () => {
            this.cpss.down()
              .then((result) => {
                console.log('cpss down done', result)
                window.location.reload(true)
                return result
              })
              .catch((err) => {
                this.$refs.modal.open({
                  content: err,
                  ok: {
                    title: 'Ok',
                    callback: () => {}
                  }
                })
              })
          }
        }
      })
    },

    onCpssRemoveClick (e) {
      e.preventDefault()
      e.stopPropagation()
      this.disabledButtons()
      this.loading = true
      this.cpss.remove()
        .then((result) => {
          console.log('cpss remove done', result)
          window.location.href = '/'
          return result
        })
        .catch((err) => {
          alert(err)
        })
    },

    disabledButtons () {
      this.cpssButtons.forEach((button) => {
        button.disabled = true
      })
    }
  }
}
</script>

<style scoped>
</style>
