import type { IncomingMessage, ServerResponse } from "http";

export type Method = "GET" | "POST" | "PUT" | "DELETE";

export type Res = ServerResponse;
export type Req = IncomingMessage & {
  method: Method;
};

export interface Order {
  id: string;
  customer: string;
  quantity: number;
  food: string;
  price: number;
}
