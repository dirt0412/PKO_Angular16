import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private accountsUrl = '/assets/data/accounts.json';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    //return of(accountsData as Account[]);
    return this.http.get<Account[]>(this.accountsUrl);
  }

  getAccountsByPipe(fulterValue: string): Observable<Account[]> {
    const url = `https://example.com/search?filter=${fulterValue}`;
    return this.http.get<Account[]>(url);
  }
}
