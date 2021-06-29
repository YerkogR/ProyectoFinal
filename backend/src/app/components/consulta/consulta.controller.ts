import { Consulta } from "../../models/consulta.model";
import consultaRepository from "./consulta.repository";

function getAllConsultas(){
  return consultaRepository.getAllConsultas();
}

function getConsultaById(id: string){
  return consultaRepository.getConsultaById(id);
}
  
function addConsulta(consulta: Consulta){
  return consultaRepository.addConsulta(consulta);
}

function deleteConsulta(id: string){
  return consultaRepository.deleteConsulta(id);
}

function updateConsulta(consulta: Consulta){
  return consultaRepository.updateConsulta(consulta);
}

  export default { getAllConsultas, getConsultaById, addConsulta, deleteConsulta, updateConsulta };