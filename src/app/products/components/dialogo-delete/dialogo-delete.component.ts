import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Products } from '../../interfaces/interface';

@Component({
  selector: 'app-dialogo-delete',
  templateUrl: './dialogo-delete.component.html',
  styleUrls: ['./dialogo-delete.component.css'],
})
export class DialogoDeleteComponent {

  // readonly dialogRef = inject(MatDialogRef<DialogoDeleteComponent>);
  // readonly data = inject<Products>(MAT_DIALOG_DATA);
  // readonly product = model(this.data.product);

  constructor(  public dialogRef: MatDialogRef<DialogoDeleteComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Products,
  ){}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}


