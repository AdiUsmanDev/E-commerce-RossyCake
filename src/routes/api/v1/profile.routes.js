import * as profileController from "../../../controllers/profile.controller.js";

export default (router) => {
  const prefix = "/profiles";

  router.get(prefix + "/", profileController.getProfile);

  router.patch(prefix + "/update", profileController.update);
};
