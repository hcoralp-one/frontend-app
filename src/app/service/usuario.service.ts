import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  post(usuario: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/usuario", usuario);
  }

  getAllUsuario(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/usuarios");
  }
  
  getUsuarioById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "/api/usuario/" + id);
  }

  updateUsuario(id: number, usuario: any): Observable<any>{
    return this.http.put(BASIC_URL + "/api/usuario/" + id, usuario);
  }

  deleteUsuario(id: number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/usuario/" + id);
  }
}
