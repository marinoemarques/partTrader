import { useState, useEffect } from "react";

const useFetched = () => {
    const [fetched,setFetched]=useState([]);

    useEffect(() => {
        fetch(
            `https://partstrader.co.nz/parts/`
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((values) => {
                setFetched(values.map(item => {
                    return item.PartNumber
                }))
            });
    }, []);

    return fetched;
};

export default useFetched;