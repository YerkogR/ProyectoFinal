"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consulta_repository_1 = __importDefault(require("./consulta.repository"));
function getAllConsultas() {
    return consulta_repository_1.default.getAllConsultas();
}
function getConsultaById(id) {
    return consulta_repository_1.default.getConsultaById(id);
}
function addConsulta(consulta) {
    return consulta_repository_1.default.addConsulta(consulta);
}
function deleteConsulta(id) {
    return consulta_repository_1.default.deleteConsulta(id);
}
function updateConsulta(consulta) {
    return consulta_repository_1.default.updateConsulta(consulta);
}
exports.default = { getAllConsultas, getConsultaById, addConsulta, deleteConsulta, updateConsulta };
