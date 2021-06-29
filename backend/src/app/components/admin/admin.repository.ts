import adminModel from "./admin.schema"
import { Admin } from "../../models/admin.model";

function getAllAdmin(){
  return adminModel.find();
}

function getAdminById(id: string){
  return adminModel.findOne({ _id: id });
}

function addAdmin(admin: Admin){
  return adminModel.create(admin);
}

function updateAdmin(admin: Admin){
  return adminModel.updateOne({_id: admin._id}, admin);
}

function deleteAdmin(rut: string){
  return adminModel.remove({rut: rut });
}

export default { getAllAdmin, getAdminById, addAdmin, updateAdmin, deleteAdmin };