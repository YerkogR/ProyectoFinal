"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_schema_1 = __importDefault(require("./paciente.schema"));
function getAllPacientes() {
    return paciente_schema_1.default.find();
}
function getPacienteByRut(rut) {
    return paciente_schema_1.default.findOne({ rut: rut });
}
function addPaciente(paciente) {
    return paciente_schema_1.default.create(paciente);
}
function updatePaciente(paciente) {
    return paciente_schema_1.default.updateOne({ rut: paciente.rut }, paciente);
}
function deletePaciente(rut) {
    return paciente_schema_1.default.remove({ rut: rut });
}
exports.default = { getAllPacientes, getPacienteByRut, addPaciente, updatePaciente, deletePaciente };
