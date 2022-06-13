import { nanoid } from "nanoid";

interface businessInfo {
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

interface fullBusinessInfo extends businessInfo {
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
    businessContactName?: string,
    businessContactEmail?: string,
    businessContactTel?: string,
    businessHours?: string
}

const exampleBusiness: businessInfo = {
    name: "Business Name",
    id: "1-a", 
    thumbnail: "placeholder", 
    cat: "cat",  
    desc: "desc", 
    addr1: "loc", 
    rating: 1, 
    liked: true, 
};

const exampleBusinessFullInfo: fullBusinessInfo = {
    name: "Business Name",
    email: "businessname@gmail.com",
    twitter: "https://twitter.com/tempBusinessName",
    linkedIn: "https://www.linkedin.com/company/tempBusinessName",
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
    businessContactName: "Business Contacter",
    businessContactEmail: "business@contact.net",
    businessContactTel: "777-212-3999",
    businessHours: "SunC|Mon5:00pm-8:00pm|Tues5:00pm-8:00pm|Wed5:00pm-8:00pm|Thurs5:00pm-8:00pm|Fri5:00pm-8:00pm|Sat5:00pm-8:00pm"
};

const GenerateBusinessReviews = (items: Array<{}>): any => {
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

export default businessInfo;

export type { 
    businessInfo,
    fullBusinessInfo 
};

export {
    exampleBusiness,
    exampleBusinessFullInfo,
    exampleReviews,
    GenerateBusinessReviews
};