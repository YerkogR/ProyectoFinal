"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    password: { type: String, required: true },
});
exports.default = mongoose_1.model('Admin', adminSchema, "admin");
