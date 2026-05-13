import type { Order, Req, Res } from "../types";
import path from "node:path";
import { promises as fs } from "node:fs";
// const DB_PATH = path.join(process.cwd(), "db.json");
const DB_PATH = path.join(process.cwd(), "db", "db.json");

class OrderService {
  private async readData() {
    try {
      const data = await fs.readFile(DB_PATH, "utf-8");
      const pd = JSON.parse(data)?.products as Order[];
      return pd;
    } catch {
      return [];
    }
  }
  private async writeData(orders: Order[]) {
    await fs.writeFile(DB_PATH, JSON.stringify(orders, null, 2));
  }

  async get(): Promise<Order[]> {
    const data = this.readData();
    return data;
  }
  async create(order: Omit<Order, "id">) {
    const orders = await this.readData();
    const newOrder = {
      id: crypto.randomUUID(),
      ...order,
    };
    orders.push(newOrder);
    await this.writeData(orders);
  }
  async getById(id: string) {
    const data = (await this.readData()).find((item) => item.id === id);
    return data;
  }
}
export const orderService = new OrderService();
