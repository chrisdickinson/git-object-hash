var sha1 = require('sha1')

module.exports = function(buf) {
  return sha1(buf)
}
