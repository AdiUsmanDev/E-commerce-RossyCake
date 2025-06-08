import { res200, res201 } from "../utils/response.js";
import * as productService from "../services/product.service.js";
import * as productValidation from "../validations/product.validation.js";
import { Error400, Error404 } from "../utils/customError.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getAll();
    res200("Berhasil Mengambil Semua Data Products", products, res);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getOne(req.params.code);
    

    res200("Berhasil Mengambil  Data Products", product, res);
  } catch (error) {
    next(error);
  }
};

export const storeProduct = async (req, res, next) => {
  try {
    const { error, value } = productValidation.createProduct.validate(req.body);
    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }
    const product = await productService.store(value);
    res201("Berhasil menambahkan data Product", product, res);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { error, value } = productValidation.updateProduct.validate(req.body);
    if (error) {
      throw new Error400(`${error.details[0].message}`);
    }

    const product = await productService.update(req.params.code, value);
    res200("Berhasil mengubah data Product", product, res);
  } catch (error) {
    next(error);
  }
};

export const destroyProduct = async (req, res, next) => {
  try {
    const product = await productService.destroy(req.params.code);
    res200("Berhasil menghapus data Product", product, res);
  } catch (error) {
    next(error);
  }
};
