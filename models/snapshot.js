'use strict'

import post from '~~/models/post'

const CpssSnapshot = function (cpss, data) {
  this.cpss = cpss
  this.name = data.name.trim()
  this.date = data.date
}

CpssSnapshot.prototype = {
  getName () {
    return this.name
  },

  getDate () {
    return this.date
  },

  setSnapshotName () {
    const snapshots = this.cpss.snapshots
    const name = prompt('Введите имя снапшота, латиница и цифры без пробелов')

    if (!name) {
      return false
    }

    if (!/^[a-z0-9]+$/i.test(name)) {
      alert('Недопустимые символы!')
      return this.setSnapshotName()
    }

    const nameIsUse = snapshots.filter((item) => {
      return item.name.trim() === name
    }).length

    if (nameIsUse) {
      alert('Такое имя уже используется!')
      return this.setSnapshotName()
    }

    return name
  },

  async doAction (action) {
    const self = this
    const url = this.cpss.getCpssSnapshotsEndPoint()
    return await post(
      url,
      {
        action,
        name: self.name
      })
      .then((res) => {
        return res.json()
      })
  },

  async checkout () {
    return await this.doAction('revert')
  },

  async delete () {
    return await this.doAction('delete')
  },

  async create () {
    return await this.doAction('create')
  }
}

export default CpssSnapshot
