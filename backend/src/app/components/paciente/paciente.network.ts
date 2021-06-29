import express, { Request, Response, Router } from "express";
import { Paciente } from "../../models/paciente.model";
import pacienteController from "./paciente.controller";

const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
    let pacientes;

    try{
        pacientes = await pacienteController.getAllPacientes();
        res.send(pacientes);
    } catch (error) {
        res.send({error: "Unexpected error"})
    }
})

router.get('/:rut', async (req: Request, res: Response) => {
    const rut = req.params['rut'];
    
    let paciente;
    try {
      paciente = await pacienteController.getPacienteByRut(rut);
      res.send(paciente);
    } catch (error) {
      res.send({ error: "Unexpected error" })
    }
})

router.post('/', async (req: Request, res: Response) => {
  try{
    const paciente: Paciente = req.body;
    const newPaciente = await pacienteController.addPaciente(paciente);
    res.send(newPaciente);
    res.status(201).json(newPaciente);
  }catch(error){
    res.status(500).send({error: "Unexpected error"})
  }
  
})

router.put("/:rut", async (req: Request, res: Response) => {
  const rut: string = req.params.rut;

  try {
    const pacienteUpdate: Paciente = req.body;

    const existingPaciente: Paciente = await pacienteController.getPacienteByRut(rut);

    if (existingPaciente) {
      const updatedPaciente = await pacienteController.updatePaciente(pacienteUpdate);
      return res.status(200).json(pacienteUpdate);
    }

    const newItem = await pacienteController.addPaciente(pacienteUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send({error: "Unexpected error"});
  }
});

router.delete('/:rut', async (req: Request, res:Response)=>{
  const rut = req.params['rut'];

  let paciente;
  try{
    paciente = await pacienteController.deletePaciente(rut);
    res.send("paciente eliminado exitosamente");
  }catch (error){
    res.send({error: "Unexpected error"})
  }
})

export default router;