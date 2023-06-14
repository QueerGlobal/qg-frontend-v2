import styled from 'styled-components';
import colors from '../../styles/colors';
import braidedGirl from '../../assets/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg'
// import standingMan from '../'


/** TODO - Figure out meaning behind the box-shadow color */
export const HomepageContentsWrapper = styled.div`
  z-index: 1;
  display: flex;
  background-color: ${colors.WHITE};
  box-shadow: 0px 0px 10px #00000040;
  flex-direction: column;
  padding: 100px;
  max-width: 90%;
  width: 100%;
  gap: 100px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1168px) {
    padding: 10px;
    gap: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  font-size: 5vw;
  @media (max-width: 568px) {
    margin-top: 100px;
  }
`

export const Header1 = styled.h1`
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  font-size: 5vw;

`;

export const LGBTQIA = styled.span`
  color: #655dc6;
  font-style: italic;
  display: inline-block;
  border-bottom: 5px solid #655dc6;
  font-weight:bold;
`

export const UpperBody = styled.div`
  width: 100%;
  display: flex;
  gap: 150px;
  max-height: 800px;
  @media (max-width: 1168px) {
    flex-direction: column;
  gap: 50px;
  }
`

export const MiddleBody = styled.div`
    width: 100%;
  display: flex;
  background-color: yellow;
  height: 500px;
  z-index: -1;
`

export const Message = styled.p`
  display: inline-block;
  font-size: 1.5vw;
  margin-top: 100px;
  @media (max-width: 1168px) {
    margin-top: 20px;
  font-size: 3vw;
  text-align: center;


  }
`

export const CommunityBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Button = styled.button<{$position?: string, $color?:string, $shadow?:string, $backgroundColor?:string}>`
	--color: white;
	--background-color: transparent;
	--shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	color: ${props => props.$color || `var(--color)`};
	background-color: ${props => props.$backgroundColor || `var(--background-color)`};
	/* position: ${props => props.$position || ''};  */
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 30px 10px 30px;
	font-weight: 600;
	text-transform: uppercase;
	border: none;
	outline: none;
	font-size: 20px;
	box-shadow: ${props => props.$shadow || `var(--shadow)`};
`

export const BraidedGirl = styled.img`
	height:60%;
  width: 60%;
  @media (max-width: 1168px) {
    height:100%;
  width: 100%;
  }
`

BraidedGirl.defaultProps = {
	src: braidedGirl
}


export const StandingMan = styled.img`
  	height:60%;
  width: 60%;
`

StandingMan.defaultProps = {
	// src: standingMan
}