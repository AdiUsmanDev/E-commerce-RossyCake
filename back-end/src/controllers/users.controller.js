import * as UserService from "../services/users.service.js";
import * as UserValidation from "../validations/users.validation.js";
import { res200, res201 } from "../utils/response.js";
import { Error400 } from "../utils/customError.js";

/**
 * Controller untuk GET semua pengguna.
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res200("Berhasil mendapatkan semua data pengguna", users, res);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller untuk POST (membuat) pengguna baru.
 */
export const createUser = async (req, res, next) => {
  try {
    const { error, value } = UserValidation.createUserSchema.validate(req.body);
    if (error) throw new Error400(error.details[0].message);

    const newUser = await UserService.createUser(value);
    res201("Pengguna baru berhasil dibuat", newUser, res);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller untuk PATCH (memperbarui) pengguna.
 */
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error, value } = UserValidation.updateUserSchema.validate(req.body);
    if (error) throw new Error400(error.details[0].message);

    const updatedUser = await UserService.updateUser(id, value);
    res200("Pengguna berhasil diperbarui", updatedUser, res);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller untuk DELETE pengguna.
 */
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await UserService.deleteUser(id);
    // Mengirim respons 204 No Content yang menandakan sukses tanpa body
    res200("Pengguna berhasil dihapus", res);
  } catch (error) {
    next(error);
  }
};
