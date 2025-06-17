import * as materialController from "../../../controllers/materials.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/materials";

  router.post(
    prefix + "/",
    authMiddleware,
    isAdmin,
    materialController.createMaterial
  );
  router.get(
    prefix + "/",
    authMiddleware,
    isAdmin,
    materialController.getAllMaterials
  );

  router.get(
    prefix + "/:barcode",
    authMiddleware,
    isAdmin,
    materialController.getMaterialByBarcode
  );

  router.patch(
    prefix + "/:barcode",
    authMiddleware,
    isAdmin,
    materialController.updateMaterial
  );
  router.delete(
    prefix + "/:barcode",
    authMiddleware,
    isAdmin,
    materialController.deleteMaterial
  );
};
