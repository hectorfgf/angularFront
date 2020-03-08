import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'size', 'color'];
  data: Fruit[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {this.api.getFruits()
    .subscribe((res) => {
      this.data = res.frutas;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
