import { useState, useEffect } from "react";

export const useExclusions = () => {
    const [exclusions, setExclusions] = useState([]);

    useEffect(() => {
        fetch('Exclusions.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                checkForError(response);
                return response.json();
            })
            .then((json) => {
                json.map(item => {
                    return item.PartNumber
                })
            });
    }, []);

    return exclusions;
};

export const useFetched = () => {
    const [fetched,setFetched] = useState([]);

    useEffect(() => {
        // fetch(
        //     //ideally would abstract the URL to cater for our test environments
        //     `https://partstrader.co.nz/parts/`
        // )
        //     .then((response) => {
        //         checkForError(response);
        //         return response.json();
        //     })
        //     .then((json) => {
        //         setFetched(json.map(item => {
        //             return item.PartNumber
        //         }))
        //     });
        setFetched(['1234-abcde','1234-abcdef'])
    }, []);

    return fetched;
};

const checkForError = (response) => {
    if (!response.ok) {
        switch (response.status) {
            case 401:
                throw Error('Unauthorised use of the lookup');
            default:
                throw Error('Unable to retrieve the results');
        }
    }
};
