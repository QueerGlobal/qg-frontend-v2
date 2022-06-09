// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import React, { FC, useState } from 'react';
import BusinessCard from "./BusinessCard";
import { BusinessesFilter } from "./ViewAllBusinesses.css";


const ViewAllBusinesses: FC = () => {
    const [loadMoreBusinesses, setLoadMoreBusinesses] = useState(false); // Businesses will be loaded from subsequent xhr calls

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

                {/** Where to map the businesses. Info will be populated from an xhr value from useEffect */}
                <BusinessCard id="unique-id-generated" thumbnail="string" cat="string" name="string" desc="string" loc="string" rating={1} liked={false} />
            </section>

            <button>SEE MORE BUSINESSES</button>
        </>
    );
};

export default ViewAllBusinesses;