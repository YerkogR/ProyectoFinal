import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Consulta} from "../../models/consulta.model";

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://localhost:4000/api';
  }

  public async getAllConsulta(){
    return this.httpClient.get<Consulta[]>(`${this.baseUrl}/consulta/all`)
      .toPromise();
  }

}
