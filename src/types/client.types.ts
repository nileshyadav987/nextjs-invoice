export interface Client {
  _id: string;
  name: string;
  mobile: string;
  email: string;
  address: string;
  [key: string]: string | number | boolean; // Add other fields here
}
