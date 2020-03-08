import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MyErrorStateMatcher} from '../fruits-add/fruits-add.component';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-fruits-edit',
  templateUrl: './fruits-edit.component.html',
  styleUrls: ['./fruits-edit.component.css']
})
export class FruitsEditComponent implements OnInit {

  id = '';
  fruitForm: FormGroup;
  name = '';
  size = '';
  sizeList = ['pequeño', 'mediano', 'grande'];
  color: number = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getFruit(Number(this.route.snapshot.params.id));
    this.fruitForm = this.formBuilder.group({
      name : [null, Validators.required],
      size : [null, Validators.required],
      color : [null],
    });
  }

  getFruit(id: number) {
    this.api.getFruit(id).subscribe((data: any) => {
      data = data.fruta;
      this.id = data.id;
      this.fruitForm.setValue({
        name: data.name,
        size :  data.size,
        color :  data.color,
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.updateFruit(this.id, this.fruitForm.value)
      .subscribe((res: any) => {
          this.isLoadingResults = false;
          this.router.navigate(['/fruits-details', this.id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  fruitDetails() {
    this.router.navigate(['/fruits-details', this.id]);
  }
}

