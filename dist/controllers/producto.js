"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
//Api Listado de productos
const getProducts = (res, response) => __awaiter(void 0, void 0, void 0, function* () {
    //Listado 
    const listProduct = yield producto_1.default.findAll();
    response.json(listProduct);
});
exports.getProducts = getProducts;
//Api roductos por id
const getProduct = (res, response) => __awaiter(void 0, void 0, void 0, function* () {
    //destructurar 
    const { id } = res.params;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        response.json(product);
    }
    else {
        response.status(404).json({
            msg: `No existe un producto con el Id ${id}`
        });
    }
});
exports.getProduct = getProduct;
//Eliminar productos por id
const deleteProduct = (res, response) => __awaiter(void 0, void 0, void 0, function* () {
    //destructurar 
    const { id } = res.params; //obtenemos el id
    const product = yield producto_1.default.findByPk(id);
    if (!product) {
        response.status(404).json({
            msg: `No existe un producto con el Id ${id}`
        });
    }
    else {
        yield product.destroy();
        response.json({
            msg: "El producto fue eliminado con exito!"
        });
    }
});
exports.deleteProduct = deleteProduct;
//agregar productos por id
const postProduct = (res, response) => __awaiter(void 0, void 0, void 0, function* () {
    //destructurar 
    const { body } = res;
    //Agregar se hace con el create y le pasamos el body
    try {
        yield producto_1.default.create(body);
        //Enviamos mensaje
        response.json({
            msg: 'El producto fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        //Enviamos mensaje
        response.json({
            msg: 'Upps, ocurrio un error',
        });
    }
});
exports.postProduct = postProduct;
//editar productos por id
const updateProduct = (res, response) => __awaiter(void 0, void 0, void 0, function* () {
    //destructurar 
    const { body } = res;
    const { id } = res.params; //obtenemos el id
    const product = yield producto_1.default.findByPk(id);
    try {
        if (product) {
            yield product.update(body);
            response.json({
                msg: 'El producto fue actualizado con exito',
            });
        }
        else {
            response.status(404).json({
                msg: `No existe un producto con el Id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        //Enviamos mensaje
        response.json({
            msg: 'Upps, ocurrio un error al actualizar',
        });
    }
});
exports.updateProduct = updateProduct;
