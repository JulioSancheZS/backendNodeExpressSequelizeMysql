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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //imprtamos los cors
const producto_1 = __importDefault(require("../router/producto"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midleweres();
        this.router();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto - Ayuda ${this.port}`);
        });
    }
    router() {
        this.app.get('/', (req, response) => {
            response.json({
                msg: 'API working'
            });
        });
        //Usamos api
        this.app.use('/api/productos', producto_1.default);
    }
    //Funciones que se ejecutan despues de algo
    midleweres() {
        //parseaomos el body
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    //Conexion a db
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //authenticate devuelve una promesa
                yield connection_1.default.authenticate();
                console.log("Base de datos conectada");
            }
            catch (error) {
                console.log(error);
                console.log("Error al conectarse a la base de datos");
            }
        });
    }
}
exports.default = Server;
