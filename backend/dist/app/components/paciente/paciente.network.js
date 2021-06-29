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
const paciente_controller_1 = __importDefault(require("./paciente.controller"));
const router = express_1.default.Router();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pacientes;
    try {
        pacientes = yield paciente_controller_1.default.getAllPacientes();
        res.send(pacientes);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.get('/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params['rut'];
    let paciente;
    try {
        paciente = yield paciente_controller_1.default.getPacienteByRut(rut);
        res.send(paciente);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = req.body;
        const newPaciente = yield paciente_controller_1.default.addPaciente(paciente);
        res.send(newPaciente);
        res.status(201).json(newPaciente);
    }
    catch (error) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.put("/:rut", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params.rut;
    try {
        const pacienteUpdate = req.body;
        const existingPaciente = yield paciente_controller_1.default.getPacienteByRut(rut);
        if (existingPaciente) {
            const updatedPaciente = yield paciente_controller_1.default.updatePaciente(pacienteUpdate);
            return res.status(200).json(pacienteUpdate);
        }
        const newItem = yield paciente_controller_1.default.addPaciente(pacienteUpdate);
        res.status(201).json(newItem);
    }
    catch (e) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.delete('/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params['rut'];
    let paciente;
    try {
        paciente = yield paciente_controller_1.default.deletePaciente(rut);
        res.send("paciente eliminado exitosamente");
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
exports.default = router;
