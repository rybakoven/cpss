'use strict'

import CpssDescription from '~~/models/description'
import CpssStack from '~~/models/stack'
import CpssSnapshots from '~~/models/snapshots'
import config from '~~/models/config'
import post from '~~/models/post'

const CPSS = function (cpssId) {
  this.cpssId = cpssId
  this.data = null
  this.snapshots = null
}

CPSS.prototype = {
  async fetch () {
    this.data = await fetch(this.getCpssEndPoint())
      .then((res) => {
        return res.json()
      })
    this.snapshots = await fetch(this.getCpssSnapshotsEndPoint())
      .then((res) => {
        return res.json()
      })
    return this
  },

  isOn () {
    return this.data.loaded
  },

  getCpssId () {
    return this.cpssId
  },

  getCpssEndPoint () {
    return config.baseUrl + 'cpss/' + this.cpssId
  },

  getCpssSnapshotsEndPoint () {
    return this.getCpssEndPoint() + '/snapshots/'
  },

  getDescription () {
    return new CpssDescription(this, this.data)
  },

  getStack () {
    return new CpssStack(this, this.data)
  },

  getSnapshots () {
    return new CpssSnapshots(this, this.snapshots)
  },

  async doAction (action, params) {
    const url = this.getCpssEndPoint()
    return await post(
      url,
      {
        action,
        params
      }
    ).then((res) => {
      return res.json()
    })
  },

  async up () {
    return await this.doAction('up', {})
  },

  async down () {
    return await this.doAction('down', {})
  },

  async remove () {
    return await this.doAction('rm', {})
  }
}

export default CPSS
