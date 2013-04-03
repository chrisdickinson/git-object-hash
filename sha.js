module.exports = sha

var crypto = require('crypto')

function sha(buf) {
  return crypto
    .createHash('sha1')
    .update(buf)
    .digest('hex')  
}
