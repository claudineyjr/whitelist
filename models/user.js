const conn = require('database/connection/mongo');
const Schema = conn.mongoose.Schema;

const WhitelistSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  data: Object
}, { collection: 'whitelist' });

module.exports = conn.model('Whitelist', WhitelistSchema);