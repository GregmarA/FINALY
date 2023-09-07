import React from "react"; 
import Productos from "../../Main/GrillaP/Productos";
import { Container } from "react-bootstrap";
const MainVistas = () => { 
    return (
        <Container className="my-5">
            <h1 className="text-center">Bienvenidos al Ministerio EVANGELISTAS DE YHWH</h1>
            <hr />

        <Productos/>
        
        </Container>
        
    );
}
export default MainVistas