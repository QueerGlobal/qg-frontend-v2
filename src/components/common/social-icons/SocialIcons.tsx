import React, { FC } from "react";
import {
	SocialContainer,
	IconsWrapper,
	IconContainer,
} from "./SocialIcons.css";
import facebook from "../../../assets/footer/facebook.svg";
import twitter from "../../../assets/footer/twitter.svg";
import instagram from "../../../assets/footer/instagram.svg";
import linkedIn from "../../../assets/footer/linkedIn.svg";
import pinterest from "../../../assets/footer/pinterest.svg";

const SocialIcons: FC = () => {
	return (
		<SocialContainer>
			<IconsWrapper>
				<IconContainer className="svg">
					<a
						href="https://www.facebook.com/QueerGlobal"
						target="_blank"
						rel="noreferrer"
					>
						<img src={facebook} alt="facebook" />
					</a>
				</IconContainer>
				<IconContainer>
					<a
						href="https://twitter.com/queerglobal_"
						target="_blank"
						rel="noreferrer"
					>
						<img src={twitter} alt="twitter" />
					</a>
				</IconContainer>
				<IconContainer>
					<a
						href="https://www.instagram.com/queerglobal"
						target="_blank"
						rel="noreferrer"
					>
						<img src={instagram} alt="instagram" />
					</a>
				</IconContainer>
				<IconContainer>
					<a
						href="https://www.linkedin.com/company/queer-global"
						target="_blank"
						rel="noreferrer"
					>
						<img src={linkedIn} alt="linkedIn" />
					</a>
				</IconContainer>
				<IconContainer>
					<a
						href="https://www.pinterest.com/QueerGlobal/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={pinterest} alt="pinterest" />
					</a>
				</IconContainer>
			</IconsWrapper>
		</SocialContainer>
	);
};

export default SocialIcons;
