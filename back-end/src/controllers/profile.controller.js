import * as profileValidation from "../validations/profile.validation.js";
import * as profileService from "../services/profile.service.js";
import { Error400, Error404 } from "../utils/customError.js";
import { res200 } from "../utils/response.js";

export const update = async (req, res, next) => {
  try {
    const { error, value } = profileValidation.update.validate(req.body);

    if (error) {
      throw new Error400(error.message);
    }

    const { id } = req.user;
    const user = await profileService.update(id, value);
    res200("Berhasil", user, res);
  } catch (error) {
    if (error.code === "P2025") {
      error.message =
        "Pengguna tidak ditemukan. Pastikan informasi yang Anda masukkan sudah benar dan coba lagi.";
      next(new Error404(error.message));
    }
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await profileService.getProfile(id);
    res200("Berhasil", user, res);
  } catch (error) {
    next(error);
  }
};
