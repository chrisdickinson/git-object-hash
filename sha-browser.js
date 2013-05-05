var sha1 = require('sha1')
  , slice = [].slice

module.exports = function(buf) {
  return sha1(slice.call(buf))
}
