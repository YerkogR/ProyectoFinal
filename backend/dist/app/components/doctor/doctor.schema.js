"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const doctorSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true },
    especialidad: { type: String, required: true }
});
exports.default = mongoose_1.model('Doctor', doctorSchema, "doctor");
