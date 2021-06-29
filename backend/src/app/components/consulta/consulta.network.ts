import express, { Request, Response, Router } from "express";
import { Consulta } from "../../models/consulta.model";
import consultaController from "./consulta.controller";

const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
    let consultas;

    try{
        consultas = await consultaController.getAllConsultas();
        res.send(consultas);
    } catch (error) {
        res.send({error: "Unexpected error"})
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params['id'];
    
    let consulta;
    try {
      consulta = await consultaController.getConsultaById(id);
      res.send(consulta);
    } catch (error) {
      res.send({ error: "Unexpected error" })
    }
})

router.post('/', async (req: Request, res: Response) => {
  try{
    const consulta: Consulta = req.body;
    const newConsulta = await consultaController.addConsulta(consulta);
    res.send(newConsulta);
    res.status(201).json(newConsulta);
  }catch(error){
    res.status(500).send({error: "Unexpected error"})
  }
  
})

router.put("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const consultaUpdate: Consulta = req.body;

    const existingConsulta: Consulta = await consultaController.getConsultaById(id);

    if (existingConsulta) {
      const updatedConsulta = await consultaController.updateConsulta(consultaUpdate);
      return res.status(200).json(consultaUpdate);
    }

    const newItem = await consultaController.addConsulta(consultaUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send({error: "Unexpected error"});
  }
});

router.delete('/:id', async (req: Request, res:Response)=>{
  const id = req.params['id'];

  let consulta;
  try{
    consulta = await consultaController.deleteConsulta(id);
    res.send("consulta eliminado exitosamente");
  }catch (error){
    res.send({error: "Unexpected error"})
  }
})

export default router;