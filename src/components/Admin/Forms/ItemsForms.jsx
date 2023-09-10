import React from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { validateData } from "../../../helpers/validateData";
import Swal from "sweetalert2";
const  baseUrl= process.env.REACT_APP_BASE_URL;

const ItemsForms = () => {
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState();
    const [imagen, setImagen] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateData(nombre, precio, descripcion, imagen)) {
            console.log("Datos Validos");
            const res = await axios.post('${baseUrl}/items', {
                id: getRandomId(),
                name: nombre,
                price: precio,
                description: descripcion,
                image: imagen,

            });

            console.log(res);
            if (res.status == 201) {
                Swal.fire({
                    title: "Operacion Exitosa",
                    text: "Elemento agregado Correctamente",
                    icon: "success",
                    timer: 2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                });
                setNombre(" ");
                setPrecio(" ");
                setDescripcion(" ");
                setImagen(" ");

            }
            else {

                Swal.fire({
                    title: "ERROR",
                    text: "Ocurrio un error al Guardar, el error es: ${res.statusText}",
                    icon: "error",
                    timer: 2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                });

            }

        }
        else {
            console.log("Datos Invalidos");
            Swal.fire({
                title: "ERROR",
                text: "Revise los campos",
                icon: "error",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });

        }

    };

    return (
        <Form className="bg-light text-dark rounded w-100 py-3 onSubmit={handleSubmit}">
            <Container>
                <h2>Crear Item</h2>
                <hr />
                <Form.Group>
                    <Form.Label type="text">Nombre</Form.Label>
                    <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label type="text">Precio</Form.Label>
                    <Form.Control type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label type="text">Imagen</Form.Label>
                    <Form.Control type="url" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label type="text">Descripción</Form.Label>
                    <Form.Control as="textarea" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                <div className="text-end mt-2">
                    <Button type="submit" variant="warning">Guardar</Button>

                </div>

            </Container>

        </Form>
    )
}
export default ItemsForms