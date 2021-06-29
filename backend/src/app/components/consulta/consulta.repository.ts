import consultaModel from "./consulta.schema"
import { Consulta } from "../../models/consulta.model";

function getAllConsultas(){
  return consultaModel.find();
}

function getConsultaById(id: string){
  return consultaModel.findOne({ id: id });
}

function addConsulta(consulta: Consulta){
  return consultaModel.create(consulta);
}

function updateConsulta(consulta: Consulta){
  return consultaModel.updateOne({_id: consulta._id}, consulta);
}

function deleteConsulta(id: string){
  return consultaModel.remove({_id: id });
}

export default { getAllConsultas, getConsultaById, addConsulta, updateConsulta, deleteConsulta };