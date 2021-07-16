const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    description: {
      type: String,
      required: 'description cannot be blank'
    },
    isDone: {
      type: Boolean,
      required: 'isDone  cannot be blank'
    }
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);