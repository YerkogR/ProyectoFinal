"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_schema_1 = __importDefault(require("./admin.schema"));
function getAllAdmin() {
    return admin_schema_1.default.find();
}
function getAdminById(id) {
    return admin_schema_1.default.findOne({ _id: id });
}
function addAdmin(admin) {
    return admin_schema_1.default.create(admin);
}
function updateAdmin(admin) {
    return admin_schema_1.default.updateOne({ _id: admin._id }, admin);
}
function deleteAdmin(rut) {
    return admin_schema_1.default.remove({ rut: rut });
}
exports.default = { getAllAdmin, getAdminById, addAdmin, updateAdmin, deleteAdmin };
