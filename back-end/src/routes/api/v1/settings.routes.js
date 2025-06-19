import * as SettingsController from "../../../controllers/settings.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/settings";
  router.get(prefix + "/", SettingsController.getSettings);
  router.patch(
    prefix + "/",
    authMiddleware,
    isAdmin,
    SettingsController.updateSettings
  );
};
