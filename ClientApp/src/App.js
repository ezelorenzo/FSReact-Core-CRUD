

import { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row, Button } from "reactstrap"
import ContactTable from "./components/ContactTable"

const App = () => {

    const [contacts, setContacts] = useState([]) //contacts is going to get the data in the show contacts method

    const showContacts = async () => {

        const response = await fetch("api/contact/ReturnList");

        if (response.ok) {
            const data = await response.json();
            setContacts(data)
        }
        else {
            console.log("error en la lista")
        }
    }

    useEffect(() => {

        showContacts()

    }, [])             //useEffect allows to use a method at the start.


    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Contacts List</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">New Contact</Button>                            
                            <hr></hr>
                            <ContactTable data={contacts} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        
        )
}

export default App;