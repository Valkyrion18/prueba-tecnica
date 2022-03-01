import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { registroEmailPasswordNombre } from '../../redux/actions/actionRegister';
import { useDispatch } from 'react-redux';
import '../../styles/style-register.css'

export const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email, pass1, nombre))
    }

    return (
        <div>
            <Container className="link-header mb-5">
                <h1>Registrate aquí. No tomara más de 1 minuto</h1>
            </Container>

            <Container className="container-register">

                {/* <Form onSubmit={formik.handleSubmit}> */}
                <Form onSubmit={handleRegistro}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="label-attributes">Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="label-attributes">Correo</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="label-attributes">Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            name="pass1"
                            value={pass1}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                        <Form.Label className="label-attributes">Repita contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            name="pass2"
                            value={pass2}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Container className="container-button-link">
                        <Button
                            className="button-s-n mt-1 mb-3"
                            variant="primary"
                            type="submit">
                            Registrarse
                        </Button>

                        <Container className="link-register">
                            <Form.Label className="label-color me-2">Ya estás registrado?</Form.Label>
                            <Link to="/" className="link-position">Iniciar Sesión</Link>
                        </Container>

                        
                    </Container>

                </Form>
            </Container>


        </div>
    )
}