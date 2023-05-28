

import { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row, Button } from "reactstrap"
import ContactTable from "./components/ContactTable"
import ModalContact from "./components/ModalContact"

const App = () => {

    const [contacts, setContacts] = useState([]) //contacts is going to get the data in the show contacts method
    const [showModal, setShowModal] = useState(false);
    const [edit, setEdit] = useState(null)
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

    const saveContact = async (contact) => {

        const response = await fetch("api/contact/SaveList", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(contact)
        })

        if (response.ok) {
            setShowModal(!showModal);
            showContacts();
        }
    }

    const editContact = async (contact) => {

        const response = await fetch("api/contact/EditList", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(contact)
        })

        if (response.ok) {
            setShowModal(!showModal);
            showContacts();
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Contacts List</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setShowModal(!showModal) }>New Contact</Button>                            
                            <hr></hr>
                            <ContactTable data={contacts}
                                setEdit={ setEdit }
                                showModal={ showModal }
                                setShowModal={ setShowModal }
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalContact
                showModal={showModal}
                setShowModal={setShowModal}
                SaveContact={saveContact}
                edit={edit}
                setEdit={edit}
                editContact={editContact}
            />

        </Container>
        
        )
}

export default App;