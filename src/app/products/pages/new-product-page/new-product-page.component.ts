import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/interface';

import { filter, switchMap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogoDeleteComponent } from '../../components/dialogo-delete/dialogo-delete.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.css'],
})
export class NewProductPageComponent implements OnInit {

    readonly dialog = inject(MatDialog);

    public productForm = new FormGroup({
      _id:  new FormControl(''),
      promotion:  new FormControl(''),
      product:    new FormControl(''),
      mark:       new FormControl(''),
      price:      new FormControl(''),
      details:    new FormControl(''),
      characters: new FormControl(''),
      alt_img:    new FormControl(''),
    });

    constructor(  private productService: ProductsService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router,
                  private snackbar: MatSnackBar,
    ){}


    ngOnInit(): void {
      if( !this.router.url.includes('edit')) return;

      this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productService.getProductById( id ))
      ).subscribe( product => {
          if( !product ) return this.router.navigateByUrl('/');

          this.productForm.reset( product );

          return;
      })
    }

    get currentProduct(): Products {

      const product = this.productForm.value as Products;

      return product;
    }

    onSubmit(): void{

      if( this.productForm.invalid ) return;

      if( this.currentProduct._id){
        this.productService.updateProduct( this.currentProduct )
        .subscribe( product => {
            this.showSnackBar(`${ product.product } actualizado.`);
        })

        return;
      };

      if( !this.currentProduct._id ){
        this.productService.addProduct( this.currentProduct )
        .subscribe( product => {
          // this.router.navigate(['/products/edit', product._id] );
          // this.showSnackBar(`${ product.product } creado.`)
        })
      }
    }

    onDeleteProduct(): void{

      if( !this.currentProduct._id ) throw Error('Es requerido el ID del producto');

      const dialogRef = this.dialog.open(DialogoDeleteComponent, {
        data: this.productForm.value,
      });

      dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.productService.deleteProduct( this.currentProduct._id )),
        filter( (wasDelete: boolean ) => wasDelete )
      )
      .subscribe(() => {
        this.router.navigate(['/products'])
      });
    }

    showSnackBar( message: string ): void{
      this.snackbar.open( message, 'Cerrar', {
        duration: 2500
      });
    }

}
