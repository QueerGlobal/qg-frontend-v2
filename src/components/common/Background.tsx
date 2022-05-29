import React, { FC } from "react";
import { BackgroundColor, HuggingImg, CottonCandyX, WhiteX, BlackSolidHex, CottonCandySolidHex, WhiteTriangle, CircleShape, NineWhiteSpikes } from "./Background.css";
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
			
			<BlackSolidHex />

			<CottonCandySolidHex className="ccsh1" />
			<CottonCandySolidHex className="ccsh2" />
			<CottonCandySolidHex className="ccsh3" />

			<WhiteTriangle />

			<CircleShape />

			<NineWhiteSpikes className="nws1" />
			<NineWhiteSpikes className="nws2" />
			<NineWhiteSpikes className="nws3" />
		</BackgroundColor>
	);
};

export default Background;