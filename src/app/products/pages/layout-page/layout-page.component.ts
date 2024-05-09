import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Lista de productos', icon: 'receipt_long', url: './list'},
    { label: 'Añadir producto', icon: 'add_notes', url: './new-product'},
    { label: 'Buscar', icon: 'manage_search', url: './search'},
  ];

}
