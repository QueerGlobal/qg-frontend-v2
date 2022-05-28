import React, { FC } from "react";
import { BackgroundColor, Shape } from "./Background.css";
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
			<Shape
				// shape={hugging}
				left="25%"
				top="70px"
				width="200px"
				height="300px"
				src={hugging}
			></Shape>
		</BackgroundColor>
	);
};

export default Background;