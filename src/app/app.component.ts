import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-Commerce_Prod_Review_4';
  @ViewChild('ecomProdForm') ecomProdForm !: NgForm;
  onSubmit(){
    if(this.ecomProdForm.invalid){
      return this.ecomProdForm.control.markAllAsTouched()
    }
    this.ecomProdForm.resetForm();
  }
}
