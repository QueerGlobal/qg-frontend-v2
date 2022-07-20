// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import React, { FC, useEffect, useState } from 'react';
import { GenerateCards } from "./ResourceCard";
import { ViewAllResourcesContainer, ResourcesFilter, AllResources } from "./ViewAllResources.css";
import { exampleResource } from "../resource-interfaces";

/**
 * Maximum cards in a row: 3
 * Maximum cards in a page load: 21 (3 cards x 7 rows)
 * 
 * @returns {Node} ViewAllResources
 */
const ViewAllResources: FC = () => {
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
        <ViewAllResourcesContainer>
            <h1>FIND RESOURCES</h1>
            
            <section>
                <AllResources>
                    <ResourcesFilter>
                        <div>
                            <label htmlFor="listing">FIND LISTING</label>
                            <input type="text" name="listing" id="listing" placeholder="Cape Verdean Food" />
                        </div>

                        <div>
                            <label htmlFor="category">SELECT CATEGORY</label>
                            <select name="category" id="category" title="category">
                                <option value="a">Aaa</option>
                                <option value="b">Bbb</option>
                                <option value="c">Ccc</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="location">SEARCH BY LOCATION</label>
                            <input type="text" id="location" name="location" placeholder="Zip 02806" />
                        </div>
                        <div>
                            <a href="/"><small>CLEAR ALL</small></a>
                            <button>APPLY</button>
                        </div>
                    </ResourcesFilter>

                    { GenerateCards(allResources) }
                </AllResources>
            </section>

            <button type="button" onClick={retrieveResources}>SEE MORE RESOURCES</button>
        </ViewAllResourcesContainer>
    );
};

export default ViewAllResources;
