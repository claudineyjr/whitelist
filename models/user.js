const conn = require('database/connection/mongo');
const Schema = conn.mongoose.Schema;

const UserSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  data: Object
}, { collection: 'Users' });

module.exports = conn.model('User', UserSchema);