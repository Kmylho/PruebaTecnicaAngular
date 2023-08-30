import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductoService {
  data = "http://localhost:3000/productosDB";

  constructor(private http: HttpClient) { }

  editProducto(id: any, input: any){
    return this.http.patch(`${this.data}/${id}`, input);
  }

  getProductos(): Observable<any> {
    return this.http.get(`${this.data}`);
  }

  getProducto(id: string): Observable<any> {
    return this.http.get(`${this.data}/${id}`);
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.data}/$${id}`) ;
  }

  postProducto(input: string): Observable<any> {
    return this.http.post<any>(`${this.data}`, input);
  }
}
