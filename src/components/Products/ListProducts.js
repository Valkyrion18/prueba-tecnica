import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarProductoAsincrono } from '../../redux/actions/actionProducts';
import { ModalUpdate } from './ModalUpdate'
import '../../styles/style-listproducts.css'


export const ListProducts = () => {

    const [modalUpdate, setModalUpdate] = useState(false)
    const [datosModal, setDatosModal] = useState()

    const dispatch = useDispatch();

    const { products } = useSelector(store => store.products);

    const updateModal = (nombre) => {
        const buscado = products.find((element) => element.product === nombre)

        setModalUpdate(true)
        setDatosModal(buscado)
    }

    return (
        <div>
            
            <div className="container mt-5 mb-3">
                <h3 className="text-center"> Lista de Productos </h3>
                <table className="table text-center mt-3 color-table">

                    <thead>
                        <tr>
                            <th scope="col" className="table-header">Producto</th>
                            <th scope="col" className="table-header">Marca</th>
                            <th scope="col" className="table-header">Cantidad</th>
                            <th scope="col" className="table-header">Precio</th>
                            <th scope="col" className="table-header">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((element, index) => (
                                <tr key={index}>

                                    <td>{element.product}</td>
                                    <td>{element.brand}</td>
                                    <td>{element.quantity}</td>
                                    <td>$ {element.price}</td>
                                    <td>
                                        <div className="btn-actions">
                                            <input
                                                value="Editar"
                                                type="button"
                                                className="btn btn-success"
                                                onClick={() => updateModal(element.product)}
                                            />
                                            <input
                                                value="Borrar"
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => dispatch(borrarProductoAsincrono(element.product))}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {
                    modalUpdate === true ? <ModalUpdate datosModal={datosModal} /> : ""
                }


            </div>
        </div>
    )
}
