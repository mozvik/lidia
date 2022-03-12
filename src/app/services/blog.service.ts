import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  //private blogUrl = 'http://localhost/wp-lidia'
  private blogUrl = 'https://blog.esoguides.hu'

  constructor(private http: HttpClient) { }

  getGallery() {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }
  getDetails(id: any) {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts/${id}`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }

  errorHandler(err: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(err)
    })
  }
}
