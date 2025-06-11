import * as orderController from "../../../controllers/order.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/orders";
  router.get(
    prefix + "/all", // Gunakan endpoint yang jelas seperti /all
    authMiddleware,
    isAdmin,
    orderController.getAllOrders
  );
  router.get(prefix + "/", orderController.getOrders);
  router.post(prefix + "/", orderController.storeOrder);
  router.get(prefix + "/:code", orderController.getOrder);
  router.patch(prefix + "/:code", orderController.updateOrder);
  router.delete(prefix + "/:code", orderController.deleteOrder);
};
