import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Paciente} from "../../models/paciente.model";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:4000/api';
   }

   public async getAllPaciente(){
    return this.httpClient.get<Paciente[]>(`${this.baseUrl}/paciente/all`)
      .toPromise();
  }
  
  public async addPaciente(){
    return this.httpClient.post<Paciente>(`${this.baseUrl}/paciente`, (req: Request, res: Response) =>{
      console.log(req.body);
    })
    .toPromise();
  }
}
