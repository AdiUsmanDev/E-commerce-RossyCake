import * as authController from "../../../controllers/auth.controller.js";
import * as auth from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/auth";
  router.post(prefix + "/register", authController.register);
  router.post(prefix + "/login", authController.login);
};
