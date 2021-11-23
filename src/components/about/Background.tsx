import React, { FC } from "react";
import { ColorBlue, Shape } from "./About.css";
import hugging from "../../assets/about/About-Men-Hugging.png";

const Background: FC = () => {
	return (
		<ColorBlue>
			<Shape
				// shape={hugging}
				left="25%"
				top="70px"
				width="200px"
				height="300px"
				src={hugging}
			></Shape>
		</ColorBlue>
	);
};

export default Background;
