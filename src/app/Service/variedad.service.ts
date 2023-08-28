import { Injectable } from '@angular/core';
import { apiServer } from './apiServer';
import { HttpClient } from '@angular/common/http';
import { Variedad } from '../models/variedad.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class VariedadService {

  private ApiUrl: string = apiServer.serverUrlVariedad;

  constructor(private http: HttpClient) { }

  getVariedad(): Observable<Variedad[]> {
    return this.http.get<Variedad[]>(`${this.ApiUrl}`);
  }
}
