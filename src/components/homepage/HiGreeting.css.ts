
import styled from 'styled-components';
import colors from '../../styles/colors';
import womenWithGlasses from '../../assets/home/top.png'

export const HiGreetingContainer = styled.div`
  z-index: 2;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Hi = styled.span`
  font-size: 10vw;
  font-family: 'Kaushan Script', cursive;
  color: white;
  @media (max-width: 1168px) {
    font-size: 5vw;
  }
  @media (max-width: 568px) {
    
  }
`

export const Header1 = styled.h1`
  color: white;
  position: absolute;
  right: 400px;
  font-size: 200%;
  @media (max-width: 1168px) {
    font-size: 100%;
  }
  @media (max-width: 568px) {
    font-size: 150%;
    position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
    top: 300px;
    color: black;
    z-index: 11;
  }
`

export const WomenWithGlasses = styled.img`
	position: relative;
  height: 50%;
  width: 50%;
`

WomenWithGlasses.defaultProps = {
	src: womenWithGlasses
}
