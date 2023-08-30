import React from "react";
import { Button, Card } from "react-bootstrap";
const Items = (props) => {
    const { id, name, description, price, image } = props;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    );
};
export default Items