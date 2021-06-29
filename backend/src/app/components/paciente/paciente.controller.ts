import { Paciente} from "../../models/paciente.model";
import pacienteRepository from "./paciente.repository";

function getAllPacientes(){
    return pacienteRepository.getAllPacientes();
  }
  
  function getPacienteByRut(rut: string){
    return pacienteRepository.getPacienteByRut(rut);
  }
  
  function addPaciente(paciente: Paciente){
    return pacienteRepository.addPaciente(paciente);
  }
  
  function deletePaciente(rut: string){
    return pacienteRepository.deletePaciente(rut);
  }

  function updatePaciente(paciente: Paciente){
    return pacienteRepository.updatePaciente(paciente);
  }

  export default { getAllPacientes, getPacienteByRut, addPaciente, updatePaciente, deletePaciente};