"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_repository_1 = __importDefault(require("./admin.repository"));
function getAllAdmin() {
    return admin_repository_1.default.getAllAdmin();
}
function getAdminById(id) {
    return admin_repository_1.default.getAdminById(id);
}
function addAdmin(admin) {
    return admin_repository_1.default.addAdmin(admin);
}
function deleteAdmin(rut) {
    return admin_repository_1.default.deleteAdmin(rut);
}
function updateAdmin(admin) {
    return admin_repository_1.default.updateAdmin(admin);
}
exports.default = { getAllAdmin, getAdminById, addAdmin, deleteAdmin, updateAdmin };
