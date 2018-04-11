import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  curso:string = '';
  fale:string = '';
  kids:string = '';
  nossoCurso:string = '';
  novidade:string = '';
  sobre:string = '';

  public dataJson = [] ;
  constructor(private httpClient:HttpClient){
    this.getInformation()
   }


  getInformation() {
    this.httpClient.get(`https://private-37a9a-frontendprojeto.apiary-mock.com/angular`)
      .subscribe(
        (data:any[]) => {
          this.dataJson = data;
          console.log(this.dataJson);
         }
       )
  }
}
