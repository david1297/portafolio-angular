import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
  constructor(private http: HttpClient) {
    console.log('Info Pagina Cargada');
    this.cargarinfo();
    this.cargarEquipo();
  }
  private cargarinfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      /*console.log(resp['Email']);*/
      // console.log(resp);
    }); 
  }
  private cargarEquipo() {
    this.http.get('https://angular-html-26c76.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {
      this.equipo = resp;
      /*console.log(resp['Email']);*/
     // console.log(resp);
    }); 
  }
}
