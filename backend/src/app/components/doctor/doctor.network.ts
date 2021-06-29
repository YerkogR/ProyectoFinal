import express, { Request, Response, Router } from "express";
import { Doctor } from "../../models/doctor.model";
import doctorController from "./doctor.controller";

const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
    let doctores;

    try{
        doctores = await doctorController.getAllDoctor();
        res.send(doctores);
    } catch (error) {
        res.send({error: "Unexpected error"})
    }
})

router.get('/:rut', async (req: Request, res: Response) => {
    const rut = req.params['rut'];
    
    let doctor;
    try {
      doctor = await doctorController.getDoctorByRut(rut);
      res.send(doctor);
    } catch (error) {
      res.send({ error: "Unexpected error" })
    }
})

router.get('/:especialidad', async (req: Request, res: Response) => {
    const especialidad = req.params['especialidad'];
    
    let doctor;
    try {
      doctor = await doctorController.getDoctorByEspecialidad(especialidad);
      res.send(doctor);
    } catch (error) {
      res.send({ error: "Unexpected error" })
    }
})

router.post('/', async (req: Request, res: Response) => {
  try{
    const doctor: Doctor = req.body;
    const newDoctor = await doctorController.addDoctor(doctor);
    res.send(newDoctor);
    res.status(201).json(newDoctor);
  }catch(error){
    res.status(500).send({error: "Unexpected error"})
  }
  
})

router.put("/:rut", async (req: Request, res: Response) => {
  const rut: string = req.params.rut;

  try {
    const doctorUpdate: Doctor = req.body;

    const existingDoctor: Doctor = await doctorController.getDoctorByRut(rut);

    if (existingDoctor) {
      const updatedDoctor = await doctorController.updateDoctor(doctorUpdate);
      return res.status(200).json(doctorUpdate);
    }

    const newItem = await doctorController.addDoctor(doctorUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send({error: "Unexpected error"});
  }
});

router.delete('/:rut', async (req: Request, res:Response)=>{
  const rut = req.params['rut'];

  let doctor;
  try{
    doctor = await doctorController.deleteDoctor(rut);
    res.send("doctor eliminado exitosamente");
  }catch (error){
    res.send({error: "Unexpected error"})
  }
})

export default router;