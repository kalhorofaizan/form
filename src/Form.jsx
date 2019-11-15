import React, {useState} from 'react';
import {Form, Button, Col, Container} from 'react-bootstrap'

const Form1 = () => {

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [selection,setSelection]=useState('');
    const [peoples,setpeople]=useState('');
const  send=()=>{
        if (selection==="Referral"){
            // write code for referral
        } else {
            // write code for not referral
        }
};

    return (
        <Container>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="First name" onChange={(e) => {
                            setFirstName(e.target.value)
                        }}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name"  onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                    </Col>
                </Form.Row>


                <Form.Group controlId="formBasicCheckbox" onChange={(e)=>{
                    setSelection(e.target.value)
                }}  >
                    <Form.Check type="radio" value='Web'  name="selection"   id={"Web"} label="Web"   />
                    <Form.Check type="radio" value='Google'  name="selection"  id={"Google"}  label="Google"/>
                    <Form.Check type="radio" value='Referral'   name="selection" id={"Referral"} label="Referral"/>
                </Form.Group>

                {selection==="Referral"?
                    <Form.Group>
                        <Form.Control placeholder="Name of peoples" onChange={(e) => {
                            setpeople(e.target.value)
                        }}/>
                    </Form.Group> :<div/>}


                <Button variant="primary"  onClick={send()}  >
                    Submit
                </Button>
            </Form>
        </Container>

    );
};

export default Form1;
