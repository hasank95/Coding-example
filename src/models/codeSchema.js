var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var codeSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    code: String,
    comments:[String]
});


module.exports = mongoose.model("Code", codeSchema);
