import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{ type: String, required: ture},
    name:{type: String, required: ture },
    email:{type: String, required:ture,unique: ture },
    imageUrl: {type: String, required: ture },
    cartItems: {type: Object, default: {} }
},{minimize: false })

const User = mongoose.models.user || mongoose.model('user' ,userSchema)

export default User