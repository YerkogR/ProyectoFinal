import pacienteModel from "./paciente.schema"
import { Paciente } from "../../models/paciente.model";

function getAllPacientes(){
  return pacienteModel.find();
}

function getPacienteByRut(rut: string){
  return pacienteModel.findOne({ rut: rut });
}

function addPaciente(paciente: Paciente){
  return pacienteModel.create(paciente);
}

function updatePaciente(paciente: Paciente){
  return pacienteModel.updateOne({rut: paciente.rut}, paciente);
}

function deletePaciente(rut: string){
  return pacienteModel.remove({rut: rut });
}

export default { getAllPacientes, getPacienteByRut, addPaciente, updatePaciente, deletePaciente};