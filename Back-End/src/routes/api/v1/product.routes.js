import * as productController from "../../../controllers/products.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/products";
  router.get(prefix + "/", productController.getProducts);
  router.get(prefix + "/:code", productController.getProduct);
  router.post(
    prefix + "/",
    authMiddleware,
    isAdmin,
    productController.storeProduct
  );
  router.patch(
    prefix + "/:code",
    authMiddleware,
    isAdmin,
    productController.updateProduct
  );
  router.delete(
    prefix + "/:code",
    authMiddleware,
    isAdmin,
    productController.destroyProduct
  );
};
