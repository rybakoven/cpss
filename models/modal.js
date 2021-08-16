'use strict'
const Modal = function () {
  this.description = false
  this.ok = () => { this.close() }
  this.cancel = () => { this.close() }
  this.type = 'alert'
}

Modal.prototype = {
  open (params) {
    debugger
    // todo extends
    this.description = params.description
    this.ok = params.ok
    this.cancel = params.cancel
    this.visible = true
  },
  close () {
    this.visible = false
  }
}

export default Modal
