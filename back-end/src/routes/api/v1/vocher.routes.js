import * as voucherController from "../../../controllers/vocher.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/vochers";

  router.get(prefix + "/", voucherController.getAllVouchers);
  router.get(prefix + "/:id", voucherController.getVoucherById);
  router.post(prefix + "/apply", voucherController.applyVoucher);
  router.post(
    prefix + "/",
    authMiddleware,
    isAdmin,
    voucherController.createVoucher
  );
  router.patch(
    prefix + "/:id",
    authMiddleware,
    isAdmin,
    voucherController.updateVoucher
  );
  router.delete(
    prefix + "/:id",
    authMiddleware,
    isAdmin,
    voucherController.deleteVoucher
  );
};
