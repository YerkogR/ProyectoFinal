import { model, Schema, Types } from "mongoose";

const pacienteSchema: Schema = new Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    rut: {type: String, required: true},
    direccion: {type: String, required: true},
    region: {type: String, required: true},
    comuna:{type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

export default model('Paciente', pacienteSchema,"paciente");