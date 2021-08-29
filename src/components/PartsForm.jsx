import React, {useState} from "react";
import useExclusions from "../lookups/useExclusions";
import useFetched from "../lookups/useFetched";

export function PartsForm() {
    const [partID, setPartID] = useState("");
    const [message, setMessage] = useState("");
    const exclusions = useExclusions();
    const fetched = useFetched();

    const checkLists = (partID) => {
        if (!partID.match(/^(\d{4})(-)([a-zA-Z0-9]){4,}$/)) {
            setMessage('please check your part number format');
        }
        else if (exclusions.includes(partID)) {
            setMessage('excluded')
        }
        else if (fetched.includes(partID)) {
            setMessage(`we found ${partID} in our system`)
        }
        else {
            setMessage('no parts found')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkLists(partID);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                What is the part number you are looking for?
                <input type="text" placeholder="1234-example" value={partID} onChange={e => setPartID(e.target.value)} />
            </label>
            <input type="submit" value="Submit"/>
            <div>
                {message}
            </div>
        </form>
    );
}