import doctorModel from "./doctor.schema"
import { Doctor } from "../../models/doctor.model";

function getAllDoctor(){
  return doctorModel.find();
}

function getDoctorByRut(rut: string){
  return doctorModel.findOne({ rut: rut });
}

function getDoctorByEspecialidad(esp: string){
    return doctorModel.findOne({ especialidad: esp });
}

function addDoctor(doctor: Doctor){
  return doctorModel.create(doctor);
}

function updateDoctor(doctor: Doctor){
  return doctorModel.updateOne({rut: doctor.rut}, doctor);
}

function deleteDoctor(rut: string){
  return doctorModel.remove({rut: rut });
}


export default { getAllDoctor, getDoctorByRut, getDoctorByEspecialidad, addDoctor, updateDoctor, deleteDoctor};