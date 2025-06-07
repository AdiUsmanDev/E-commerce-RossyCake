const express = require("express");
const router = express.Router();
const verifyAdmin = require("../middleware/authadmin");

const adminProduct = require("../controllers/adminproductController");
const adminMaterial = require("../controllers/adminmaterialController");
const adminVoucher = require("../controllers/adminvoucherController");
const adminUser = require("../controllers/adminuserController");


router.get("/products", verifyAdmin, adminProduct.getAllProducts);
router.get("/products/:productId", verifyAdmin, adminProduct.getProductById);
router.post("/products", verifyAdmin, adminProduct.createProduct);
router.put("/products/:productId", verifyAdmin, adminProduct.updateProduct);
router.delete("/products/:productId", verifyAdmin, adminProduct.deleteProduct);


router.get("/materials", verifyAdmin, adminMaterial.getAllMaterials);
router.post("/materials", verifyAdmin, adminMaterial.createMaterial);
router.put("/materials/:materialId", verifyAdmin, adminMaterial.updateMaterial);
router.delete("/materials/:materialId", verifyAdmin, adminMaterial.deleteMaterial);

router.get("/vouchers", verifyAdmin, adminVoucher.getAllVouchers);
router.post("/vouchers", verifyAdmin, adminVoucher.createVoucher);
router.put("/vouchers/:voucherId", verifyAdmin, adminVoucher.updateVoucher);
router.delete("/vouchers/:voucherId", verifyAdmin, adminVoucher.deleteVoucher);


router.get("/users", verifyAdmin, adminUser.getAllUsers);
router.post("/users", verifyAdmin, adminUser.createUser);
router.put("/users/:userId", verifyAdmin, adminUser.updateUser);
router.delete("/users/:userId", verifyAdmin, adminUser.deleteUser);

module.exports = router;
