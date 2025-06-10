import { Router } from "express";
import * as IndexController from "../../../controllers/index.js";
import authRoutes from "./auth.routes.js";
import profileRoutes from "./profile.routes.js";
import { authMiddleware } from "../../../middlewares/auth.js";
import productRoutes from "./product.routes.js";
import orderRoutes from "./order.routes.js";
import paymentRoutes from "./payment.routes.js";
import vocherRoutes from "./vocher.routes.js";
import rawMaterialRoutes from "./rawMaterial.routes.js";

export default (app) => {
  const router = Router();

  app.use("/api/v1", router);

  router.get("/", IndexController.index);
  authRoutes(router);
  vocherRoutes(router);
  productRoutes(router);

  router.use(authMiddleware);
  profileRoutes(router);
  orderRoutes(router);
  paymentRoutes(router);
  rawMaterialRoutes(router);
};
