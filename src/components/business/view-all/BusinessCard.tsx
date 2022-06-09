// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9a020f3a-4b71-42e5-8ff4-2c93f15ddb28/
import { BusinessCardContainer } from "./BusinessCard.css";

/**
 * On the wireframe "Location Name" is listed. Is this to be the full address of the business?
 */
interface BusinessCardInfo {
    id: string, 
    thumbnail: string, 
    name: string, 
    desc: string, 
    loc: string, 
    rating: number,
    cat: string,
    liked: boolean
};

const BusinessCard = (props: BusinessCardInfo): any => {
    return <BusinessCardContainer>
        <img src={props.thumbnail} alt={props.name} />
        <p>{props.cat}</p>
        <p>{props.name}</p>
        <p>{props.desc}</p>
        <p>{props.liked}</p>
        <hr />
        <p><span>{props.loc}</span><span>{props.rating}</span></p>
    </BusinessCardContainer>;
}

export default BusinessCard;