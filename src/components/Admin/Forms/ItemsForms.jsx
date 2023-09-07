import React from "react";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
const ItemsForms = () => {
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState();
    const [imagen, setImagen] = useState();

    return (
        <Form className="bg-light text-dark rounded w-100 py-3 "> Inventario:
            <Container>
                <Form.Group>
                    <Form.Label type="text">Nombre</Form.Label>
                    <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label type="text">Precio</Form.Label>
                    <Form.Control type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Group>
               
                <Form.Group>
                    <Form.Label type="text">Imagen</Form.Label>
                    <Form.Control type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label type="text">Descripción</Form.Label>
                    <Form.Control as="textarea" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                

            </Container>

        </Form>
    )
}
export default ItemsForms