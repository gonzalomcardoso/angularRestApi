



import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SearchResult } from './search-result';
import { SEARCHRESULTS } from './search-result-mock';
import {ResultForm} from './result-form'
import {RESULTFORMS} from './result-form-mock'
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {
  rdo : ResultForm | undefined; 
  
  constructor(private messageService: MessageService,private http: HttpClient) { }

  getSearch(): Observable<SearchResult[]> {
    // TODO: send the message _after_ fetching the search
    this.messageService.add('SearchApiService: fetched searchs');
    return of(SEARCHRESULTS);
  }

  getResult(urlSearch : string): Observable<ResultForm> | undefined {
    // TODO: send the message _after_ fetching the result
    this.messageService.add(`SearchApiService: fetched search url=${urlSearch}`);
    
      
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' } 
      this.http.get<ResultForm>(urlSearch).subscribe({
        next: data => this.rdo = data,
        // error: error => console.error('There was an error!', error)
      }) 
      return of(RESULTFORMS[0]);     
  }
        
      
}

    
    
  


