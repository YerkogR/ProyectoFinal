import { model, Schema } from "mongoose";

const doctorSchema: Schema = new Schema({
    nombre: {type: String, required: true},
    rut: {type: String, required: true},
    especialidad: {type: String, required: true}
});

export default model('Doctor', doctorSchema,"doctor");