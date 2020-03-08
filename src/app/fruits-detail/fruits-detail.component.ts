import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Fruit} from '../fruit';

@Component({
  selector: 'app-fruits-detail',
  templateUrl: './fruits-detail.component.html',
  styleUrls: ['./fruits-detail.component.css']
})
export class FruitsDetailComponent implements OnInit {

  fruit: Fruit = new Fruit();
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getFruitDetails(Number(this.route.snapshot.params.id));
  }

  getFruitDetails(id: number) {
    this.api.getFruit(id)
      .subscribe((data: any) => {
        this.fruit = data.fruta;
        console.log(this.fruit);
        this.isLoadingResults = false;
      });
  }

  deleteFruit(id: any) {
    this.isLoadingResults = true;
    this.api.deleteFruit(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/fruits']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
