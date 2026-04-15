import mongoose from "mongoose";
const travelSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },
    location:{
        type : String,
        required : true,
    },
    description:{
        type : String,
        required : true,
    },
    price:{
        type : Number,
    },
    rating :{
        type : Number,
    },

})

const Travel = mongoose.model("Travel", travelSchema);
export default Travel;