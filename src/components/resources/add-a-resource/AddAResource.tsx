// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import React, { FC, useEffect, useState } from 'react';
import { AddAResourceContainer } from "./AddAResource.css";
import { exampleResource } from "../resource-interfaces";

/**
 * Maximum cards in a row: 3
 * Maximum cards in a page load: 21 (3 cards x 7 rows)
 * 
 * @returns {Node} AddAResource
 */
const AddAResource: FC = () => {
    const [allResources, setAllResources] = useState<{}[]>([]);
    const [count, setCount] = useState(0);

    const retrieveResources = (): void => {
        // fetch("/", {
        //     method: "POST",
        //     body: JSON.stringify({ count: count })
        // })
        // .then((res) => {
        //     if (res.status === 200) {
        //         return res.json();
        //     }
        // })
        // .then(data => {
            setCount(prev => prev += 21);
            tempResourceGenerator(count)
        // })
        // .catch((err) => console.log(err));
    };

    const tempResourceGenerator = (num = 22) => {
        let exampleItems: Array<{}> = [];
        let counter: number = 1;

        do {
            exampleItems.push(exampleResource);
            counter++;
        } while (counter < num);

        setAllResources(exampleItems);
    };

    useEffect(() => {
        tempResourceGenerator();

        setCount(22);
    }, []);

    return (
        <AddAResourceContainer>
            <h1>ADD A RESOURCE</h1>
        </AddAResourceContainer>
    );
};

export default AddAResource;
