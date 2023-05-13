import { FC } from "react";
import { ForegroundContainer, BlueSemiOpaqueRect, PurpleSemiOpaqueRect, PurpleSemiOpaqueRect2 } from "./ForegroundShapes.css";

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
        <ForegroundContainer>
			<BlueSemiOpaqueRect />
			
			<PurpleSemiOpaqueRect />
			
			<PurpleSemiOpaqueRect2 />
        </ForegroundContainer>
    )
};

export default Background;
