import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Services/Search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Initializing variables

  //List of search results
  videoList: any[];
  //User's search parameter
  keyword: string;

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  searchVideos(): void {
    this.search.getVideos(this.keyword)
    .then(
      response => {
        this.videoList = response;
        console.log(response);
      }
    );
  }
}
