import * as shippingController from "../../../controllers/shipping.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/shipping";

  router.post(
    `${prefix}`,
    authMiddleware,
    isAdmin,
    shippingController.createShippingMethod
  );

  router.get(
    `${prefix}`,
    authMiddleware,
    shippingController.getAllShippingMethods
  );

  router.patch(
    `${prefix}/:id`,
    authMiddleware,
    isAdmin,
    shippingController.updateShippingMethod
  );

  router.delete(
    `${prefix}/:id`,
    authMiddleware,
    isAdmin,
    shippingController.deleteShippingMethod
  );
};
