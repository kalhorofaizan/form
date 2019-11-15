import React, {useState} from 'react';
import {Form, Button, Col, Container} from 'react-bootstrap'

const Form1 = () => {
    //First Name field
    const [firstName,setFirstName]=useState('');
    // Last Name Field
    const [lastName,setLastName]=useState('');
    // Options Google Web Referral
    const [option,setoption]=useState('');
    // People Field
    const [peoples,setpeople]=useState('');
    // List Of People
    const [optionList,setOptionList]=useState(['Web','Google','Referral']);
const  send=()=>{
        if (option==="Referral"){
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
                    setoption(e.target.value)
                }}  >
                    <Form.Label>Options</Form.Label>
                    <Form.Control as="select">
                        {optionList.map((data)=><option key={data}  value={data} >{data}</option>)}
                    </Form.Control>
                </Form.Group>

                {option==="Referral"?
                    <Form.Group  >
                        <Form.Control placeholder="People name"  onChange={(e) => {
                            setpeople(e.target.value)
                        }} />

                    </Form.Group> :<div/>}


                <Button variant="primary"  onClick={send()}  >
                    Submit
                </Button>
            </Form>
        </Container>

    );
};

export default Form1;
