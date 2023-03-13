import {DataTypes} from 'sequelize'
import db from '../db/connection'


//Definimos un nuevo modelo
const Producto = db.define('Producto', {
    //Con estas propiedades
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    stock:{
        type: DataTypes.NUMBER
    }
},{
 // I don't want createdAt
 createdAt: false,
updatedAt: false
});

//Exportamos 
export default Producto 
