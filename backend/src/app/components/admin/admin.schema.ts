import { model, Schema } from "mongoose";

const adminSchema: Schema = new Schema({
    _id: {type: String, required: true},
    password: {type: String, required: true},
});

export default model('Admin', adminSchema,"admin");