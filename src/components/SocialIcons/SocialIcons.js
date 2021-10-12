import React from "react";
import { SocialContainer, IconContainer } from "./SocialIcons.Styled";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsPinterest } from "react-icons/bs";

const SocialIcons = () => {
	return (
		<SocialContainer>
			<IconContainer>
				<BsFacebook />
			</IconContainer>
			<IconContainer>
				<AiFillTwitterCircle />
			</IconContainer>
			<IconContainer>
				<FaInstagramSquare />
			</IconContainer>
			<IconContainer>
				<FaLinkedinIn />
			</IconContainer>
			<IconContainer>
				<BsPinterest />
			</IconContainer>
		</SocialContainer>
	);
};

export default SocialIcons;
