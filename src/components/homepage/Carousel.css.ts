import styled, { keyframes } from "styled-components"
import pic1 from '../../assets/GettyImages-1284545860.jpg'
import pic2 from '../../assets/GettyImages-1304819195.jpg'
import pic3 from '../../assets/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg'
import pic4 from '../../assets/middle_image.jpg'
import pic5 from '../../assets/Mask Group 16.png'

export const CarouselImg1 = styled.img`
    height:300px;
    width:300px;
     
    margin-left: 20px;
    margin-right: 20px;
`

CarouselImg1.defaultProps = {
	src: pic1
}
export const CarouselImg2 = styled.img`
    height:300px;
    width:300px; 
    margin-left: 20px;
    margin-right: 20px;
`

CarouselImg2.defaultProps = {
	src: pic2
}
export const CarouselImg3 = styled.img`
    height:300px;
    width:300px; 
    margin-left: 20px;
    margin-right: 20px;
`

CarouselImg3.defaultProps = {
	src: pic3
}
export const CarouselImg4 = styled.img`
    height:300px;
    width:300px; 
    margin-left: 20px;
    margin-right: 20px;
`

CarouselImg4.defaultProps = {
	src: pic4
}
export const CarouselImg5 = styled.img`
    height:300px;
    width:300px; 
    margin-left: 20px;
    margin-right: 20px;
`

CarouselImg5.defaultProps = {
	src: pic5
}
const slideAnimations = keyframes`
from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`

export const Looper = styled.div`
    width: 100%;
`

export const LooperInnerlist = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
    gap: 10px;
`

export const LooperListInstance = styled.div`
    display: flex;
    width: max-content;
    animation: ${slideAnimations} linear infinite;
`
