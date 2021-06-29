import { Admin} from "../../models/admin.model";
import adminRepository from "./admin.repository";

function getAllAdmin(){
  return adminRepository.getAllAdmin();
}
  
function getAdminById(id: string){
  return adminRepository.getAdminById(id);
}

function addAdmin(admin: Admin){
  return adminRepository.addAdmin(admin);
}

function deleteAdmin(rut: string){
  return adminRepository.deleteAdmin(rut);
}

function updateAdmin(admin: Admin){
  return adminRepository.updateAdmin(admin);
}


export default { getAllAdmin, getAdminById, addAdmin, deleteAdmin, updateAdmin };