import { Request, Response } from 'express'
import Producto from '../models/producto'

//Api Listado de productos
export const getProducts = async (res: Request, response: Response) => {

  //Listado 
  const listProduct = await Producto.findAll();

  response.json(listProduct)

}

//Api roductos por id
export const getProduct = async (res: Request, response: Response) => {

  //destructurar 
  const { id } = res.params;

  const product = await Producto.findByPk(id);

  if (product) {
    response.json(product);
  } else {
    response.status(404).json({
      msg: `No existe un producto con el Id ${id}`
    })
  }



}

//Eliminar productos por id
export const deleteProduct = async (res: Request, response: Response) => {
  //destructurar 
  const { id } = res.params; //obtenemos el id
  const product = await Producto.findByPk(id);

  if (!product) {
    response.status(404).json({
      msg: `No existe un producto con el Id ${id}`
    })
  } else {
    await product.destroy();
    response.json({
      msg: "El producto fue eliminado con exito!"
    })
  }
}

//agregar productos por id
export const postProduct = async (res: Request, response: Response) => {
  //destructurar 
  const { body } = res;
  //Agregar se hace con el create y le pasamos el body
  try {
    await Producto.create(body);
    //Enviamos mensaje
    response.json({
      msg: 'El producto fue agregado con exito',
    })
  } catch (error) {
    console.log(error);
    //Enviamos mensaje
    response.json({
      msg: 'Upps, ocurrio un error',
    })
  }
}

//editar productos por id
export const updateProduct = async (res: Request, response: Response) => {
  //destructurar 
  const { body } = res;
  const { id } = res.params; //obtenemos el id
  const product = await Producto.findByPk(id);

  try {
    if (product) {
      await product.update(body)
      response.json({
        msg: 'El producto fue actualizado con exito',
      })
    } else {
  
      response.status(404).json({
        msg: `No existe un producto con el Id ${id}`
      })
  
    }
  } catch (error) {
    console.log(error);
    //Enviamos mensaje
    response.json({
      msg: 'Upps, ocurrio un error al actualizar',
    })
  }
  
}