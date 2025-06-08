import { res200 } from "../utils/response.js";
import * as paymentService from "../services/payment.service.js";
import * as PaymentValidation from "../validations/payment.validation.js";
import { Error400, Error404 } from "../utils/customError.js";

export const createDebitPayment = async (req, res, next) => {
  try {
    const { error, value } = PaymentValidation.createPaymentSchema.validate(
      req.body
    );

    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const result = await paymentService.createDebitPayment(
      value.orderId,
      value.bank
    );
    res200("Pembayaran berhasil dibuat", { paymentUrl: result }, res);
  } catch (error) {
    next(error);
  }
};

export const cancelPayment = async (req, res, next) => {
  try {
    const { error, value } = PaymentValidation.cancelPaymentSchema.validate(
      req.params
    );

    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const { transactionId } = value;

    const cancelResponse = await paymentService.cancelPayment(transactionId);

    if (!cancelResponse) {
      throw new Error404("Pembayaran tidak ditemukan");
    }

    res200("Berhasil membatalkan pembayaran", cancelResponse, res);
  } catch (error) {
    next(error);
  }
};

export const checkPaymentStatus = async (req, res, next) => {
  try {
    const { error, value } =
      PaymentValidation.checkPaymentStatusSchema.validate(req.params);

    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const { transactionId } = value;

    const statusResponse = await paymentService.checkPaymentStatus(
      transactionId
    );

    if (!statusResponse) {
      throw new Error404("Status pembayaran tidak ditemukan");
    }

    res200("Berhasil mengambil status pembayaran", statusResponse, res);
  } catch (error) {
    next(error);
  }
};

export const createGoPayPayment = async (req, res, next) => {
  try {
    const { error, value } =
      PaymentValidation.createGoPayPaymentSchema.validate(req.body);

    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const result = await paymentService.createGoPayPayment(value.order_id);
    res200("Pembayaran berhasil dibuat", { paymentUrl: result }, res);
  } catch (error) {
    next(error);
  }
};
