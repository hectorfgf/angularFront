import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-fruits-add',
  templateUrl: './fruits-add.component.html',
  styleUrls: ['./fruits-add.component.css']
})
export class FruitsAddComponent implements OnInit {

  fruitForm: FormGroup;
  name = '';
  size = '';
  sizeList = ['pequeño', 'mediano', 'grande'];
  color: number = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fruitForm = this.formBuilder.group({
      name : [null, Validators.required],
      size : [null, Validators.required],
      color : [null],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addFruit(this.fruitForm.value)
      .subscribe((res: any) => {
        const id = res.fruta.id;
        this.isLoadingResults = false;
        this.router.navigate(['/fruits-details', id]);
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
