'use strict'

const CpssDescription = function (cpss, data) {
  this.cpss = cpss
  this.data = data
  this.knownInfo = data.knownInfo
}

CpssDescription.prototype = {
  getCpssId () {
    return this.data.cpssId
  },

  getOwner () {
    return this.knownInfo.owner
  },

  getAim () {
    return this.knownInfo.descr
  },

  getProject () {
    return this.knownInfo.project
  },

  getConfiguration () {
    return this.knownInfo.conf
  },

  getPath () {
    return this.knownInfo.path
  }
}

export default CpssDescription
