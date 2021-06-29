"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_repository_1 = __importDefault(require("./paciente.repository"));
function getAllPacientes() {
    return paciente_repository_1.default.getAllPacientes();
}
function getPacienteByRut(rut) {
    return paciente_repository_1.default.getPacienteByRut(rut);
}
function addPaciente(paciente) {
    return paciente_repository_1.default.addPaciente(paciente);
}
function deletePaciente(rut) {
    return paciente_repository_1.default.deletePaciente(rut);
}
function updatePaciente(paciente) {
    return paciente_repository_1.default.updatePaciente(paciente);
}
exports.default = { getAllPacientes, getPacienteByRut, addPaciente, updatePaciente, deletePaciente };
