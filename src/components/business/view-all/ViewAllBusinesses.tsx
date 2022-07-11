// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import React, { FC, useEffect, useState } from 'react';
import { GenerateCards } from "./BusinessCard";
import { ViewAllBusinessesContainer, BusinessesFilter, AllBusinesses } from "./ViewAllBusinesses.css";
import { exampleBusiness } from "../business-interfaces";

/**
 * Maximum cards in a row: 3
 * Maximum cards in a page load: 21 (3 cards x 7 rows)
 * 
 * @returns {Node} ViewAllBusinesses
 */
const ViewAllBusinesses: FC = () => {
    const [allBusinesses, setAllBusinesses] = useState<{}[]>([]);
    const [count, setCount] = useState(0);

    const retrieveBusinesses = (): void => {};

    const tempBusinessGenerator = (num = 22) => {
        let exampleItems: Array<{}> = [];
        let counter: number = 1;

        do {
            exampleItems.push(exampleBusiness);
            counter++;
        } while (counter < num);

        setAllBusinesses(exampleItems);
    };

    useEffect(() => {
        tempBusinessGenerator();

        setCount(22);
    }, []);

    return (
        <ViewAllBusinessesContainer>
            <h1>FIND BUSINESSES</h1>
            
            <section>
                <AllBusinesses>
                    <BusinessesFilter>
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
                    </BusinessesFilter>

                    { GenerateCards(allBusinesses) }
                </AllBusinesses>
            </section>

            <button type="button" onClick={retrieveBusinesses}>SEE MORE BUSINESSES</button>
        </ViewAllBusinessesContainer>
    );
};

export default ViewAllBusinesses;
