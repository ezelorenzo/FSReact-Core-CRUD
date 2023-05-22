

import { Card, CardBody, CardHeader, Col, Container, Row, Button } from "reactstrap"
import ContactTable from "./components/ContactTable"

const App = () => {

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
                            <ContactTable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        
        )
}

export default App;