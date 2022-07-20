// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import { ResourceCardContainer, Thumbnail, GoldStar, EmptyStar } from "./ResourceCard.css";
import resourceInfo from '../resource-interfaces';

/**
 * On the wireframe "Location Name" is listed. Is this to be the full address of the resource?
 */


const ReviewStars = (rating: number): any => {
    let ratingStart = 0;
    let allStars: any;

    do {
        allStars += GoldStar;
        ratingStart++;
    } while (ratingStart < rating);

    return allStars;
};

const RemainingStars = (rating: number): any => {
    let restStart = 0;
    let allStars: any;

    do {
        allStars += EmptyStar;
        restStart++;
    } while (restStart < 5 - rating);

    return allStars;
};

const ResourceCard = (props: resourceInfo): any => {
    return <ResourceCardContainer>
        <Thumbnail src={props.thumbnail} alt={props.name} />
        <p>{props.cat}</p>
        <p>{props.name}</p>
        <p>{props.desc}</p>
        <p>{props.liked}</p>
        <hr />
        <p>
            <span>{props.addr1}</span>
            <GoldStar /><EmptyStar />{/* TODO - How to generate the stars?!*/}
        </p>
    </ResourceCardContainer>;
}

const GenerateCards = (items: Array<any>): any => {
    return items.map((item, index) => (
        <ResourceCard   
            key={item.id} 
            id={item.id} 
            thumbnail={item.thumbnail} 
            cat={item.cat}
            name={item.name}
            desc={item.desc}
            addr1={item.addr1}
            rating={item.rating}
            liked={item.liked}
        />
      ));
};

export default ResourceCard;
export {GenerateCards};