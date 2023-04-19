// npm install --save mongoose
const mongoose = require("mongoose");

const Home_pageSchema = {
    name: {
    type:String,
    required:[true, "Нүүр хуудасны мэдээллийг оруул"],
    unique:true, 
    maxlength:[200, "Нүүр хуудасны нэрний урт дээд тал нь 200 тэмдэгт байнаа"]
},
    description: {
        type: String,
        required: [true, "тайлбaр"],
        maxlength: [1000, "нүүр хуудасны тайлбар" ]
    }, 
    photo: {type: String, default:"no-photo.jpg"},
    createAt: {type: Date, default: Date.now}
}
module.exports = mongoose.model("Home_Page",
 Home_pageSchema);
