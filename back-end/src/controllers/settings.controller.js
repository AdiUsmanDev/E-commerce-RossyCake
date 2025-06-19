import * as SettingsService from "../services/settings.service.js";
import * as SettingsValidation from "../validations/settings.validation.js";
import { res200 } from "../utils/response.js";
import { Error400 } from "../utils/customError.js";

/**
 * Controller untuk GET pengaturan umum.
 */
export const getSettings = async (req, res, next) => {
  try {
    const settings = await SettingsService.getGeneralSettings();
    res200("Berhasil mendapatkan data pengaturan", settings, res);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller untuk PATCH (memperbarui) pengaturan umum.
 */
export const updateSettings = async (req, res, next) => {
  try {
    const { error, value } = SettingsValidation.updateSettingsSchema.validate(
      req.body
    );
    if (error) throw new Error400(error.details[0].message);

    const updatedSettings = await SettingsService.updateGeneralSettings(value);
    res200("Pengaturan berhasil diperbarui", updatedSettings, res);
  } catch (error) {
    next(error);
  }
};
