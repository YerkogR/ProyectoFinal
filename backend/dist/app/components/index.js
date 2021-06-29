"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("./admin"));
const consulta_1 = __importDefault(require("./consulta"));
const doctor_1 = __importDefault(require("./doctor"));
const paciente_1 = __importDefault(require("./paciente"));
const components = [
    admin_1.default,
    consulta_1.default,
    doctor_1.default,
    paciente_1.default
];
exports.default = components;
/*
    {
    "nombre": "Holi",
    "apellidos": "string",
    "rut": "12345678-9",
    "direccion": "av. siempreviva",
    "comuna": "illapel",
    "region": "coquimbo",
    "email": "string@mail.com",
    "password": "contraseña",
    "consultas": []
    }
*/ 
