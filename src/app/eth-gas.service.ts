import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EthGasService {

  private apiKey = 'YourApiKeyToken';
  private url = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getGasPrices(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}

