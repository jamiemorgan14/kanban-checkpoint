let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Task'

let subComment = new Schema({
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true })

let schema = new Schema({
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  listId: { type: ObjectId, ref: 'Lists', required: true },
  completed: { type: Boolean, required: true, default: false },
  subComments: [subComment]
}, { timestamps: true })

//CASCADE ON DELETE




module.exports = mongoose.model(schemaName, schema)