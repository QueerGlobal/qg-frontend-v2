// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import React, { FC, useState } from 'react';
import placeholder from "../../assets/misc/placeholder.jpeg";

const ViewAllBusinesses: FC = () => {
    const [loadMoreBusinesses, setLoadMoreBusinesses] = useState(false);
    const businesses = [
        {
            key: 1, 
            img: {placeholder}, 
            cat: "CATEGORY", 
            name: "Business Name", 
            desc: "This is where the description goes for business. You can add additional, conference schedules, and more here.", 
            like: 1, 
            location: "Location Name", 
            stars: 5
        },
        {
            key: 2, 
            img: {placeholder}, 
            cat: "CATEGORY", 
            name: "Business Name", 
            desc: "This is where the description goes for business. You can add additional, conference schedules, and more here.", 
            like: 0, 
            location: "Location Name", 
            stars: 5
        }
    ];


    return (
        <>
            <h1>FIND BUSINESSES</h1>
            <section>
                <div>
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
                </div>
                {businesses.map((key, img, cat, name, desc, like, location, stars) => {
                    return <div id={key} className={key}>
                        <img src={img} alt={name} />
                        <p>{cat}</p>
                        <p>{name}</p>
                        <p>{desc}</p>
                        <div>{like}</div>
                        <hr />
                        <p><span>{location}</span><span>{stars}</span></p>
                    </div>;
                })}
            </section>
            <button>SEE MORE BUSINESSES</button>
        </>
    );
};

export default ViewAllBusinesses;