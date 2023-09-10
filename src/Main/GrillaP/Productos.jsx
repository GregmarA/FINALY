import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Items from "../Items/Items";
import axios from "axios";
const  baseUrl= process.env.REACT_APP_BASE_URL;
const Productos = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const itemsFetch = async () => {
            const data = await axios.get("${baseUrl}/items");
            setItems(data.data)
        }
        itemsFetch()

    }, []);

    return (
        <Row>
            {items.map((elemento) => {
                return (
                    <Col xs={12} md={4} lg={3} key={elemento.id} className="p-2">
                        <Items {...elemento} />
                    </Col>
                );

            })}

        </Row>
    )
}
export default Productos