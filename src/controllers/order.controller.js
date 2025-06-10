import * as orderService from "../services/order.service.js";
import { Error400 } from "../utils/customError.js";
import { res200 } from "../utils/response.js";
import * as orderValidation from "../validations/order.validation.js";

export const storeOrder = async (req, res, next) => {
  try {
    const { error, value } = orderValidation.createOrder.validate(req.body);
    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const { id } = req.user;
    const newOrder = await orderService.store(id, value);

    res200("Order berhasil dibuat", newOrder, res);
  } catch (error) {
    next(error);
  }
};

export const  getOrders = async (req, res, next) => {
  try {
    const { id } = req.user;

    const orders = await orderService.getAllOrders(id);
    res200("Berhasil mendapatkan semua order", orders, res);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const orderId = req.params.code;
    const userId = req.user.id;
    const order = await orderService.getOrderById(orderId, userId);
    res200("Berhasil mendapatkan detail order", order, res);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.code;
    const { error, value } = orderValidation.updateOrder.validate(req.body);
    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const updatedOrder = await orderService.updateOrderById(orderId, value);
    res200("Order berhasil diperbarui", updatedOrder, res);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.code;
    const order = await orderService.deleteOrderById(orderId);
    res200("Berhasil menghapus data Order", order, res);
  } catch (error) {
    next(error);
  }
};
