const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
mongoose.Promise = Promise;
mongoose.set('debug', true);

/*mongoose.connect('mongodb://localhost/game', {
  server: {
    socketOptions: {
      keepAlive: 1
    },
    poolSize: 5
  }
});

mongoose.plugin(beautifyUnique);*/

module.exports = mongoose;
