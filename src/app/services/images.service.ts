import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

 private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getBannerImages(): Observable<string[]> {
    const url = `${this.apiUrl}/api/uploads/homepage`;
    return this.http.get<string[]>(url);
  }

  getFullImageUrl(imagePath: string): string {
    return `${this.apiUrl}${imagePath}`; // Combina il dominio base con il percorso relativo
  }
}
