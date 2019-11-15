import React, {useState} from 'react';
import {Form, Button, Col, Container} from 'react-bootstrap'

const Form1 = () => {
    //First Name field
    const [firstName,setFirstName]=useState('');
    // Last Name Field
    const [lastName,setLastName]=useState('');
    // Options Google Web Referral
    const [selection,setSelection]=useState('');
    // People Field
    const [peoples,setpeople]=useState('');
    // List Of People
    const [peopleList,setPeopleList]=useState(['Abana','Abel','Abiah']);
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
                    <Form.Group onChange={(e)=>{
                        console.log(e.target.value);
                        setpeople(e.target.value)
                    }} >
                        <Form.Label>Peoples</Form.Label>
                        <Form.Control as="select">
                            {peopleList.map((data)=><option key={data}  value={data} >{data}</option>)}
                        </Form.Control>
                    </Form.Group> :<div/>}


                <Button variant="primary"  onClick={send()}  >
                    Submit
                </Button>
            </Form>
        </Container>

    );
};

export default Form1;
