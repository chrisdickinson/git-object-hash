var rusha = require('./vendor/rusha')
  , sha

sha = new rusha()

module.exports = function(buf) {
  return sha.digestFromArrayBuffer(buf)
}
