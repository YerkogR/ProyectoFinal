import { Doctor} from "../../models/doctor.model";
import doctorRepository from "./doctor.repository";

function getAllDoctor(){
    return doctorRepository.getAllDoctor();
  }
  
  function getDoctorByRut(rut: string){
    return doctorRepository.getDoctorByRut(rut);
  }
  
  function getDoctorByEspecialidad(especialidad: string){
      return doctorRepository.getDoctorByEspecialidad(especialidad);
  }
  
   function addDoctor(doctor: Doctor){
    return doctorRepository.addDoctor(doctor);
  }

  function deleteDoctor(rut: string){
    return doctorRepository.deleteDoctor(rut);
  }

  function updateDoctor(doctor: Doctor){
    return doctorRepository.updateDoctor(doctor);
  }

  export default { getAllDoctor, getDoctorByRut, getDoctorByEspecialidad, addDoctor, deleteDoctor, updateDoctor};