import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-series-by-id',
  templateUrl: './series-by-id.component.html',
  styleUrls: ['./series-by-id.component.css']
})



export class SeriesByIdComponent implements OnInit {

  // atributos
  urlSearch : string = 'https://gateway.marvel.com:443/v1/public/characters/';
  // characterId : any;
  // title : any  ;
  // titleStartsWith : any ;
  // startYear : any ;
  // modifiedSince: any;
  // comics : any ;
  // stories : any ;
  // events : any ;
  // creators : any ;
  // seriesType : any ;
  // contains : any ;
  // orderBy : any ;
  // limit : any ;
  // offset : any ;
  // apikey : any;

  seriesTypes: Tupla[] = [
    {value: 'collection', viewValue: 'Collection'},
    {value: 'one%20shot', viewValue: 'One Shot'},
    {value: 'limited', viewValue: 'Limited'},
    {value: 'ongoing', viewValue: 'OnGoing'}
  ];

  containsList: Tupla[] = [
    {value: 'comic', viewValue: 'Comic'},
    {value: 'magazine', viewValue: 'Magazine'},
    {value: 'trade paperback', viewValue: 'Trade Paperback'},
    {value: 'hardcover', viewValue: 'Hardcover'},
    {value: 'digest', viewValue: 'Digest'},
    {value: 'graphic novel', viewValue: 'Graphic Novel'},
    {value: 'digital comic', viewValue: 'Digital Comic'},
    {value: 'infinite comic', viewValue: 'Infinite Comic'}
  ];

  orderByList: Tupla[] = [
    {value: 'title', viewValue: 'title'},
    {value: 'modified', viewValue: 'modified'},
    {value: 'startYear', viewValue: 'startYear'},
    {value: '-title', viewValue: '-title'},
    {value: '-modified', viewValue: '-modified'},
    {value: '-startYear', viewValue: '-startYear'},
  ];

  containsChecks = new FormControl();

  orderByChecks = new FormControl();

  searchResults: SearchResultSeriesByIdComponent | undefined;
  
// Constructor de la componente
  constructor(private http: HttpClient) { }


// Funciones
    onsubmit(f:NgForm){
        this.urlSearch = this.urlSearch.concat(f.value.charactersId.value,'/series?',f.value.title,f.value.titleStartsWith,
        f.value.startYear,f.value.modifiedSince,f.value.comics,f.value.stories,f.value.events,f.value.creators,f.value.seriesType,
        f.value.containsChecks,f.value.orderByChecks,f.value.limit,f.value.offset,f.value.apikey);

        console.warn('Your call to Api is', this.urlSearch);

  }


    ngOnInit() {

      const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' } 
      this.http.get<SearchResultSeriesByIdComponent>(this.urlSearch).subscribe({
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

 interface SearchResultSeriesByIdComponent
{
   code : number,
   status :  string ,
   copyright :  string ,
   attributionText :  string ,
   attributionHTML :  string ,
   data : {
     offset :   number ,
     limit :   number ,
     total :   number ,
     count :   number ,
     results : [
      {
         id :   number ,
         title :  string ,
         description :  string ,
         resourceURI :  string ,
         urls : [
          {
             type :  string ,
             url :  string 
          }
        ],
         startYear :   number ,
         endYear :   number ,
         rating :  string ,
         modified :  Date ,
         thumbnail : {
           path :  string ,
           extension :  string 
        },
         comics : {
           available :   number ,
           returned :   number ,
           collectionURI :  string ,
           items : [
            {
               resourceURI :  string ,
               name :  string 
            }
          ]
        },
         stories : {
           available :   number ,
           returned :   number ,
           collectionURI :  string ,
           items : [
            {
               resourceURI :  string ,
               name :  string ,
               type :  string 
            }
          ]
        },
         events : {
           available :   number ,
           returned :   number ,
           collectionURI :  string ,
           items : [
            {
               resourceURI :  string ,
               name :  string 
            }
          ]
        },
         characters : {
           available :   number ,
           returned :   number ,
           collectionURI :  string ,
           items : [
            {
               resourceURI :  string ,
               name :  string ,
               role :  string 
            }
          ]
        },
         creators : {
           available :   number ,
           returned :   number ,
           collectionURI :  string ,
           items : [
            {
               resourceURI :  string ,
               name :  string ,
               role :  string 
            }
          ]
        },
         next : {
           resourceURI :  string ,
           name :  string 
        },
         previous : {
           resourceURI :  string ,
           name :  string 
        }
      }
    ]
  },
   etag :  string ;
}


