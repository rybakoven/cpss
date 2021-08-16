'use strict'

import CpssSnapshot from '~~/models/snapshot'

const CpssSnapshots = function (cpss, data) {
  this.cpss = cpss
  this.data = data || []
}

CpssSnapshots.prototype = {
  hasSnapshots () {
    return this.data.length > 0
  },

  getSnapshots () {
    return this.data.map((item) => {
      return new CpssSnapshot(this.cpss, item)
    })
  }
}

export default CpssSnapshots
