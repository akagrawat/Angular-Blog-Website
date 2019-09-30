import { NgModule } from '@angular/core';
import { LoaderComponent} from '../../loader/loader.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule} from '@angular/common'



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    NgxSpinnerModule,
    CommonModule
  ],
  exports: [LoaderComponent]
})
export class LoaderModule { }
