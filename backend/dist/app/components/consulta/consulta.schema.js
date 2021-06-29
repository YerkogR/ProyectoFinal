"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const consultaSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    rutDoctor: { type: String, required: true },
    rutConsulta: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    estado: { type: Number, required: true },
    descripcion: { type: String, required: true }
});
exports.default = mongoose_1.model('Consulta', consultaSchema, "consulta");
