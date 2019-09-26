import { NgModule } from '@angular/core';
import { LoaderComponent} from '../../loader/loader.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    NgxSpinnerModule
  ],
  exports: [LoaderComponent]
})
export class CommonModule { }
