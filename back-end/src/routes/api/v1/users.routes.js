import express from "express";
import * as usersController from "../../../controllers/users.controller.js";
import { authMiddleware, isAdmin } from "../../../middlewares/auth.js";

export default (router) => {
  const prefix = "/users";
  router.get(
    prefix + "/",
    authMiddleware,
    isAdmin,
    usersController.getAllUsers
  );
  router.post(
    prefix + "/",
    authMiddleware,
    isAdmin,
    usersController.createUser
  );
  router.patch(
    prefix + "/users/:id",
    authMiddleware,
    isAdmin,
    usersController.updateUser
  );
  router.delete(
    prefix + "/users/:id",
    authMiddleware,
    isAdmin,
    usersController.deleteUser
  );
};
