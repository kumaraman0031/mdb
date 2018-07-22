import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://generic-c312f.firebaseio.com/data.json?auth=HnOWHPRJZclgKw1YhPPkogmzqb959qdXnfZEEWI0')
  }
}
