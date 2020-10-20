import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor( 
    private fb: FormBuilder, 
    private router: Router 
  ) { 
    this.createForm();
  }

  angForm: FormGroup;

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.fb.group({
      nom: ["", Validators.required],
    });
  }

  onContinue() {
    this.router.navigate(['content/' + this.angForm.value.nom]);
  }

}
