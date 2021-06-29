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
const consulta_controller_1 = __importDefault(require("./consulta.controller"));
const router = express_1.default.Router();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let consultas;
    try {
        consultas = yield consulta_controller_1.default.getAllConsultas();
        res.send(consultas);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    let consulta;
    try {
        consulta = yield consulta_controller_1.default.getConsultaById(id);
        res.send(consulta);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consulta = req.body;
        const newConsulta = yield consulta_controller_1.default.addConsulta(consulta);
        res.send(newConsulta);
        res.status(201).json(newConsulta);
    }
    catch (error) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const consultaUpdate = req.body;
        const existingConsulta = yield consulta_controller_1.default.getConsultaById(id);
        if (existingConsulta) {
            const updatedConsulta = yield consulta_controller_1.default.updateConsulta(consultaUpdate);
            return res.status(200).json(consultaUpdate);
        }
        const newItem = yield consulta_controller_1.default.addConsulta(consultaUpdate);
        res.status(201).json(newItem);
    }
    catch (e) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    let consulta;
    try {
        consulta = yield consulta_controller_1.default.deleteConsulta(id);
        res.send("consulta eliminado exitosamente");
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
exports.default = router;
