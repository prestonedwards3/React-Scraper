const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const artticleSchema = new Schema({ 
    id: {
        type: Schema.Types.ObjectId,
        required: true
      },
    title: {
        type: String,
        required: true
      },
      // `link` is required and of type String
      URL: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      Author: { 
        type: String,
        required: true
      }
})

const Article =mongoose.model("Article", artticleSchema)
module.exports = Article