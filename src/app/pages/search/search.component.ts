import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private ruta: ActivatedRoute, public ProdService: ProductosService) { }

  ngOnInit() {
    this.ruta.params
    .subscribe ( params => {
      this.ProdService.buscarproducto(params['termino']);
    });
  }

}
