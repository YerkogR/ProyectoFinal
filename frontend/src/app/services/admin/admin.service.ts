import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from "../../models/admin.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://localhost:4000/api';
  }

  public async getAllAdmin(){
    return this.httpClient.get<Admin[]>(`${this.baseUrl}/admin/all`)
      .toPromise();
  }
  
}
