import express, { Request, Response, Router } from "express";
import { Admin } from "../../models/admin.model";
import adminController from "./admin.controller";

const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
    let admins;

    try{
        admins = await adminController.getAllAdmin();
        res.send(admins);
    } catch (error) {
        res.send({error: "Unexpected error"})
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params['_id'];
    
    let admin;
    try {
      admin = await adminController.getAdminById(id);
      res.send(admin);
    } catch (error) {
      res.send({ error: "Unexpected error" })
    }
})

router.post('/', async (req: Request, res: Response) => {
  try{
    const admin: Admin = req.body;
    const newAdmin = await adminController.addAdmin(admin);
    res.send(newAdmin);
    res.status(201).json(newAdmin);
  }catch(error){
    res.status(500).send({error: "Unexpected error"})
  }
  
})

router.put("/:rut", async (req: Request, res: Response) => {
  const rut: string = req.params.rut;

  try {
    const adminUpdate: Admin = req.body;

    const existingAdmin: Admin = await adminController.getAdminById(rut);

    if (existingAdmin) {
      const updatedAdmin = await adminController.updateAdmin(adminUpdate);
      return res.status(200).json(adminUpdate);
    }

    const newItem = await adminController.addAdmin(adminUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send({error: "Unexpected error"});
  }
});

router.delete('/:rut', async (req: Request, res:Response)=>{
  const rut = req.params['rut'];

  let admin;
  try{
    admin = await adminController.deleteAdmin(rut);
    res.send("admin eliminado exitosamente");
  }catch (error){
    res.send({error: "Unexpected error"})
  }
})

export default router;