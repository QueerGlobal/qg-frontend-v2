import React, { FC } from "react";
import {
	AboutContainer,
	MiddleDiv,
	Header,
	Paragraph,
	TahuFont,
} from "./About.css";
import Background from "./Background";

const About: FC = () => {
	return (
		<AboutContainer className="p-0">
			<Background />
			{/* <AboutContainer className="p-0">
				<MiddleDiv className="bg">
					<Header>about us</Header>
					<Paragraph>
						We support and prioritize the people who are least represented in
						and outside of the rainbow umbrella. We want to give the community a
						safe, inviting space to confidently be themselves, easily find
						accurate, trusted information, share common experience, and have the
						ability to support other LGBTQIA+ people and businesses in their
						area.
					</Paragraph>
					<Header>
						we are<TahuFont>united</TahuFont>.
					</Header>
					<Paragraph>
						We are Black. We are Latinx. We are Asian, Middle Eastern, White, Bi
						and Multi-Racial. We are tall, short, curvy, plus size, fat. We use
						chairs, canes, crutches, lifts, and braces.
						<b>
							{" "}
							And we believe that kind of diversity is what makes Queerness
							beautiful.
						</b>{" "}
						We strive to be a place where ALL people can talk about the
						solutions they found to specific crises in their lives, so other
						people do not have to go through them as well. A place where people
						do not have to fear outing themselves to coworkers and friends who
						follow them when discussing physical limitations, needs for legal
						advice, future medical procedures, or their financial situations.
						<b>
							{" "}
							Queer Global is a worldwide masterlist for marginalized peoples in
							the Queer community.
						</b>
					</Paragraph>
					<Header>
						we are<TahuFont>proud</TahuFont>.
					</Header>
					<Paragraph>
						Queer Global is run by a Black trans/pan/poly/not-so-able-bodied man
						and a multi-racial pan/poly musician, business owner, stylist and
						vintage clothing expert. Our goal is to provide a platform that
						consolidates resources and information for people outside of the Big
						5 social media platforms, where it gets buried in posts, behind
						locked accounts and manipulative algorithms. We embrace the
						transparency of shared community advice and information. With all
						the resources you need at your fingertips, we hope you can be
						confident in just being yourself every day. We believe providing
						information is only the beginning &#38; we're just getting started.
					</Paragraph>
					<Header>
						we are<TahuFont>family</TahuFont>.
					</Header>
				</MiddleDiv>
			</AboutContainer> */}
		</AboutContainer>
	);
};

export default About;
