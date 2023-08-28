import { Injectable } from '@angular/core';
import { apiServer } from './apiServer';
import { HttpClient } from '@angular/common/http';
import { Producto} from '../models/producto.model'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl: string = apiServer.serverUrlListaProductos;

  constructor(private http: HttpClient) { }

  getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.ApiUrl}`);
  }
}
