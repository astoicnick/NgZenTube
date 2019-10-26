import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Services/Search/search.service';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private search: SearchService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  searchVideos(): void {
    this.search.getVideos(this.keyword)
    .then(
      response => {
        this.videoList = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  VideoIdIframeURL(videoId: string): any{
    const urlToSecure = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlToSecure);
  }
}

