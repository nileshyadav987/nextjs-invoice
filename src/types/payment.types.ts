import { Client } from "./client.types";

export interface Payment {
  _id: string;
  client: Client | null;
  invoiceId: string;
  amount: number;
  paidAt: string;
  business: string;
  message: string;
}
