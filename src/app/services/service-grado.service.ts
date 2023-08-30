import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGradoService {
  data = "http://localhost:3000/gradosDB";

  constructor(private http: HttpClient) { }

  editGrado(id: any, input: any){
    return this.http.patch(`${this.data}/${id}`,input);
  }

  getGrados(): Observable<any> {
    return this.http.get(`${this.data}`);
  }

  getGrado(id: string): Observable<any> {
    return this.http.get(`${this.data}/$${id}`);
  }

  deleteGrado(id: string): Observable<any> {
    return this.http.delete(`${this.data}/$${id}`) ;
  }

  postGrado(input: any): Observable<any> {
    return this.http.post(`${this.data}`,input );
  }

}
