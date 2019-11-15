import React, {useState} from 'react';
import './App.css'
const Form1 = () => {
    //First Name field
    const [firstName, setFirstName] = useState('');
    // Last Name Field
    const [lastName, setLastName] = useState('');
    // Options Google Web Referral
    const [option, setoption] = useState('');
    // People Field
    const [peoples, setpeople] = useState('');
    const send = () => {
        if (option === "Referral") {
            // write code for referral
        } else {
            // write code for not referral
        }
    };

    return (
        <div>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="FirstName" name="firstname" placeholder="First name" onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="LastName" name="lastname" placeholder="last name" onChange={(e) => {
                    setLastName(e.target.value)
                }}/>

                <label htmlFor="Option">Option</label>
                <select id="Option" name="Option" value={option} onChange={(e) => {
                    setoption(e.target.value)
                }}> >
                    <option value="Web">Web</option>
                    <option value="Google">Google</option>
                    <option value="Referral">Referral</option>
                </select>
                {option === "Referral" ?
                    <>
                        <label htmlFor="lname">Peoples</label>
                        <input type="text" id="PeoplsName" name="Peoples name" placeholder="Peoples" onChange={(e) => {
                            setpeople(e.target.value)
                        }}/>
                    </> : <div/>}

                <input type="submit" value="Submit" onClick={send()}/>
            </form>
        </div>

    );
};

export default Form1;
