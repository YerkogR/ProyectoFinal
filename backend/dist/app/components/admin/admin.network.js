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
const admin_controller_1 = __importDefault(require("./admin.controller"));
const router = express_1.default.Router();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let admins;
    try {
        admins = yield admin_controller_1.default.getAllAdmin();
        res.send(admins);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['_id'];
    let admin;
    try {
        admin = yield admin_controller_1.default.getAdminById(id);
        res.send(admin);
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = req.body;
        const newAdmin = yield admin_controller_1.default.addAdmin(admin);
        res.send(newAdmin);
        res.status(201).json(newAdmin);
    }
    catch (error) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.put("/:rut", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params.rut;
    try {
        const adminUpdate = req.body;
        const existingAdmin = yield admin_controller_1.default.getAdminById(rut);
        if (existingAdmin) {
            const updatedAdmin = yield admin_controller_1.default.updateAdmin(adminUpdate);
            return res.status(200).json(adminUpdate);
        }
        const newItem = yield admin_controller_1.default.addAdmin(adminUpdate);
        res.status(201).json(newItem);
    }
    catch (e) {
        res.status(500).send({ error: "Unexpected error" });
    }
}));
router.delete('/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params['rut'];
    let admin;
    try {
        admin = yield admin_controller_1.default.deleteAdmin(rut);
        res.send("admin eliminado exitosamente");
    }
    catch (error) {
        res.send({ error: "Unexpected error" });
    }
}));
exports.default = router;
