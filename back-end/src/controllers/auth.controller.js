import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as AuthValidation from "../validations/auth.validation.js";
import * as AuthService from "../services/auth.service.js";
import { Error400, Error401, Error404 } from "../utils/customError.js";
import { res200 } from "../utils/response.js";

export const login = async (req, res, next) => {
  try {
    const { error, value } = AuthValidation.login.validate(req.body);

    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const result = await AuthService.login(value);
    if (!result) {
      throw new Error400("Email atau kata sandi tidak valid!");
    }

    res200("Login berhasil", result, res);
  } catch (error) {
    if (error instanceof Error401) {
      next(new Error401("Akun belum diverifikasi"));
    } else {
      next(error);
    }
  }
};
export const register = async (req, res, next) => {
  try {
    const { error, value } = AuthValidation.register.validate(req.body);
    if (error) {
      throw new Error400(error.message);
    }

    const result = await AuthService.register(value);
    res200("Register Berhasil", result, res);
  } catch (error) {
    next(error);
  }
};
