"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doctor_repository_1 = __importDefault(require("./doctor.repository"));
function getAllDoctor() {
    return doctor_repository_1.default.getAllDoctor();
}
function getDoctorByRut(rut) {
    return doctor_repository_1.default.getDoctorByRut(rut);
}
function getDoctorByEspecialidad(especialidad) {
    return doctor_repository_1.default.getDoctorByEspecialidad(especialidad);
}
function addDoctor(doctor) {
    return doctor_repository_1.default.addDoctor(doctor);
}
function deleteDoctor(rut) {
    return doctor_repository_1.default.deleteDoctor(rut);
}
function updateDoctor(doctor) {
    return doctor_repository_1.default.updateDoctor(doctor);
}
exports.default = { getAllDoctor, getDoctorByRut, getDoctorByEspecialidad, addDoctor, deleteDoctor, updateDoctor };
