import React from "react"; 
import { Container } from "react-bootstrap";
import ItemsForms from "../../components/Admin/Forms/ItemsForms";
import ItemsTable from "../../components/Admin/Table/ItemsTable";

const AdminVistas = () => { 
    return (
        <Container className="my-5">
            <h1 className="text-center">Panel de Administración</h1>
            <hr />

        <ItemsForms />
        <ItemsTable/>
        
        </Container>
        
    );
}
export default AdminVistas