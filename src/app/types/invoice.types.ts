export interface Invoice {
    _id: string;
    total: number;
    totalPaid: number;
    paid: boolean;
    status: string;
    [key: string]: string | number | boolean; // Add other fields here
  }