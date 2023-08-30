import React from "react";
import { Col, Row } from "react-bootstrap";
import Items from "../Items/Items";

const fakeArray = [
    {
        id: 1,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia",
        image: "https://http2.mlstatic.com/D_NQ_NP_992036-MLA70798278111_072023-V.webp",
    },
    {
        id: 2,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia para Niños",
        image: "https://http2.mlstatic.com/D_NQ_NP_703075-MLA54387631634_032023-O.webp",
    },
    {
        id: 3,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia Juvenil",
        image: "https://http2.mlstatic.com/D_NQ_NP_629752-MLA70766161508_072023-O.webp",
    },
    {
        id: 4,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia de Estudio",
        image: "https://http2.mlstatic.com/D_NQ_NP_826807-MLA54242560693_032023-O.webp",
    },
    {
        id: 5,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia para Niños",
        image: "https://http2.mlstatic.com/D_NQ_NP_993594-MLA54134999468_032023-O.webp",


    },
    {
        id: 6,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia Artistica",
        image: "https://http2.mlstatic.com/D_NQ_NP_650067-MLA54133279147_032023-O.webp",


    },
    {
        id: 7,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia Devocional",
        image: "https://http2.mlstatic.com/D_NQ_NP_677695-MLA53951499588_022023-O.webp",


    },
    {
        id: 8,
        name: "Biblia",
        precio: 20,
        descripcion: "Biblia para Niños",
        image: "https://http2.mlstatic.com/D_NQ_NP_655076-MLA53925811457_022023-O.webp",


    },
];

const Productos = () => {
    return (
        <Row>
            {fakeArray.map((elemento) => {
                return (
                    <Col xs={12} md={4} lg={3} key={elemento.id}>
                        <Items {...elemento} />
                    </Col>
                );

            })}

        </Row>
    )
}
export default Productos