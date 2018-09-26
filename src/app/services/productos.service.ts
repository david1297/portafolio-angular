import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productofiltrado: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise( ( resolve, reject) => {
      this.http
      .get('https://angular-html-26c76.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.productos = resp;
        resolve();
        this.cargando = false;
        /*setTimeout(() => {
        }, 1000);
*/
      });
    });
  }
  getproducto (id: string) {
   return this.http.get(`https://angular-html-26c76.firebaseio.com/productos/${ id }.json`);
  }

  buscarproducto(termino: string) {
    if (this.productos.length === 0 ) {
 // cargar productos
      this.cargarProductos().then( () => {
        this.filtrarproductos(termino);
      });
    } else {
      this.filtrarproductos(termino);
    }
  }

  private filtrarproductos ( termino: string) {
    termino = termino.toLocaleLowerCase();
    this.productofiltrado = [];
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
  this.productofiltrado.push(prod);
}
    });
  }


}