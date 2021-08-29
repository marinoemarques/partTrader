import { useState, useEffect } from "react";

const useExclusions = () => {
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
                console.log(response);
                return response.json();
            })
            .then((values) => {
                setExclusions(values.map(item => {
                    return item.PartNumber
                }))
            });
    }, []);

    return exclusions;
};

export default useExclusions;