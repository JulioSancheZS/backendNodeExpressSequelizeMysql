import express, { Application, Request, Response } from 'express'
import cors from 'cors'; //imprtamos los cors
import routerProduct from '../router/producto'
import db from '../db/connection'


class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midleweres();
        this.router();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto - Ayuda ${this.port}`);
        })
    }

    router() {
        this.app.get('/', (req: Request, response: Response) => {
            response.json({
                msg: 'API working'
            })
        })
        //Usamos api
        this.app.use('/api/productos', routerProduct);
    }

    //Funciones que se ejecutan despues de algo
    midleweres() {
        //parseaomos el body
        this.app.use(express.json());
        //Cors
        this.app.use(cors());
        
    }

    //Conexion a db
    async dbConnect() {
        try {
            //authenticate devuelve una promesa
            await db.authenticate();
            console.log("Base de datos conectada");
        } catch (error) {
            console.log(error);
            console.log("Error al conectarse a la base de datos");
        }

    }
}

export default Server