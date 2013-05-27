var rusha = require('./vendor/rusha.js')
  , sha

sha = new rusha()

module.exports = function(buf) {
  return sha.digestFromArrayBuffer(buf)
}
