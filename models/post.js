'use strict'

const post = async (url, body) => {
  return await fetch(
    url,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    }
  )
}

module.exports = post
