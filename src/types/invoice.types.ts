import { Client } from "./client.types";
import { Item } from "./invoice.item.types";

export interface Invoice {
  _id: string;
  total: number;
  totalPaid: number;
  paid: boolean;
  status: string;
  items: Array<Item>;
  client: Client | null;
  subtotal: number;
  autoNumber?: number;
  createdAt?: string;
  dueAt?: string;
  // [key: string]: string | number | boolean | Array<Item> | Client | null; // Allow Item[] and Client as valid dynamic types
}
