import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result';
import { SEARCHRESULTS } from '../search-result-mock';
import { MessageService } from '../message.service';
import { SearchApiService } from '../search-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchs  = SEARCHRESULTS;
  selectedSearch: SearchResult | undefined;


  constructor(private searchService: SearchApiService, private messageService: MessageService) { }
  
  ngOnInit() {
    this.getSearch();
  }

  onSelect(search: SearchResult): void {
    this.selectedSearch = search;
    this.messageService.add(`SearchComponent: Selected result id=${search.id}`);
  }

  getSearch(): void {
    this.searchService.getSearch()
        .subscribe((searchs: SearchResult[]) => this.searchs = searchs);
  }



}