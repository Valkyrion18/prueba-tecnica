import React, { useEffect, useRef, useState } from 'react'
import { url } from '../helpers/url'
import { logout } from '../redux/actions/actionLogin';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/style-home.css'
import { Button, Container, Modal } from 'react-bootstrap';

const Home = () => {

    const [ingredientes, setIngredientes] = useState([]);
    const [divisa, setDivisa] = useState('');
    const [plato, setPlato] = useState('');
    const [items, setItems] = useState(0);
    const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [show, setShow] = useState(false);

    // const [envio, setEnvio] = useState('');
    const envio = 7;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const reference = useRef({})

    useEffect(() => {
        getData()
        setTotal(envio)
    }, [])

    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setIngredientes(data.ingredients)
                setDivisa(data.currency)
                setPlato(data.name)
                // setEnvio(data.shipping-cost)
            })
            .catch(error => console.log(error))
    }

    const handleCheckBox = (e) => {
        const checkedIngredient = ingredientes.find(ingrediente =>
            ingrediente.product === e.target.value)
        if (items >= 0 && items <= ingredientes.length) {
            if (e.target.checked === true) {
                setItems(items + 1)
                setSubTotal(subTotal + checkedIngredient.price)
            }
            else {
                setItems(items - 1)
                setSubTotal(subTotal - checkedIngredient.price)

            }
        }
    }

    const handleSelectAll = () => {
        let sumaTotal = 0
        ingredientes.forEach((ingrediente) => {
            reference.current.checked = true
            sumaTotal += ingrediente.price

        })
        setItems(ingredientes.length)
        setSubTotal(sumaTotal)
    }

    const handleDeselectAll = () => {
        ingredientes.forEach(() => {
            reference.current.checked = false

        })
        setItems(0)
        setSubTotal(0)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    const handleToPay = () => {
        navigate('/Home')
    }

    return (
        <div>
            <Container className="products-header">

                <Link
                    as={NavLink}
                    to="/products">
                    <h4 className="link-add">Añadir Productos</h4>
                </Link>
                <h4
                    className="btn-logout"
                    onClick={() => handleLogout()}>
                    Cerrar Sesión
                </h4>
            </Container>

            <Container className='mt-5'>
                <h2 className='mt-4 mb-4 d-flex justify-content-center'>{plato}</h2>
            </Container>

            <Container className="selection-container">
                <h4
                    className="selection-label"
                    onClick={handleSelectAll}>
                    Seleccionar todo
                </h4>
                <h4
                    className="selection-label"
                    onClick={handleDeselectAll}>
                    Deseleccionar todo</h4>
            </Container>

            {/* Lista de los Productos */}
            <Container className="mb-5">
                {
                    ingredientes.map((ingrediente, index) => (
                        <Container
                            key={index}
                            className="product-container mb-4">
                            <Container className="input-checkbox">
                                <input type="checkbox"
                                    ref={reference}
                                    id={index}
                                    value={ingrediente.product}
                                    onChange={handleCheckBox} />
                            </Container>
                            <h2 className="item">{ingrediente.items}</h2>
                            <Container
                                className="description-container">
                                <h4><strong>{ingrediente.product}</strong></h4>
                                <h5 className="product-brand">{ingrediente.brand}</h5>
                                <h6>{ingrediente.quantity}</h6>
                            </Container>
                            <Container className="product-price">
                                <h2>{divisa}</h2>
                                <h2> {ingrediente.price}</h2>
                            </Container>
                        </Container>
                    ))
                }
            </Container>

            <Container>
                {
                    items === 0 ?
                        <h5 className="mb-4">Items: <h5 className="item-visibility">{items}</h5></h5>
                        :
                        <h5 className="mb-4">Items: {items}</h5>
                }

                <Container className="bottom-data">
                    <h5>Subtotal:</h5>
                    {
                        subTotal === 0 ?
                            <h5 className="item-visibility">{divisa} </h5>
                            :
                            <h5>{divisa} {subTotal.toFixed(2)}</h5>
                    }
                </Container>
                <Container className="bottom-data">
                    <h5 >Gastos de Envío:</h5>
                    {
                        subTotal <= 0 ?
                            <h5 className="item-visibility">{divisa} {envio}</h5>
                            :
                            <h5>{divisa} {envio}</h5>
                    }

                </Container>
                <Container className="bottom-data">
                    <h5>Total:</h5>
                    {
                        subTotal <= 0 ?
                            <h5>{divisa} {total - envio}</h5>
                            :
                            <h5>{divisa} {(total + subTotal).toFixed(2)}</h5>
                    }

                </Container>

            </Container>

            <Container className="container-btn">
                <Button
                    variant="success"
                    className="btn-purchase"
                    onClick={handleShow}>
                    <h5 className='me-1'>Comprar Ingredientes: </h5>
                    {
                        subTotal <= 0 ?
                            <h5 className="item-visibility">{divisa} </h5>
                            :
                            <h5>{divisa} {(total + subTotal).toFixed(2)}</h5>
                    }

                </Button>
            </Container>

            {/* Container Modal de la confirmacion de pago */}
            <Container>
                <Modal show={show}>
                    <Modal.Header className="modal-body">
                        <Modal.Title>Confirmacion de Compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <h4>El total a pagar es de {divisa} {(total + subTotal).toFixed(2)}</h4>
                        <h4>Gracias por tu compra!!</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="warning"
                            onClick={handleClose}>Volver a compras</Button>
                        <Button variant="primary" onClick={handleToPay}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>

        </div >
    )
}

export default Home