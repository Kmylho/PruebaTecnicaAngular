import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceVariedadService {
  data = "http://localhost:3000/variedadesDB";


  constructor(private http: HttpClient) { }

  editVariedad(id: any, input: any){
    return this.http.patch(`${this.data}/${id}`, input);
  }

  getVariedades(): Observable<any> {
    return this.http.get(`${this.data}`);
  }

  getVariedad(id: string): Observable<any> {
    return this.http.get(`${this.data}/${id}`);
  }

  deleteVariedad(id: string): Observable<any> {
    return this.http.delete(`${this.data}/$${id}`) ;
  }

  postVariedad(input: string): Observable<any> {
    return this.http.post<any>(`${this.data}`, input);
  }
}
