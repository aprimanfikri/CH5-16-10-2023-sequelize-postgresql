const router = require("express").Router();

const Shop = require("../controller/shopController");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.get("/", Shop.findShop);
router.post("/", Shop.createShop);
router.get("/:id", Shop.findShopById);
router.patch("/:id", Shop.updateShop);
router.delete("/:id", Shop.deleteShop);

module.exports = router;
