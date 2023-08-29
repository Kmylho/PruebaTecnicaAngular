import { Injectable } from '@angular/core';
import { apiServer } from './apiServer';
import { HttpClient } from '@angular/common/http';
import { Grado } from '../models/grado.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  private ApiUrl: string = apiServer.serverUrlGrado;

  constructor(private http: HttpClient) { }

  addGrado(grado: Grado): Observable<Grado> {
    const body = { grado: grado };
    return this.http.post<Grado>(`${this.ApiUrl}`, body);
  }
  getGrados(): Observable<Grado[]> {
    return this.http.get<Grado[]>(`${this.ApiUrl}`);
  }

  updateGrado(grado: Grado): Observable<void> {
    const body = { name: grado.grado };
    return  this.http.put<void>(`${this.ApiUrl}/${grado.id}`,body);
  }

  deleteGrado(id: string): Observable<void> {
    return  this.http.delete<void>(`${this.ApiUrl}/${id}`);
  }

}
