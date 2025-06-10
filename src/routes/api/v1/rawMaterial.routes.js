import * as rawMaterialController from "../../../controllers/rawMaterial.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  // Tentukan prefix untuk semua rute bahan baku
  const prefix = "/raw-materials";

  // Rute untuk membuat dan mendapatkan semua bahan baku
  router.post(
    prefix + "/",
    authMiddleware,
    isAdmin,
    rawMaterialController.createRawMaterial
  );
  router.get(
    prefix + "/",
    authMiddleware,
    isAdmin,
    rawMaterialController.getAllRawMaterials
  );

  // Rute khusus untuk menyesuaikan stok
  router.patch(
    prefix + "/:id/adjust-stock",
    authMiddleware,
    isAdmin,
    rawMaterialController.adjustStock
  );

  // Rute untuk operasi pada satu bahan baku (by ID)
  router.get(
    prefix + "/:id",
    authMiddleware,
    isAdmin,
    rawMaterialController.getRawMaterialById
  );
  router.patch(
    prefix + "/:id",
    authMiddleware,
    isAdmin,
    rawMaterialController.updateRawMaterial
  );
  router.delete(
    prefix + "/:id",
    authMiddleware,
    isAdmin,
    rawMaterialController.deleteRawMaterial
  );
};
