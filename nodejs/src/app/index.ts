import { orderRoute } from "../routes/order.route";
import { sendResponse } from "../utils";

const app = async (req: any, res: any) => {
  const url = req.url ?? "/";

  if (url === "/") {
    sendResponse(
      res,
      {
        message: "Welcome to the server",
      },
      200,
    );
    return;
  }
  if (url.startsWith("/orders")) {
    await orderRoute(req, res);
    return;
  }
};
export default app;
