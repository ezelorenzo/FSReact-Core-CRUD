
import { useEffect, useState } from "react"
import { FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Form, Input, Label, Button } from "reactstrap"

const contactModel = {

    idContact: 0,
    name: "",
    mail: "",
    phone: ""
}


const ModalContact = ({ showModal, setShowModal,SaveContact, edit, setEdit, editContact}) => {

    const [contact, SetContact] = useState(contactModel);

    const RefreshData = (e) => {

        console.log(e.target.name + " : " + e.target.value);

        SetContact(
            {
                ...contact,
                [e.target.name]: e.target.value,

            }
        )
    }

    const SendData = () => {

        if (contact.idContact == 0) {
            SaveContact(contact)
        }
        else {
            editContact(contact)
        }
        SetContact(contactModel)
    }

    useEffect(() => {
        if (edit != null) {
            SetContact(edit)
        }
        else {
            SetContact(contactModel)
        }
    }, [edit]) //this line means that it will execute the use effect in case that edit changes.

    const closeModal = () => {
        setShowModal(!showModal)
        setEdit(null)
    }


    return (

        <Modal isOpen={showModal}>
            <ModalHeader>
                {contact.idContact == 0 ? "New Contact" : "Edit Contact"}
            </ModalHeader>

            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input name="name" onChange={(e) => RefreshData(e)} value={ contact.name}/>
                    </FormGroup> 
                    <FormGroup>
                        <Label>Mail</Label>
                        <Input name="mail" onChange={(e) => RefreshData(e)} value={contact.mail} />
                    </FormGroup> 
                    <FormGroup>
                        <Label>Phone</Label>
                        <Input name="phone" onChange={(e) => RefreshData(e)} value={contact.phone} />
                    </FormGroup> 
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={SendData}>Save</Button>
                <Button color="danger" size="sm" onClick={closeModal}>Close</Button>
            </ModalFooter>
        </Modal>   
        )
}

export default ModalContact;