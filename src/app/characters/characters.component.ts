import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../search-result';
import { SEARCHRESULT } from '../search-result-form-mock';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})



export class CharactersComponent implements OnInit {

    urlSearch : string = 'https://gateway.marvel.com:443/v1/public/characters/';
  
    searchResultsMock = SEARCHRESULT;
    searchResults: SearchResult | undefined;
  

    constructor(private http: HttpClient) { }

    ngOnInit() {

        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' } 
        this.http.get<SearchResult>(this.urlSearch).subscribe({
          next: data => this.searchResults = data,
          // error: error => console.error('There was an error!', error)
        })      
      }
}

// Interfaces
interface Tupla {
    value: string;
    viewValue: string;
  }

