'use strict'

import Container from '~~/models/container'

const CpssStack = function (cpss, data) {
  this.cpss = cpss
  this.data = data
}

CpssStack.prototype = {
  getContainers () {
    if (!this.data.containers) {
      return false
    }
    const c = this.data.containers.slice() || []
    c.sort((containerA, containerB) => {
      return containerA.Labels['com.docker.compose.service'] >
      containerB.Labels['com.docker.compose.service']
        ? 1
        : -1
    })
    return c.map((container) => {
      return new Container(container)
    })
  }
}

export default CpssStack
