import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  async getVideos(keyword: string): Promise<[]> {
    return await this.http.get<[]>(`http://localhost:5000/search?keyword=${keyword}`).toPromise();
  }
}
