var sha = require('./sha.js')
  , binary = require('bops')

module.exports = hashify

function hashify(obj) {
  var buf = obj.serialize()
    , header

  header = binary.from(
    obj.looseType + ' ' + buf.length + '\0', 'utf8'
  )

  buf = binary.join([header, buf])
  return sha(buf)
}
