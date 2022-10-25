import mongoose from "mongoose";

const taskSchmea = new mongoose.Schema({
    task : {type : String, required : true},
    compledted : {type : Boolean, default : false }
})

export default mongoose.models.Task || mongoose.model("Task", taskSchmea);