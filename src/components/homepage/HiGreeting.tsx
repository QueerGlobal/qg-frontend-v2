import { FC } from 'react';
import { HiGreetingContainer, Greeting, TopImageContainer } from './HiGreeting.css';
import topImg from '../../assets/home/top.png';

const HiGreeting: FC = () => {
    return (
        <HiGreetingContainer>
            <Greeting>Hi</Greeting>
            <TopImageContainer>
                <img src={topImg} alt="" />
            </TopImageContainer>
        </HiGreetingContainer>
    );
};

export default HiGreeting;
