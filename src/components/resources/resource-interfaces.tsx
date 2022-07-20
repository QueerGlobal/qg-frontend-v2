import { nanoid } from "nanoid";

interface resourceInfo {
    id: string, 
    thumbnail: string,
    name: string, 
    desc: string, 
    rating: number,
    cat: string,
    liked: boolean,
    addr1: string,
    email?: string
};

interface fullResourceInfo extends resourceInfo {
    addr2?: string,
    city?: string,
    state?: string,
    zipcode?: string,
    country?: string,
    url?: string,
    dateAdded?: Date,
    bannerImg?: string,
    twitter?: string,
    linkedIn?: string,
    tel?: string,
    addedBy?: string,
    addedByPronouns?: string,
    resourceContactName?: string,
    resourceContactEmail?: string,
    resourceContactTel?: string,
    resourceHours?: string
}

const exampleResource: resourceInfo = {
    name: "Resource Name",
    id: "1-a", 
    thumbnail: "placeholder", 
    cat: "cat",  
    desc: "desc", 
    addr1: "loc", 
    rating: 1, 
    liked: true, 
};

const exampleResourceFullInfo: fullResourceInfo = {
    name: "Resource Name",
    email: "resourcename@gmail.com",
    twitter: "https://twitter.com/tempResourceName",
    linkedIn: "https://www.linkedin.com/company/tempResourceName",
    addedBy: "@userName",
    id: nanoid(6), 
    thumbnail: "placeholder", 
    cat: "cat",  
    desc: "desc", 
    rating: 1, 
    liked: true,
    addr1: "5 TheStreet Lane", 
    addr2: "ADDR2",
    city: "CITY",
    state: "NY",
    zipcode: "12321",
    country: "US",
    url: "www.aaa.com",
    dateAdded: new Date(),
    bannerImg: "someurl/cool.png",
    tel: "123-321-1234",
    addedByPronouns: "she/her",
    resourceContactName: "Resource Contacter",
    resourceContactEmail: "resource@contact.net",
    resourceContactTel: "777-212-3999",
    resourceHours: "SunC|Mon5:00pm-8:00pm|Tues5:00pm-8:00pm|Wed5:00pm-8:00pm|Thurs5:00pm-8:00pm|Fri5:00pm-8:00pm|Sat5:00pm-8:00pm"
};

const GenerateResourceReviews = (items: Array<{}>): any => {
    return items.map((item) => (
        <div>Review #{item}</div>
      ));
};

const exampleReviews: Array<{}> = [
    {
        reviewerThumbnail: "pic",
        reviewerName: "userReviewer",
        review: "Okay this is a review",
        reviewDate: new Date()
    },
    {
        reviewerThumbnail: "pic2",
        reviewerName: "user2Reviewer2",
        review: "Okay this is 2 reviews",
        reviewDate: new Date()
    }
];

export default resourceInfo;

export type { 
    resourceInfo,
    fullResourceInfo 
};

export {
    exampleResource,
    exampleResourceFullInfo,
    exampleReviews,
    GenerateResourceReviews
};