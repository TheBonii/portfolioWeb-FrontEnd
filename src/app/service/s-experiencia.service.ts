import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  detail(id: any) {
    throw new Error('Method not implemented.');
  }
  URL = 'portfolioweb-backend.faithful-renie.koyeb/explab/'


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
