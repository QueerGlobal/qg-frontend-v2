import { BusinessesContainer } from "./business-data.css";

interface BusinessItems { // Will be populated from an xhr value from useEffect
    key: string, 
    img: string, 
    cat: string, 
    name: string, 
    desc: string, 
    loc: string, 
    rating: number
};

const Business = (props: BusinessItems): any => {
    return <BusinessesContainer>
        Sup
    </BusinessesContainer>;
}

export default Business;