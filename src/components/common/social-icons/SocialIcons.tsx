import React, { FC } from "react";
import { SocialContainer, IconsWrapper, Icon } from "./SocialIcons.css";
import facebook from "../../../assets/footer/facebook.svg";
import twitter from "../../../assets/footer/twitter.svg";
import instagram from "../../../assets/footer/instagram.svg";
import linkedIn from "../../../assets/footer/linkedIn.svg";
import pinterest from "../../../assets/footer/pinterest.svg";

const SocialIcons: FC = () => {
	return (
		<SocialContainer>
			<IconsWrapper>
				<a
					href="https://www.facebook.com/QueerGlobal"
					target="_blank"
					rel="noreferrer"
				>
					<Icon src={facebook} alt="facebook" />
				</a>
				<a
					href="https://twitter.com/queerglobal_"
					target="_blank"
					rel="noreferrer"
				>
					<Icon src={twitter} alt="twitter" />
				</a>
				<a
					href="https://www.instagram.com/queerglobal"
					target="_blank"
					rel="noreferrer"
				>
					<Icon src={instagram} alt="instagram" />
				</a>
				<a
					href="https://www.linkedin.com/company/queer-global"
					target="_blank"
					rel="noreferrer"
				>
					<Icon src={linkedIn} alt="linkedIn" />
				</a>
				<a
					href="https://www.pinterest.com/QueerGlobal/"
					target="_blank"
					rel="noreferrer"
				>
					<Icon src={pinterest} alt="pinterest" />
				</a>
			</IconsWrapper>
		</SocialContainer>
	);
};

export default SocialIcons;
