import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let weatherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city_id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Weather', weatherSchema);
