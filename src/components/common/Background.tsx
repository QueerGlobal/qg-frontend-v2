import React, { FC } from "react";
import { BackgroundColor, HuggingImg, CottonCandyX, WhiteX, BlackSolidHex, CottonCandySolidHex } from "./Background.css";
import hugging from "../../assets/misc/placeholder.jpeg";

/**
 * Testing out pure CSS shapes for background decoration
 * 
 * A div with an image of Deacon and D'Arcy, and various 
 * divs of triangles, squares, x's, and hexagonal shapes
 * 
 * @returns Node Background
 */
const Background: FC = () => {
	return (
		<BackgroundColor>
			<HuggingImg
				// shape={hugging}
				left="25%"
				top="70px"
				width="200px"
				height="300px"
				src={hugging}
			/>
			
			<CottonCandyX />

			<WhiteX />
			
			<BlackSolidHex className="bsh1" />
			<BlackSolidHex className="bsh2" />
			<BlackSolidHex className="bsh3" />

			<CottonCandySolidHex className="ccsh1" />
			<CottonCandySolidHex className="ccsh2" />
			<CottonCandySolidHex className="ccsh3" />
		</BackgroundColor>
	);
};

export default Background;