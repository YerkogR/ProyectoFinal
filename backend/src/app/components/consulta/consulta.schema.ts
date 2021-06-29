import { model, Schema } from "mongoose";

const consultaSchema: Schema = new Schema({
    _id: {type: String, required: true},
    rutDoctor: {type: String, required: true},
    rutConsulta: {type: String, required: true},
    fecha: {type: String, required: true},
    hora: {type: String, required: true},
    estado: {type: Number, required: true},
    descripcion: {type: String, required: true}
});

export default model('Consulta', consultaSchema,"consulta");