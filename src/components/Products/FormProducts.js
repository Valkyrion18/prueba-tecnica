import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { mostrarProductosAsincrono, registrarProductoAsincrono } from '../../redux/actions/actionProducts';
// import { Input } from '@mui/material';

export const FormProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mostrarProductosAsincrono())
    }, [dispatch])

    const formik = useFormik({
        initialValues: {
            product: '',
            brand: '',
            quantity: '',
            price: ''

        },
        onSubmit: (data) => {
            dispatch(registrarProductoAsincrono(data))
        },

    })

    return (
        <div>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div div className="col-12">
                        <h3 className="text-center"> Añadir Productos </h3>

                        {/* <form className="form-group" onSubmit={formik.handleSubmit}> */}
                        <form className="form-group" onSubmit={formik.handleSubmit}>
                            {/* <input
                                id="fileSelector"
                                type="file"
                                className="form-control "
                                placeholder="url image"
                                name="url"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                                required /> */}

                            {/* <button
                                className="btn btn-dark"
                                onClick={handlePictureClick}
                                type="button">Imagen</button> */}

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="product"
                                autoComplete="off"
                                placeholder="Producto"
                                onChange={formik.handleChange}
                                required />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="brand"
                                autoComplete="off"
                                placeholder="Marca"
                                onChange={formik.handleChange}
                                required />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="quantity"
                                autoComplete="off"
                                placeholder="Cantidad"
                                onChange={formik.handleChange}
                                required />

                            <input
                                type="number"
                                className="form-control mt-2"
                                name="price"
                                autoComplete="off"
                                placeholder="Precio"
                                onChange={formik.handleChange}
                                required />

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <input
                                    value="Guardar"
                                    type="submit"
                                    className="btn btn-warning"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

