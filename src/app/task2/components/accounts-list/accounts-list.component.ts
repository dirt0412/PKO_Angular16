import { Component, inject } from '@angular/core';
import { AccountsService } from '../../accounts.service';
import { Account } from 'src/app/models/account.interface';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],//https://angular.io/extended-diagnostics/NG8103
})

export class AccountsListComponent {

  private searchTerms = new Subject<string>();
  private readonly accountService = inject(AccountsService);
  public accounts!: Account[];// = [{ id: 0, accountNumber: '', balance: 0 }];
  public accountsFilter!: Account[]
  //public accounts$: Observable<Account[]>;
  public filterValue!: string;
  isUserLoggedIn: boolean = false;

  constructor() {
    // this.accounts$ = this.accountService.getAccounts().pipe(
    //   //filter((value: Account[]) => value.filter.(this.searchTerm))
    // );
    this.getData();
  }

  ngOnInit(): void {
  }

  public applyFilter(filterValue: string) {
    if (filterValue) {
      filterValue = filterValue.trim().toLowerCase();
      this.accountsFilter = this.accounts.filter((item: Account) => {
        return item.accountNumber.toLowerCase().includes(filterValue.toLowerCase());
      });
    } else {
      this.accountsFilter = this.accounts;
    }
  }

  getData() {
    this.accountService.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
      this.applyFilter(this.filterValue);
    });
  }

  //----- alternatywny przyklad
  search(term: string): void {//metoda do zastosowania w html np:  <input type="text" (input)="search($event.target.value)" />
    this.searchTerms.next(term);
  }

  getDataByPipe(): void {
    this.searchTerms
      .pipe(
        debounceTime(300), // czekaj 300ms po ostatniej zmianie
        distinctUntilChanged(), // Ignoruj jeśli fraza się nie zmieniła
        switchMap((value: string) => this.getDataObservable(value)) // Wykonaj zapytanie do serwera
      )
      .subscribe((data: Account[]) => {
        this.accounts = data;
      });
  }

  getDataObservable(filterValue: string): Observable<Account[]> {
    return this.accountService.getAccountsByPipe(filterValue);
  }
  //--------------

  getDisplayedColumns(): string[] {
    if (this.isUserLoggedIn) {
      return ['ID', 'Account Number', 'Description', 'Balance', 'Opening Date'];
    } else {
      return ['ID', 'Description'];
    }
  }

  exportToCsv() {
    const csvData = this.convertToCSV(this.accountsFilter);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'accounts.csv');
  }

  private convertToCSV(data: any[]): string {
    const separator = ',';
    const keys = Object.keys(data[0]);
    const csvRows = [keys.join(separator)];

    for (const row of data) {
      const values = keys.map(key => row[key]);
      csvRows.push(values.join(separator));
    }

    return csvRows.join('\n');
  }

  trackByItemId(index: number, item: Account): number {
    return item.id;
  }

}
