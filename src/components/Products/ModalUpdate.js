import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import { editarProductoAsincrono } from '../../redux/actions/actionProducts';

export const ModalUpdate = (datosModal) => {

    const [show, setshow] = useState(true)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            product: datosModal.datosModal.product,
            brand: datosModal.datosModal.brand,
            quantity: datosModal.datosModal.quantity,
            price: datosModal.datosModal.price,
        },
        onSubmit: (data) => {
            dispatch(editarProductoAsincrono(data))
        }
    })

    useEffect(() => {
    }, [datosModal])

    const closeModal = () => {
        setshow(false)
    }

    return (
        <div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Actualizar datos de las peliculas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formik.handleSubmit}>

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="product"
                            autoComplete="off"
                            // placeholder="Titulo"
                            value={formik.values.product}
                            onChange={formik.handleChange}
                            required />

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="brand"
                            // placeholder='Calificacion'
                            autoComplete="off"
                            value={formik.values.brand}
                            onChange={formik.handleChange}
                            required />

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="quantity"
                            autoComplete="off"
                            // placeholder="Fecha de estreno"
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                            required />

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="price"
                            autoComplete="off"
                            // placeholder="Fecha de estreno"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            required />

                        <Modal.Footer>
                            <Button
                                variant="dark"
                                onClick={closeModal}>Cerrar</Button>
                            <Button variant="warning"
                                type="submit">Actualizar</Button>
                        </Modal.Footer>
                    </form>

                </Modal.Body>

            </Modal>
        </div>
    )
}
