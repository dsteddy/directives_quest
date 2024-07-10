import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { isRequiredValidator } from '../functions/isRequired.function';
import { rangeDateValidator } from '../functions/rangeDateValidator.function';


@Component({
  selector: 'app-search-movie',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css'
})
export class SearchMovieComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  searchForm = this.fb.group({
    movieDetails: this.fb.group({
      id: [''],
      titre: ['']
    }, { validators : isRequiredValidator('id', 'titre') }),
    type: ['Series'],
    fiche: [''],
    releaseYear: ['', rangeDateValidator(1900, new Date().getFullYear())],
  });

  ngOnInit(): void {
    this.searchForm.patchValue({ fiche: 'Courte' });
    this.searchForm.valueChanges
      .subscribe(value => {
        console.log('searchForm value changes : ', value);
      })
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
    console.log('searchForm submitted : ', this.searchForm.value);
    }
  };

}
