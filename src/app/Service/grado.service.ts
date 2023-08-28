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

  getGrado(): Observable<Grado[]> {
    return this.http.get<Grado[]>(`${this.ApiUrl}`);
  }
}
