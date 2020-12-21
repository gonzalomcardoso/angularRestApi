import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';

import { SearchResult } from '../search-result';
import { SearchResultForm } from '../search-result-form';
import { SEARCHRESULTFORMS } from '../search-result-form-mock';
import { SearchApiService } from '../search-api.service';
import { ResultForm } from '../result-form';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: [ './search-form.component.css' ]
})
export class SearchFormComponent implements OnInit {
  @Input() search : SearchResult | undefined;
  result: ResultForm | undefined;
  urlSearch!: string;
  searchForm: SearchResultForm | undefined;
  // f;
  // form11;
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







  constructor(
    private route: ActivatedRoute,
    private searchApi: SearchApiService,
    private location: Location,
    
    // private formBuilder: FormBuilder){
    //   this.f = formBuilder.group({
    //     characterId : ['', Validators.required],
    //     title : [''],
    //     titleStartsWith : [''],
    //     startYear : [''],
    //     modifiedSince: [''],
    //     comics : [''],
    //     stories : [''],
    //     events : [''],
    //     creators : [''],
    //     seriesType : [''],
    //     contains : [''],
    //     orderBy : [''],
    //     limit : [''],
    //     offset : [''],
    //     apikey : ['', Validators.required]
   
    //   })
      // this.form11 = formBuilder.group({
      //   characterId : ['', Validators.required],
      //   title : [''],
      //   titleStartsWith : [''],
      //   startYear : [''],
      //   modifiedSince: [''],
      //   comics : [''],
      //   stories : [''],
      //   events : [''],
      //   creators : [''],
      //   seriesType : [''],
      //   contains : [''],
      //   orderBy : [''],
      //   limit : [''],
      //   offset : [''],
      //   apikey : ['', Validators.required]
   
      // });
    // }
    ){}

  ngOnInit(): void {
    for (let form of SEARCHRESULTFORMS) {
      if( 10 === form.id){
        this.urlSearch = form.urlSearch;
        this.searchForm = form;
        if(this.searchForm.id === 11){
          //cambiar los required, validates

        }
        
      }
    }
    this.getResult();

  }

//   onsubmit(f:NgForm){
//     this.urlSearch = this.urlSearch.concat(f.value.charactersId.value,'/series?',f.value.title,f.value.titleStartsWith,
//     f.value.startYear,f.value.modifiedSince,f.value.comics,f.value.stories,f.value.events,f.value.creators,f.value.seriesType,
//     f.value.containsChecks,f.value.orderByChecks,f.value.limit,f.value.offset,f.value.apikey);
//     this.getResult();
//     console.warn('Your call to Api is', this.urlSearch);

// }
  

  getResult(): void {
    var id = this.route.snapshot.paramMap.get('id');
     this.searchApi.getResult(this.urlSearch)?.subscribe({
       next : data =>this.result = data,
     })
  }

  goBack(): void {
    this.location.back();
  }
}


// Interfaces
interface Tupla {
  value: string;
  viewValue: string;
}