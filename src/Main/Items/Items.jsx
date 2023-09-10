import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
const  baseUrl= process.env.REACT_APP_BASE_URL;

const Items = (props) => {
    const { id, name, description, price, image } = props;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

                <div className="text-end">
                    <h5>$ {price}</h5>
                    <Button variant="warning">Agregar al Carrito</Button>
                </div>

            </Card.Body>
        </Card>
    );
};
export default Items