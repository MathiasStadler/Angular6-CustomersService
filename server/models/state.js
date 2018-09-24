const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const ObjectId = Schema.ObjectId;

const StateSchema = new Schema({
  id: {type: Number, required: true},
  abbreviation: {type: String, required: true, trim: true},
  name: {type: String, required: true, trim: true},
});

module.exports = mongoose.model('State', StateSchema);

