var crypto = require('crypto')
  , Buffer = require('buffer').Buffer

module.exports = hashify

function hashify(obj) {
  var buf = obj.serialize()
    , header
    
  header = new Buffer(
    obj.looseType + ' ' + buf.length + '\0', 'utf8'
  )

  buf = Buffer.concat([header, buf], header.length + buf.length)
  return crypto
    .createHash('sha1')
    .update(buf)
    .digest('hex')  
}
