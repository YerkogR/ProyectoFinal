"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consulta_schema_1 = __importDefault(require("./consulta.schema"));
function getAllConsultas() {
    return consulta_schema_1.default.find();
}
function getConsultaById(id) {
    return consulta_schema_1.default.findOne({ id: id });
}
function addConsulta(consulta) {
    return consulta_schema_1.default.create(consulta);
}
function updateConsulta(consulta) {
    return consulta_schema_1.default.updateOne({ _id: consulta._id }, consulta);
}
function deleteConsulta(id) {
    return consulta_schema_1.default.remove({ _id: id });
}
exports.default = { getAllConsultas, getConsultaById, addConsulta, updateConsulta, deleteConsulta };
