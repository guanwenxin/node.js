const {event} = require('./index')
event.emit('test', {msg: '另一个模块'})