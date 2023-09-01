import React from "react";
import { Col, Row } from "react-bootstrap";
import Items from "../Items/Items";

const fakeArray = [
    {
        id: 1,
        name: "Biblia",
        price: 20,
        description: "Biblia",
        image: "https://http2.mlstatic.com/D_NQ_NP_992036-MLA70798278111_072023-V.webp",
    },
    {
        id: 2,
        name: "Biblia",
        price: 20,
        description: "Biblia para Niños",
        image: "https://http2.mlstatic.com/D_NQ_NP_703075-MLA54387631634_032023-O.webp",
    },
    {
        id: 3,
        name: "Biblia",
        price: 20,
        description: "Biblia Juvenil",
        image: "https://http2.mlstatic.com/D_NQ_NP_629752-MLA70766161508_072023-O.webp",
    },
    {
        id: 4,
        name: "Biblia",
        price: 20,
        description: "Biblia de Estudio",
        image: "https://http2.mlstatic.com/D_NQ_NP_826807-MLA54242560693_032023-O.webp",
    },
    {
        id: 5,
        name: "Biblia",
        price: 20,
        description: "Biblia para Niños",
        image: "https://http2.mlstatic.com/D_NQ_NP_993594-MLA54134999468_032023-O.webp",


    },
    {
        id: 6,
        name: "Biblia",
        price: 20,
        description: "Biblia Artistica",
        image: "https://http2.mlstatic.com/D_NQ_NP_650067-MLA54133279147_032023-O.webp",


    },
    {
        id: 7,
        name: "Biblia",
        price: 20,
        description: "Biblia Devocional",
        image: "https://http2.mlstatic.com/D_NQ_NP_677695-MLA53951499588_022023-O.webp",


    },
    {
        id: 8,
        name: "Biblia",
        price: 20,
        description: "Biblia para Niños",
        image: "https://http2.mlstatic.com/D_NQ_NP_655076-MLA53925811457_022023-O.webp",


    },
];

const Productos = () => {
    return (
        <Row>
            {fakeArray.map((elemento) => {
                return (
                    <Col xs={12} md={4} lg={3} key={elemento.id} className="p-2">
                        <Items { ...elemento} />
                    </Col>
                );

            })}

        </Row>
    )
}
export default Productos