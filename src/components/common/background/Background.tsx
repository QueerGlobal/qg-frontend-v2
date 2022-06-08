import React, { FC } from "react";
import { BackgroundColor, TinyCottonCandyX, LargeCottonCandyX, HuggingImg, WhiteX, WhiteXTwo, BlackSolidHex, CottonCandySolidHex, WhiteTriangle, GradientPinkTriangle, CircleShape, NineWhiteSpikes, BlackBG, BlackX, CottonCandySemiOpaqueRect, SVGDiv, Cont, Cols, Blue, Red, Pink, Yellow, GridOfPics, NineWhitePointsStarDiv, SingleWhitePoint, BorderedHex } from "./Background.css";
import hugging from "../../assets/misc/placeholder.jpeg";
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

				<BlackX />

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta. Senectus et netus et malesuada. Id diam vel quam elementum pulvinar. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Bibendum est ultricies integer quis auctor elit. Vel quam elementum pulvinar etiam non. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Nibh ipsum consequat nisl vel pretium lectus quam. Vitae auctor eu augue ut lectus arcu. Lectus quam id leo in vitae. Aliquam etiam erat velit scelerisque in. Duis tristique sollicitudin nibh sit amet. Pulvinar sapien et ligula ullamcorper malesuada proin libero.
				</p>
				<p>
					Purus sit amet luctus venenatis lectus magna fringilla urna. Arcu non odio euismod lacinia at quis risus sed vulputate. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras adipiscing enim eu turpis egestas pretium aenean. Nibh praesent tristique magna sit amet. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Semper auctor neque vitae tempus quam pellentesque nec. Libero justo laoreet sit amet cursus sit amet. Condimentum vitae sapien pellentesque habitant. Cras sed felis eget velit aliquet sagittis. Vivamus at augue eget arcu dictum varius duis at. Tellus cras adipiscing enim eu. Amet est placerat in egestas. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Enim blandit volutpat maecenas volutpat blandit. Eros in cursus turpis massa tincidunt. Magna fringilla urna porttitor rhoncus dolor. Egestas diam in arcu cursus euismod quis viverra nibh.
				</p>
				<Cont>
					<strong>WE ARE <span>family</span>.</strong>
					<p><small>Our amazing volunteers!</small></p>
					<GridOfPics>
						<Cols>
							<Blue>Placeholder</Blue>
							<Blue>Placeholder</Blue>
							<Blue>Placeholder</Blue>
							<Blue>Placeholder</Blue>
						</Cols>
						<Cols>
							<Red>Placeholder</Red>
							<Red>Placeholder</Red>
							<Red>Placeholder</Red>
							<Red>Placeholder</Red>
						</Cols>
						<Cols>
							<Pink>Placeholder</Pink>
							<Pink>Placeholder</Pink>
							<Pink>Placeholder</Pink>
							<Pink>Placeholder</Pink>
						</Cols>
						<Cols>
							<Yellow>Placeholder</Yellow>
							<Yellow>Placeholder</Yellow>
							<Yellow>Placeholder</Yellow>
							<Yellow>Placeholder</Yellow>
						</Cols>
						<Cols>
							<Pink>Placeholder</Pink>
							<Pink>Placeholder</Pink>
							<Pink>Placeholder</Pink>
							<Pink>Placeholder</Pink>
						</Cols>
						<Cols>
							<Yellow>Placeholder</Yellow>
							<Yellow>Placeholder</Yellow>
							<Yellow>Placeholder</Yellow>
							<Yellow>Placeholder</Yellow>
						</Cols>
					</GridOfPics>
				</Cont> */}
			</BackgroundColor>
	);
};

export default Background;