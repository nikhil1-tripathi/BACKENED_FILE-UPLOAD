const mongoose = require("mongoose");


const picSchema = new mongoose.Schema({
    pictures:[{type:String, required:true}],
    user_id:{type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        required:true}
},
{
    versionKey:false,
    timestamps:true
}
)

const pic = mongoose.model("pic",picSchema);

module.exports = pic;