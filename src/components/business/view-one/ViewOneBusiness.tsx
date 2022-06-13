// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/9d59dc18-80d5-4e68-94f7-7bb7738cbf76/
import React, { FC, useState } from 'react';
import { ViewOneBusinessContainer, SocialIcons, Thumbnail, ChipSelected, Section, Div } from './ViewOneBusiness.css';
import pHImage from '../../../assets/misc/placeholder_thumbnail.jpeg';
import placeholder from '../../../assets/misc/placeholder.jpeg';
import twitterImg from "../../../assets/footer/twitter.svg";
import linkedInImg from "../../../assets/footer/linkedIn.svg";
import { exampleBusinessFullInfo, exampleReviews, GenerateBusinessReviews } from '../business-interfaces';

/**
 * A business will be rated by logged-in? users so the rating can be set here
 * 
 * @returns 
 */
const ViewOneBusiness: FC = () => {
    const [reviews, setReviews] = useState<{}[]>([{}]);

    const {
        name,
        twitter,
        linkedIn,
        addedBy,
        cat,
        desc,
        url,
        tel,
        addr1, 
        liked,
        addr2,
        city,
        state,
        zipcode,
        addedByPronouns,
        businessContactName,
        businessContactEmail,
        businessContactTel
    } = exampleBusinessFullInfo;

    const likedBusiness = ():any => {
        return liked ? <span>♡</span> : <span>/♡</span>;
    }

    setReviews(exampleReviews);

    return <ViewOneBusinessContainer>
        <section>
            <img src={placeholder} alt="" />
            <div>
                <Thumbnail src={pHImage} alt="" />
                <h1>{name}</h1>
                <div>
                    {// Mapping through
                    }
                    <div>★★★★★</div>
                </div>
            </div>
        </section>

        <hr />

        <section>
            <aside>
                {likedBusiness()} &nbsp; <span>Share</span>
                <p>{url}</p>
                <p>{tel}</p>
                <a href={twitter} title={twitter} target="_blank" rel="noreferrer noopener">
                    <SocialIcons src={twitterImg} alt="twitter" />
                </a> &nbsp; 
                <a href={linkedIn} title={linkedIn} target="_blank" rel="noreferrer noopener">
                    <SocialIcons src={linkedInImg} alt="linkedIn" />
                </a>
                <p>{addr1}</p>
                <p>{addr2}</p>
                <p>{city}, {state} {zipcode}</p>
                <br />
                <p>Added by: </p>
                <p>{addedBy} ({addedByPronouns})</p>
                <p>Business Contact:</p>
                <p> {businessContactName}
                    <br />
                    {businessContactEmail}
                    <br />
                    {businessContactTel}
                </p>
            </aside>

            <div>
                <p>
                    <h2>Business Category:</h2> {cat}
                </p>
                <p>
                    <h2>Description</h2>
                    <p>{desc}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Est ultricies integer quis auctor elit sed vulputate mi.
                    </p>
                    <p>Porta nibh venenatis cras sed felis eget. Tristique senectus et netus et malesuada fames ac turpis. Cras semper auctor neque vitae tempus quam pellentesque. Aliquam sem fringilla ut morbi. Donec enim diam vulputate ut. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Facilisi nullam vehicula ipsum a arcu cursus vitae. 
                    </p>
                    <p>Suscipit tellus mauris a diam maecenas. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Dictum non consectetur a erat nam at lectus. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Feugiat nibh sed pulvinar proin gravida hendrerit. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Scelerisque viverra mauris in aliquam sem fringilla.
                    </p>
                    <p>Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Vitae suscipit tellus mauris a diam maecenas. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Vitae aliquet nec ullamcorper sit amet risus. Tempus egestas sed sed risus. </p>
                    <p>Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl..</p>
                </p>
            </div>
        </section>

        <hr />

        <ChipSelected>Chip Selected</ChipSelected>

        <hr />

        {/** Assuming business hours will be pulled from Google Maps API? Added dummy data just in case */}
        <Section>
            <Div>
            MAP
            <br />
            {}
            </Div>

            <Div>
            HOURS
            </Div>
        </Section>

        <hr />
        <Section>
            <h2>Reviews v</h2> <span>2 Reviews</span>
        </Section>
        <Section>
            {GenerateBusinessReviews(reviews)}
        </Section>
    </ViewOneBusinessContainer>
}

export default ViewOneBusiness;