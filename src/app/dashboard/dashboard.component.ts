import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result';
import { SearchApiService } from '../search-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  searchs: SearchResult[] = [];

  constructor(private searchApi: SearchApiService) { }

  ngOnInit() {
    this.getSearchs();
  }

  getSearchs(): void {
    this.searchApi.getSearch()
      .subscribe(searchs => this.searchs = searchs.slice(1, 5));
  }
}