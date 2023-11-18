export interface Account {
    id: number;
    description?: string;
    accountNumber: string;
    accountIban?: string;
    balance: number;
    //"availableBalance": 7815.47,
    currency?: string;
    //"overdraftLimit": 25.35,
    openingDate?: string;
    //"type": "C",
    defaultAccount?: boolean;
    interestRate?: string;
    owners?: string;
}