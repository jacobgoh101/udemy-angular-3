import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  formValues : any = null;

  onSubmit(ngForm : NgForm) : void {
    this.formValues = ngForm.value;
  }
}
