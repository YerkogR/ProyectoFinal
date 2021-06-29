import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctor} from "../../models/doctor.model";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://localhost:4000/api';
  }

  public async getAllDoctor(){
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}/doctor/all`)
      .toPromise();
  }
  
}
