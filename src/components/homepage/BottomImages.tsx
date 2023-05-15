import { FC } from 'react';
import { BottomImagesContainer } from './BottomImages.css';
import imgLeft from '../../assets/home/zhang-kaiyv-0u6fBh1CRm8-unsplash.jpg';
import imgRight from '../../assets/home/GettyImages-1284545860.jpg';

const BottomImages: FC = () => {
    return (
        <BottomImagesContainer>
            <img src={imgLeft} alt="" />
            <img src={imgRight} alt="" />
        </BottomImagesContainer>
    );
};

export default BottomImages;
