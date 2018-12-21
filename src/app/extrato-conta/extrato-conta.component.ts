import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-extrato-conta',
  templateUrl: './extrato-conta.component.html',
  styleUrls: ['./extrato-conta.component.css']
})
export class ExtratoContaComponent implements OnInit {

  extratos: any = [];
  baseUrl = 'http://localhost:9002/conta/consulta/'
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    this.http.get(this.baseUrl)
        .subscribe(data => this.extratos = data);


  }

}
