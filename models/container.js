'use strict'

import moment from 'moment'
import checkPort from '~~/models/ports'

const Container = function (data) {
  this.data = data || []
}

Container.prototype = {
  getId () {
    return this.data.cpssId
  },

  getPublicPorts () {
    return this.data.Ports.map((port) => {
      return port.PublicPort || null
    }).filter((port) => {
      return port !== null
    })
  },

  getImage () {
    return this.data.Image
  },

  checkPort (port) {
    return checkPort(port)
  },

  getPublicHref (port) {
    return 'http://cpss.tais.com:' + port
  },

  getVersion () {
    const labels = this.data.Labels
    let version = labels['ors.product.tag'] || labels['ors.product.commit']
    if (!version && this.data.Image.substr(0, 6) !== 'sha256') {
      const versionStart = this.data.Image.lastIndexOf(':')
      if (versionStart > 0) {
        version = this.data.Image.substr(versionStart + 1)
      }
    }

    if (!version) {
      version = 'N/A'
    }
    return version
  },

  getLabels () {
    return this.data.Labels
  },

  getStatus () {
    return this.data.Status
  },

  getService () {
    return this.data.Labels['com.docker.compose.service'] || 'unknown'
  },

  getCreationDate () {
    return moment.unix(this.data.Created).format('YYYY-MM-DD hh:mm')
  }
}

export default Container
