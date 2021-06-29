"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doctor_controller_1 = __importDefault(require("./doctor.controller"));
const router = express_1.default.Router();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let doctores;
    try {
        doctores = yield doctor_controller_1.default.getAllDoctor();
        res.send(doctores);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.get('/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params['rut'];
    let doctor;
    try {
        doctor = yield doctor_controller_1.default.getDoctorByRut(rut);
        res.send(doctor);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.get('/:especialidad', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const especialidad = req.params['especialidad'];
    let doctor;
    try {
        doctor = yield doctor_controller_1.default.getDoctorByEspecialidad(especialidad);
        res.send(doctor);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = req.body;
        const newDoctor = yield doctor_controller_1.default.addDoctor(doctor);
        res.send(newDoctor);
        res.status(201).json(newDoctor);
    }
    catch (error) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.put("/:rut", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params.rut;
    try {
        const doctorUpdate = req.body;
        const existingDoctor = yield doctor_controller_1.default.getDoctorByRut(rut);
        if (existingDoctor) {
            const updatedDoctor = yield doctor_controller_1.default.updateDoctor(doctorUpdate);
            return res.status(200).json(doctorUpdate);
        }
        const newItem = yield doctor_controller_1.default.addDoctor(doctorUpdate);
        res.status(201).json(newItem);
    }
    catch (e) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.delete('/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params['rut'];
    let doctor;
    try {
        doctor = yield doctor_controller_1.default.deleteDoctor(rut);
        res.send("doctor eliminado exitosamente");
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
exports.default = router;
