const mongoose = require('./mongoose');

// this schema can be reused in another schema
const userSchema = new mongoose.Schema({
  Foto: {
    type:       String,
    required:   'Необходима фотография игрока', 
    lowercase:  true, 
    trim:       true
  },
  Name: {
    type: String,
    required: 'Укажите имя игрока',
    //lowercase:  true, 
    trim:       true
  },
  ID: {
    type: String,
    required: 'Укажите ID',
    unique: 'Такой ID уже существует',
    trim:   true
  },
  Score: {
    type: Number,
    required: 'Укажите счёт',
    trim:   true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);