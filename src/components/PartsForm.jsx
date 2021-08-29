import React, {useState} from "react";
import {useExclusions, useFetched} from "../lookups/APIs";
import styled from 'styled-components';

//adding style components to the css mix
const Input = styled.input`
    font-size: 0.5em;
    border: none;
    border-radius: 3px;
`;

const Message = styled.div`
    font-size: 0.75em;
    margin: 1em;
    padding: 0.25em 1em;
    color: palevioletred;
`;

const PartsForm = () => {
    const [partID, setPartID] = useState("");
    const [message, setMessage] = useState("");
    const exclusions = useExclusions();
    const fetched = useFetched();

    //checks for all our requirements
    const listsCheck = (partID) =>
        !partID.match(/^(\d{4})(-)([a-zA-Z0-9]){4,}$/) ?
            setMessage('please check your part number format') :
        exclusions.includes(partID) ?
            setMessage('this part is excluded') :
        fetched.includes(partID) ?
            setMessage(`we found ${partID} in our system`) :
            setMessage('no parts found')

    return (
        <form onSubmit={(e) => {
            //we don't want to submit this form
            e.preventDefault();
            listsCheck(partID);
        }}>
            <label>
                Which part number are you looking for?
                <div>
                    <Input type="text" placeholder="1234-example" value={partID} onChange={e => setPartID(e.target.value)} />
                    <Input type="submit" value="Submit"/>
                </div>
            </label>
            <Message>
                {message}
            </Message>
        </form>
    );
}

export default PartsForm;
