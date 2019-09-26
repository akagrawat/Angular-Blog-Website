import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService: LoaderService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loaderService.isLoading.subscribe(
      (data) => {
        if(data){
          this.spinner.show();
        } else{
          this.spinner.hide();
        }
      }
    )
  }

}
