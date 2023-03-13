"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const router = (0, express_1.Router)();
//Ruteo de api
//ruta get producto
//EndPoint
router.get('/', producto_1.getProducts);
router.get('/:id', producto_1.getProduct);
router.delete('/:id', producto_1.deleteProduct);
router.post('/', producto_1.postProduct);
router.put('/:id', producto_1.updateProduct);
exports.default = router;
