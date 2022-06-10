// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import React, { FC, useState } from 'react';
import { GenerateCards } from "./BusinessCard";
import { BusinessesFilter, AllBusinesses } from "./ViewAllBusinesses.css";

/**
 * Maximum cards in a row: 3
 * Maximum cards in a page load: 21 (3 cards x 7 rows)
 * 
 * @returns {Node} ViewAllBusinesses
 */
const ViewAllBusinesses: FC = () => {
    const [loadMoreBusinesses, setLoadMoreBusinesses] = useState(false); // Businesses will be loaded from subsequent xhr calls

    const items = [
        {
            id: "1-a", 
            key: "1-a-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "2-b", 
            key: "2-b-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "3-c", 
            key: "3-c-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "4-a", 
            key: "4-a-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "5-b", 
            key: "5-b-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "6-c", 
            key: "6-c-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "7-a", 
            key: "7-a-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "8-b", 
            key: "8-b-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "9-c", 
            key: "9-c-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "10-a", 
            key: "10-a-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "11-b", 
            key: "11-b-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "12-c", 
            key: "12-c-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "13-a", 
            key: "13-a-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "14-b", 
            key: "14-b-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "15-c", 
            key: "15-c-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "16-a", 
            key: "16-a-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "17-b", 
            key: "17-b-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "18-c", 
            key: "18-c-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "19-a", 
            key: "19-a-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "20-b", 
            key: "20-b-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        },
        {
            id: "21-c", 
            key: "21-c-key", 
            thumbnail: "placeholder", 
            cat: "cat", 
            name: "name", 
            desc: "desc", 
            loc: "loc", 
            rating: 1, 
            liked: true, 
        }
    ];

    return (
        <>
            <h1>FIND BUSINESSES</h1>
            
            <section>
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

                <AllBusinesses>
                {
                    /** Where to map the businesses. Info will be populated from an xhr value from useEffect */
                    GenerateCards(items)
                }
                </AllBusinesses>
            </section>

            <button type="button">SEE MORE BUSINESSES</button>
        </>
    );
};

export default ViewAllBusinesses;