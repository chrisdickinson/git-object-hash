var sha1 = require('sha1')

module.exports = function(buf) {
  var bytes = [].slice.call(buf.parent, buf.offset, buf.offset + buf.length)
  return sha1(bytes)
}
