import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const  baseUrl= process.env.REACT_APP_BASE_URL;
const ItemsTable = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        const itemsFetch = async () => {
            const data = await axios.get('${baseUrl}/items');
            setItems(data.data)
        }
        itemsFetch()

    }, []);
    return (
        <Table striped bordered hover variant="dark" className="mt-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {items.map((elemento)=>{
                    return <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.name}</td>
                        <td>{elemento.price}</td>
                        <td>{elemento.description}</td>
                        <td>{elemento.image}</td>

                    </tr>
                
                })}
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>




            </tbody>
        </Table>
    );
}
export default ItemsTable