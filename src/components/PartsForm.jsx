import React, {useState} from "react";
import {useExclusions, useFetched} from "../lookups/APIs";

export function PartsForm() {
    const [partID, setPartID] = useState("");
    const [message, setMessage] = useState("");
    const exclusions = useExclusions();
    const fetched = useFetched();

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
            e.preventDefault();
            listsCheck(partID);
        }}>
            <label>
                Which part number you are looking for?
                <input type="text" placeholder="1234-example" value={partID} onChange={e => setPartID(e.target.value)} />
            </label>
            <input type="submit" value="Submit"/>
            <div>
                {message}
            </div>
        </form>
    );
}