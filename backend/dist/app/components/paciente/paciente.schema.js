"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pacienteSchema = new mongoose_1.Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    rut: { type: String, required: true },
    direccion: { type: String, required: true },
    region: { type: String, required: true },
    comuna: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
exports.default = mongoose_1.model('Paciente', pacienteSchema, "paciente");
