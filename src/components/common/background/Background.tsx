import React, { FC } from "react";
import { BackgroundColor, TinyCottonCandyX, LargeCottonCandyX, HuggingImg, WhiteX, WhiteXTwo, BlackSolidHex, CottonCandySolidHex, WhiteTriangle, GradientPinkTriangle, CircleShape, NineWhiteSpikes, BlackBG, BlackX, CottonCandySemiOpaqueRect, SVGDiv, Cont, Cols, Blue, Red, Pink, Yellow, GridOfPics, NineWhitePointsStarDiv, SingleWhitePoint, BorderedHex, PurpleBlock, PinkBlock, WhiteBlock, Pink2Block } from "./Background.css";
import colors from "../../../styles/colors";

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
			<BackgroundColor className="bgColor">
				<GradientPinkTriangle /> 

				<NineWhitePointsStarDiv>
					<SingleWhitePoint className="SWPT1" />
					<SingleWhitePoint className="SWPT2" />
					<SingleWhitePoint className="SWPT3" />
					<SingleWhitePoint className="SWPT4" />
					<SingleWhitePoint className="SWPT5" />
					<SingleWhitePoint className="SWPT6" />
					<SingleWhitePoint className="SWPT7" />
					<SingleWhitePoint className="SWPT8" />
					<SingleWhitePoint className="SWPT9" />
				</NineWhitePointsStarDiv>

				<SVGDiv>
					<svg viewBox="0 0 1000 1000" version="1.1">
						<path d="M 740 230 L 780 190 L 800 250 L 740 230" stroke="#FFFFFF" strokeWidth="2" fill="none"></path>
					</svg>
				</SVGDiv>

				<TinyCottonCandyX />

				<LargeCottonCandyX />
				
				<WhiteX />
				
				<BlackSolidHex />

				<PinkBlock />

				<PurpleBlock />

				<Pink2Block />

				<WhiteBlock />
				
				{/** Unfinished */}

				{/* <WhiteXTwo />

				<CottonCandySolidHex className="ccsh1" />
				<CottonCandySolidHex className="ccsh2" />
				<CottonCandySolidHex className="ccsh3" />

				<CircleShape />

				<NineWhiteSpikes className="nws1" />
				<NineWhiteSpikes className="nws2" />
				<NineWhiteSpikes className="nws3" />

				<CottonCandySemiOpaqueRect />

				<BlackX /> */}
			</BackgroundColor>
	);
};

export default Background;