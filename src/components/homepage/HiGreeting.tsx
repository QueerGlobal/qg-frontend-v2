import { FC } from 'react';
import { Header1, Hi, HiGreetingContainer, WomenWithGlasses} from './HiGreeting.css';
import topImg from '../../assets/home/top.png';

const HiGreeting: FC = () => {
    return (
        <HiGreetingContainer>
                <WomenWithGlasses />
                <Header1 >
                    <Hi>Hi, </Hi>
                    WE&prime;RE QUEER GLOBAL.
                </Header1>
        </HiGreetingContainer>
    );
};

export default HiGreeting;
