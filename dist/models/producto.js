"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
//Definimos un nuevo modelo
const Producto = connection_1.default.define('Producto', {
    //Con estas propiedades
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    // I don't want createdAt
    createdAt: false,
    updatedAt: false
});
//Exportamos 
exports.default = Producto;
