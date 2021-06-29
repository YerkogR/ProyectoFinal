"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doctor_schema_1 = __importDefault(require("./doctor.schema"));
function getAllDoctor() {
    return doctor_schema_1.default.find();
}
function getDoctorByRut(rut) {
    return doctor_schema_1.default.findOne({ rut: rut });
}
function getDoctorByEspecialidad(esp) {
    return doctor_schema_1.default.findOne({ especialidad: esp });
}
function addDoctor(doctor) {
    return doctor_schema_1.default.create(doctor);
}
function updateDoctor(doctor) {
    return doctor_schema_1.default.updateOne({ rut: doctor.rut }, doctor);
}
function deleteDoctor(rut) {
    return doctor_schema_1.default.remove({ rut: rut });
}
exports.default = { getAllDoctor, getDoctorByRut, getDoctorByEspecialidad, addDoctor, updateDoctor, deleteDoctor };
