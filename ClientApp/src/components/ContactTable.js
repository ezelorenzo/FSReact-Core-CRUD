
import { Table, Button } from "reactstrap"

const ContactTable = ({ data }) => {

    return(
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Phone</th>
                    <th></th>                    
                </tr>
            </thead>
            <tbody>
                {
                    (data.lenght < 1) ? (
                        <tr>
                            <td colSpan = "4">Sin Registros</td>
                        </tr>
                    ) : (
                            data.map((item) =>                                
                                <tr key={item.idContact}>
                                    <td>{item.name}</td>
                                    <td>{item.mail}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2">Editar</Button> 
                                        <Button color="danger" size="sm">Eliminar</Button>
                                    </td>
                                </tr>
                                )                            
                            )
                }
            </tbody>
        </Table>           
        )
}

export default ContactTable;