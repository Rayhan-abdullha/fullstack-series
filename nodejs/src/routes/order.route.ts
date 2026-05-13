import { orderService } from "../services/order.services";
import type { Order, Req, Res } from "../types";
import { extractRequestInfo, sendResponse } from "../utils";
// import { extractRequestData } from "../utils";

export const orderRoute = async (req: Req, res: Res) => {
  // const req = req
  const { method, params, body } =
    await extractRequestInfo<Omit<Order, "id">>(req);
  const orderId = params[1];

  if (req.method === "GET" && !orderId) {
    const data = await orderService.get();
    sendResponse(res, { message: "order data retrived", data: data });
    return;
  }
  if (req.method === "GET" && orderId) {
    const data = await orderService.getById(orderId);
    sendResponse(res, { message: "order data retrived", data: data ?? {} });

    return;
  }
};
