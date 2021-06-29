"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const consulta_network_1 = __importDefault(require("./consulta.network"));
const consulta = express_1.default();
consulta.use("/consulta", consulta_network_1.default);
exports.default = consulta;
