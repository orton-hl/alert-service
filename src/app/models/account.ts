import { Client } from "./client.model";
import { User } from "./user.model";

export type AccountSummary =  {
    isUser: boolean;
    session: string;
    account : User | Client | null
  };