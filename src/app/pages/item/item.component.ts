import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/Producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
prod: ProductoDescripcion;
id: string;
  constructor( private route: ActivatedRoute, public producto: ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']);
      this.producto.getproducto(parametros['id'])
      .subscribe( (item: ProductoDescripcion) => {
        // console.log(item);
        this.id = parametros['id'];
        this.prod = item;
      });

    });
  }

}
